## Exercise Result

### Container to container and Container to network
**Instruction 1.** 

For create mongo container
```
docker run -d --name {{name}} mongo
```

**Instruction 2.** 

To check the IP address of the mongo container
```
docker container inspect {{container name}}
```
and look for the variable called "IPAddress"

copy and paste on line 70 of the app.js file
```
mongoose.connect(
  'mongodb://{{mongodb container ip}}:27017/swfavorites',
  { useNewUrlParser: true },
  (err) => {
```

For create docker image to the app
```
docker build -t {{name}} .
```

For create the container
```
docker run --name {{name}} -d --rm -p 3000:3000 {{image name}}
```

**Instruction 3.** 

Go to a service that allows you to make HTTP requests like Postman or ThunderClient and query the GET endpoint
```
http://localhost:3000/movies
```



**Instruction 4.** 


To add a favorite movie, send the POST request

```
http://localhost:3000/favorites
```
with the body

```
{
  "name":"{{movie name}}",
  "type":"movie",
  "url":"{{movie link}}"
}
```

you can obtain the data from the request in point 3.

To get favorite movies with the GET request
```
http://localhost:3000/favorites
```

### Docker network

**Instruction 1.** 

For create a docker network and visualize it
```
docker network create {{network name}}
docker network ls
```

**Instruction 2.** 

Add the container name to the mongo conection in the code app
```
mongoose.connect(
  'mongodb://{{container mongo name}}:27017/swfavorites',
  { useNewUrlParser: true },
  (err) => {
```

Create the mongodb docker container with the name specified in the connection
```
docker run -d --name {{container mongo name}} --network {{network name}} mongo
```

Create the app docker image
```
docker build -t {{image name}} .
```
For create the container
```
docker run --name {{container name}} --network {{network name}} -d --rm -p 3000:3000 {{image name}}
```

**Instruction 3.** 

For get the movies for the API
```
http://localhost:3000/movies
```
For add a favorite movie

```
http://localhost:3000/favorites
```
with the body

```
{
  "name":"{{movie name}}",
  "type":"movie",
  "url":"{{movie link}}"
}
```

For get favorite movies
```
http://localhost:3000/favorites
```