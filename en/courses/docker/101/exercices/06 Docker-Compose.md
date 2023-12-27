**Instruction 1.** 

Run build command on /frontend directory

    docker build -t compose-frontend ./frontend


Run build command on /backend directory

    docker build -t compose-backend ./backend

**Instruction 2.**

Modify compose file to look like this:

``` yaml
version: "3.8"
services:
mongodb:
    image: 'mongo'
    volumes: 
    - data:/data/db
    env_file: 
    - ./env/mongo.env
backend:
    image: compose-backend
    ports:
    - '80:80'
    volumes: 
    - logs:/app/logs
    - ./backend:/app
    - /app/node_modules
    env_file: 
    - ./env/backend.env
    depends_on:
    - mongodb
frontend:
    image: compose-frontend
    ports: 
    - '3000:3000'
    volumes: 
    - ./frontend/src:/app/src
    stdin_open: true
    tty: true
    depends_on: 
    - backend

volumes: 
data:
logs:
```

**Instruction 3.**
    
    docker compose up

> Go to http://localhost:3000 on the browser to verify that the app is up and running.


