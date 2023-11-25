---
tech:
  - "[[yarn]]"
  - "[[nodejs]]"
---
## Instalar Node.js

Yarn requiere Node.js 14.19, 16.9 o mayor.

- Usuarios regulares:  [[Instalar Node.js]].
- Desarrolladores de software que requieren cambiar fácilmente de versiones de Node.js: [[Instalar Node.js con nvm]].

## Instalar yarn

Las versiones modernas de yarn no se instalan globalmente o mediante npm, sino mediante `corepack`, una herramienta instalada por default en las versiones específicas de Node.js 14.19, 16.9 o mayores.

```shell
corepack enable
yarn set version stable
```

Comprueba que yarn está instalado correctamente:

```shell
yarn --version
```

Deberás obtener una versión `4.0.2` o posterior.