---
tech:
  - "[[Git]]"
---

Para crear un nuevo branch, utiliza el siguiente el comando:  

```
git branch nombre-del-branch
```    

> Reemplaza "nombre-del-branch" con el nombre que desees para tu nuevo branch.    

Por ejemplo, si quieres crear un branch llamado "nuevo-feature", el comando sería:

```
git branch nuevo-feature
```

Una vez que hayas ejecutado el comando, el nuevo branch se habrá creado, pero aún no estarás en ese branch. Para cambiarte al nuevo branch, puedes usar el comando `git checkout` te cambiara al branch, lo puedes ejecutar de la siguiente manera:

```
git checkout nombre-del-branch
```    

Si deseas crear un nuevo branch y cambiar a él en un solo paso, puedes utilizar el comando `git checkout -b` de la siguiente manera: 

```
git checkout -b nombre-del-branch
```

Esto creará el nuevo branch y te cambiará automáticamente a él.
