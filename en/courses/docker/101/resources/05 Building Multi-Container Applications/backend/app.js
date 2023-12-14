const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3001;

app.use(cors());

const connectionConfig = {
  host: 'mysql_docker',
  user: 'root',
  password: '0426',
  database: 'docker_example'
};

async function iniciarServidor() {
  try {
    const connection = await mysql.createConnection(connectionConfig);

    app.use(express.json());

    app.get('', async (req, res) => {
      try {
        const [rows, fields] = await connection.execute('SELECT * FROM USERS');
        res.json({ usuarios: rows });
      } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error en la consulta a la base de datos' });
      }
    });

    app.post('', async (req, res) => {
      const { nombre } = req.body;
      const userId = uuidv4(); 

      try {
        const [result] = await connection.execute('INSERT INTO USERS (USER_ID, USER_NAME) VALUES (?, ?)', [userId, nombre]);
        res.json({ mensaje: 'Usuario agregado correctamente', userId });
      } catch (error) {
        console.error('Error al agregar usuario:', error);
        res.status(500).json({ error: 'Error al agregar usuario a la base de datos' });
      }
    });

    app.put('/:id', async (req, res) => {
      const userId = req.params.id;
      const { nombre } = req.body;

      try {
        await connection.execute('UPDATE USERS SET NOMBRE = ? WHERE USER_ID = ?', [nombre, userId]);
        res.json({ mensaje: 'Usuario actualizado correctamente' });
      } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ error: 'Error al actualizar usuario en la base de datos' });
      }
    });

    app.delete('/:id', async (req, res) => {
      const userId = req.params.id;

      try {
        await connection.execute('DELETE FROM USERS WHERE USER_ID = ?', [userId]);
        res.json({ mensaje: 'Usuario eliminado correctamente' });
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ error: 'Error al eliminar usuario de la base de datos' });
      }
    });

    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
}

iniciarServidor();
