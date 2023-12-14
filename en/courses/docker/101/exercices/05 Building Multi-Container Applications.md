## Communication the multi-container

**Instruction 1.**

Create MySQL database container with the following command.

    ```bash
        docker pull mysql:5.7
    ```

Run the container created with the following command

    ```sql
        docker run -d \
        --name mysql_docker \
        --rm \
        -e MYSQL_ROOT_PASSWORD=0426 \
        -e MYSQL_DATABASE=docker_example \
        -e MYSQL_USER=glen \
        -e MYSQL_PASSWORD=0426 \
        -p 3306:3306 \
        -v mysql-volume:/var/lib/mysql \
        mysql:5.7
    ```

Create the users table in the database

    ```sql
        CREATE TABLE `USERS` (
            `USER_ID` varchar(36) NOT NULL,
            `USER_NAME` varchar(100) DEFAULT NULL,
            PRIMARY KEY (`USER_ID`)
        ) 
        ENGINE=InnoDB 
        DEFAULT CHARSET=latin1;
    ```

**Instruction 2.**

Create the Dockerfile for the backend

    ```Dockerfile
        FROM node

        WORKDIR /app

        COPY package.json .

        RUN npm install

        COPY . .

        EXPOSE 3001

        CMD [ "node", "app.js" ]
    ```

Create the backend container with the following command

    ```bash
        docker build -t users-node .
    ```

Run the backend container with the following command

    ```bash
        docker run --name user-backend --rm -p 3001:3001 users-node
    ```

With postman run the back end-point to obtain the list of users

    ```bash
        curl http://172.17.0.3:3001
    ```

**Instruction 3.**

Create the Dockerfile for the frontend

    ```Dockerfile
        FROM node

        WORKDIR /app

        COPY package.json .

        RUN npm install

        COPY . .

        EXPOSE 3000

        CMD [ "npm", "start" ]
    ```

Create the frontend container with the following command

    ```bash
        docker build -t users-react .
    ```

Run the frontend container with the following command

    ```bash
        docker run --name user-frontend --rm -p 3000:3000 users-react
    ```

## Communication the multi-container with networks

**Instruction 1.**

Create a docker network with the following command

    ```bash
        docker network create users-net
    ```

**Instruction 2.**

Create MySQL database container with the following command.

    ```bash
        docker pull mysql:5.7
    ```

Run the container created with the following command

    ```sql
        docker run -d \
        --name mysql_docker \
        --rm \
        --network users-net \
        -e MYSQL_ROOT_PASSWORD=0426 \
        -e MYSQL_DATABASE=docker_example \
        -e MYSQL_USER=glen \
        -e MYSQL_PASSWORD=0426 \
        -p 3306:3306 \
        -v mysql-volume:/var/lib/mysql \
        mysql:5.7
    ```

Create the users table in the database

    ```sql
        CREATE TABLE `USERS` (
            `USER_ID` varchar(36) NOT NULL,
            `USER_NAME` varchar(100) DEFAULT NULL,
            PRIMARY KEY (`USER_ID`)
        ) 
        ENGINE=InnoDB 
        DEFAULT CHARSET=latin1;
    ```

**Instruction 4.**

Create the Dockerfile for the backend

    ```Dockerfile
        FROM node

        WORKDIR /app

        COPY package.json .

        RUN npm install

        COPY . .

        EXPOSE 80

        CMD [ "node", "app.js" ]
    ```

Create the backend container with the following command

    ```bash
        docker build -t users-node .
    ```

Run the backend container with the following command

    ```bash
        docker run --name user-backend --rm -p 3001:3001 --network users-net users-node
    ```

With postman run the back end-point to obtain the list of users

    ```bash
        curl http://localhost:3001/
    ```

**Instruction 4.**

Create the Dockerfile for the frontend

    ```Dockerfile
        FROM node

        WORKDIR /app

        COPY package.json .

        RUN npm install

        COPY . .

        EXPOSE 3000

        CMD [ "npm", "start" ]
    ```

Create the frontend container with the following command

    ```bash
        docker build -t users-react .
    ```

Run the frontend container with the following command

    ```bash
        docker run --name user-frontend --rm -p 3000:3000 --network users-net users-react
    ```
