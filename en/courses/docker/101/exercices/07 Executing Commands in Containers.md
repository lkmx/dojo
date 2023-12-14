**Instruction 1.** 

Write the following files:

#### **`Dockerfile`**
``` dockerfile
FROM node:14-alpine

WORKDIR /app

ENTRYPOINT [ "npm" ]
```

#### **`docker-compose.yaml`**
``` yaml
version: "3.8"
services:
  npm:
    build: ./
    stdin_open: true
    tty: true
    volumes:
      - ./:/app
```

**Instruction 2.**

Execute `docker compose run --rm npm init`

**Instruction 3.**

Execute `docker compose run --rm npm install axios`
Execute `docker compose run --rm npm install node-cron`

**Instruction 4.**
 
 Open `package-lock.json` in editor and check its contents.


