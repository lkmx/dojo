---
tech:
  - "[[Git]]"
---
Navega al directorio donde deseas clonar el repositorio:

```shell
cd ruta/del/directorio
```

Clona el repositorio usando HTTPS (si prefieres usar HTTPS):

 ```shell
git clone https://github.com/usuario/nombre-repositorio.git
```

Este comando descargará el repositorio utilizando HTTPS. Si el repositorio es privado, se te pedirá que ingreses tu nombre de usuario y contraseña de la plataforma de alojamiento. 
 
Clona el repositorio usando SSH (si prefieres usar SSH y ya has configurado tus claves SSH):

 ```shell
git clone git@github.com:usuario/nombre-repositorio.git
```

Si estás utilizando SSH, asegúrate de haber configurado tus claves SSH correctamente en tu cuenta de la plataforma de alojamiento para evitar la necesidad de ingresar credenciales cada vez que clonas o interactúas con el repositorio.