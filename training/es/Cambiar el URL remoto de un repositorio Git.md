## Verificar la URL Remota Actual

Antes de realizar cambios, es útil verificar la URL remota actual. Puedes hacer esto utilizando el siguiente comando:

``` 
git remote -v 
```

Este comando mostrará las URL de lectura y escritura para el repositorio remoto llamado `origin`.

## Cambiar la URL Remota

Para cambiar la URL remota, utiliza el siguiente comando:

``` 
git remote set-url origin <NUEVA_URL> 
```

Reemplaza `<NUEVA_URL>` con la nueva dirección del repositorio remoto. Puede ser una URL HTTPS o SSH, dependiendo de tus preferencias y configuración.

Por ejemplo, si estás cambiando de HTTPS a SSH, la nueva URL se verá algo así (asegúrate de tener configurada tu clave SSH en el servidor):

``` 
git remote set-url origin git@github.com:nombre-usuario/nombre-repositorio.git 
```

Si estás cambiando de SSH a HTTPS, la nueva URL se verá así:

``` 
git remote set-url origin https://github.com/nombre-usuario/nombre-repositorio.git 
```

## Verificar el Cambio

Verifica que la URL remota se haya cambiado correctamente utilizando el comando:

``` 
git remote -v 
``` 

nuevamente. Asegúrate de que la URL remota ahora apunte a la nueva dirección del repositorio.

---

- [x] Eliminar líneas entre párrafos. #EQ ✅ 2023-11-08
- [x] Eliminar números entre los párrafos #EQ ✅ 2023-11-08
- [x] Agregar una línea vacía antes de los símbolos de código \`\`\`. #EQ ✅ 2023-11-08
- [x] Renombrar a "Cambiar el URL remoto de un repositorio Git". #EQ ✅ 2023-11-08

