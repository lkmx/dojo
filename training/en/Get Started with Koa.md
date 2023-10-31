## Introduction

[Koa](https://koajs.com/) is a new web framework created by the team behind [Express](https://expressjs.com/). It aims to be a modern and more minimalist version of Express.

Some of its characteristics are its support and reliance on new JavaScript features such as [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) and [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). Koa also does not ship with any middleware though it can be extended using custom and existing plugins.

In this article, you will learn more about the Koa framework and build an app to get familiar with its functionality and philosophy.
## Prerequisites

If you would like to follow along with this article, you will need:

- Node.js installed locally, which you can do by following [How to Install Node.js and Create a Local Development Environment](https://www.digitalocean.com/community/tutorial_series/how-to-install-node-js-and-create-a-local-development-environment).
- You also need to have a working knowledge of JavaScript and ES6 syntax.

This tutorial was verified with Node v15.14.0, `npm` v7.10.0, `koa` v2.13.1, `@koa/router` v10.0.0, and `koa-ejs` v4.3.0.
## [Step 1 — Setting Up the Project](https://www.digitalocean.com/community/tutorials/how-to-build-a-hello-world-application-with-koa#step-1-setting-up-the-project)[](https://www.digitalocean.com/community/tutorials/how-to-build-a-hello-world-application-with-koa#step-1-setting-up-the-project)

To begin, create a new directory for your project. This can be done by copying and running the command below in your terminal:

```
mkdir koa-example
```

**Note:** You can give your project any name, but this article will be using `koa-example` as the project name and directory.

At this point, you have created your project directory `koa-example`. Navigate to the newly created project directory.

```
cd koa-example
```

Then, initialize your Node project from inside the directory.

```
npm init -y
```

After running the `npm init` command, you will have a `package.json` file with the default configuration.

Next, run this command to install Koa:

```
npm install koa@2.13.1
```

Your application is now ready to use Koa.

## [Step 2.- Creating a Koa Server](https://www.digitalocean.com/community/tutorials/how-to-build-a-hello-world-application-with-koa#step-2-creating-a-koa-server)[](https://www.digitalocean.com/community/tutorials/how-to-build-a-hello-world-application-with-koa#step-2-creating-a-koa-server)

First, create the `index.js` file. Then, using your code editor of choice, open the `index.js` file and add the following lines of code:

index.js

```js
'use strict';

const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(1234);
```

In the code above, you created a Koa application that runs on port `1234`. You can run the application using the command:

```
node index.js
```

And visit the application on `http://localhost:1234`.