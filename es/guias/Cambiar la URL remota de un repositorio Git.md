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

Reemplaza `<NUEVA_URL>` con la nueva dirección del repositorio remoto.

## Verificar el Cambio

Verifica que la URL remota se haya cambiado correctamente utilizando el comando:

``` 
git remote -v 
``` 

Asegúrate de que la URL remota ahora apunte a la nueva dirección del repositorio.