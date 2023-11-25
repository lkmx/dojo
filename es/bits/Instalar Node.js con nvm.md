---
tech:
  - "[[nodejs]]"
  - "[[nvm]]"
platforms:
  - "[[linux]]"
  - "[[macos]]"
---
## Instalar nvm

Asegúrate que nvm está instalado:

```shell
command -v nvm
```

De otra manera instala nvm:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```


## Instalar una versión de Node.js

### LTS

La versión LTS (long-term-support) es recomendada para la operación ya que utiliza una política de gestión de la vida útil del software que la prolonga por un periodo más largo de tiempo.

```shell
nvm install --lts --default
```

La bandera `--default` marca como predeterminada a la versión recién instalada. Otra forma de hacerlo posteriormente es:

```shell
nvm alias default <NODE_VERSION>
```