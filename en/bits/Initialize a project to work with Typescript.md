---
tech:
  - "[[typescript]]"
  - "[[npm]]"
---
## Initialize Your Project

Create a new directory for your project and navigate into it.

Run `npm init -y` to create a `package.json` file with default values.

## Install TypeScript

Install TypeScript globally (optional) 
```
npm install -g typescript
```

Install TypeScript in your project as a development dependency:

```
npm install --save-dev typescript
```

## Create a TypeScript Configuration File

Run `tsc --init` to create a `tsconfig.json` file in your project. This file is used to configure TypeScript compiler options.

Edit the `tsconfig.json` file to suit your project needs. A recommended configuration include:
 - `"target": "es2016"`: Set the ECMAScript target version.
 - `"module": "commonjs"`: Set the module code generation method.
 - `"rootDir": "./src"`: Specify the root directory of your source files.
 - `"outDir": "./dist"`: Specify the output directory for the compiled JavaScript files.

## Install TypeScript Definitions (if needed)

If you're using libraries like Express, you may need to install TypeScript definitions for them, e.g., `npm install --save-dev @types/express`.

## Write TypeScript Code

Create `.ts` files in the `src` directory.

## Compile TypeScript

Run the TypeScript compiler using `tsc`. This will compile your `.ts` files to `.js` files based on your `tsconfig.json` settings.

```bash
tsc
```

After compiling, you can run your JavaScript code using Node.js, e.g., `node dist/app.js`.

## Optional

### Automating Compilation

Automate the TypeScript compilation process by adding a script in your `package.json` file:

```json
"scripts": {
"build": "tsc"
}
```
 
Now, you can run `npm run build` to compile your TypeScript code.

### Using a Task Runner or Bundler

For larger projects, use task runners like Gulp or Webpack for more complex build processes.