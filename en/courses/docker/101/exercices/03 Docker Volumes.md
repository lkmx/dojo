## Exercise Result

**Instruction 1.** 

In package.json add devDependencies to add nodemon package and use it in the script.

```js
{
  "name": "data-volume-example",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "author": "Maximilian Schwarzmüller / Academind GmbH",
  "license": "ISC",
  "scripts": {
    "start": "nodemon server.js"
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1"
  }  
}
```

**Instruction 2.** 

Create a dockerfile with the following configuration.

```Dockerfile
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
```

In the terminal execute the following to build the image.

```
docker build -t {{image name}}:{{image tag}} .
```

**Instruction 3.** 

In the terminal execute the following to run the container.

```
docker run -d -p 3000:3000 \
  --name {{container name}} \
  -v {{feedback volume name}}:/app/feedback \
  -v {{absolute path of the project}}:/app:ro \
  -v /app/temp \
  -v /app/node_modules \
  {{image name}}
```

Every volumen path is according to your project and WORKDIR in your Dockerfile.

Be sure the container is running executing the following in the terminal.

```
docker ps 
```


**Instruction 4.**

In the browser, open the project with the following link.

http://localhost:3000/

Fill the form to save a feedback.

After save it, check the feedback content with the following link.

http://localhost:3000/{{feedback title}}.txt


**Instruction 5.**

In the terminal 

Stop the container.

```
docker stop {{container name}}
```

Remove it.

```
docker rm {{container name}}
```

Repeat instrucion 3 and 4, and be sure it still working and your saved feedbacks before remove the container, still there.




