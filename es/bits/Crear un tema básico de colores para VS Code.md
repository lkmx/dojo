---
tech:
  - "[[vscode]]"
  - "[[yeoman]]"
---
Para crear un tema básico para Visual Studio Code (VS Code), sigue estos pasos concisos:

1. **Prepara tu entorno:**
   - Asegúrate de tener instalados VS Code y Node.js en tu computadora.

2. **Instala Yeoman y el generador de extensiones de VS Code:**
   - Abre una terminal y ejecuta `npm install -g yo generator-code` para instalar Yeoman y el generador de extensiones de VS Code.

3. **Genera tu proyecto de tema:**
   - En la terminal, navega al directorio donde quieras crear tu tema.
   - Ejecuta `yo code` y selecciona **New Color Theme** cuando se te solicite.
   - Elige comenzar desde un archivo nuevo para un tema básico.

4. **Personaliza tu tema:**
   - Edita el archivo `<nombre-de-tu-tema>.json` en la carpeta 'themes'.
   - Define los colores para el fondo del editor, resaltado de sintaxis, entre otros, en las secciones "colors" y "tokenColors".

5. **Prueba tu tema:**
   - Abre la carpeta de tu tema en VS Code y presiona `F5` para lanzar una ventana nueva con tu extensión.
   - Abre la Paleta de Comandos y selecciona **Preferences: Color Theme** para aplicar y revisar tu tema.

6. **Publica tu tema (opcional):**
   - Si deseas compartir tu tema, sigue las instrucciones de la documentación de VS Code para empaquetar y publicar una extensión.

Este es un proceso básico y puedes referirte a la documentación oficial de VS Code para obtener instrucciones más detalladas y pautas de diseño.