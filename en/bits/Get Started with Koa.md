## Configuration

Create an empty folder.

```
mkdir koa-app
cd koa-app
```

Initialize your Node project from inside the directory.

```
npm init -y
```

After running the `npm init` command, you will have a `package.json` file with the default configuration.

Run this command to install Koa.

```
npm install koa@2.13.1
```

## Create a Server

Create the `index.js` file.

```js
'use strict';

const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(1234);
```

Run the application.

```
node index.js
```

Visit the application on http://localhost:1234.