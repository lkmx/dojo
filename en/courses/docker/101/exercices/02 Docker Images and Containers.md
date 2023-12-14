# Exercise result

Node app - Dockerfile

```Dockerfile
FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["node", "server.js"]
```

Python app - Dockerfile 

```Dockerfile
FROM python

WORKDIR /app

COPY . /app

CMD [ "python", "bmi.py" ]
```

## Commands

**Instruction 1.** 

For both node and python app directory.

```
docker build .
```

*Copy the generated id for both images.*

**Instruction 2.**

For node app

```
docker run -d -p 3000:{{port to expose}} {{generated node image id}}
```

For python app

```
docker run -it {{generated python image id}}
```

**Instruction 3.**

For node app

```
docker run -d -p 3000:{{port to expose}} --name {{name for the new container}} {{generated node image id}}
```

For python app

```
docker run -it --name {{name for the new container}} {{generated python image id}}
```

**Instruction 4.**

To see all containers

```
docker ps -a
```

*Copy the container id`s you want to remove*

To stop them

```
docker stop {{container ids separated by a blank space}}
```

To remove them 

```
docker rm {{container ids separated by a blank space}}
```

To see all images

```
docker images
```

*Copy the images id`s you want to remove*

```
docker rmi {{images ids separated by a blank space}}
```

**Instruction 5.**

For both apps

```
docker build -t {{image name}}:{{image version}} . 
```

**Instruction 6.**

For node app

```
docker run -d -p 3000:{{port to expose}} --rm {{image name}}:{{image version}}
```

For python app

```
docker run -p 3000:{{port to expose}} -it --rm {{image name}}:{{image version}}
```

