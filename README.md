# Vuttr API
A simple API for VUTTR (Very Useful Tools to Remember) application. 
This API was developed for demonstration purposes and was developed using: 

* [NodeJS](http://nodejs.org)
* [Express](http://expressjs.org) 
* [Mongoose](https://mongoosejs.com)
* [MongoDB](https://www.mongodb.com/download-center/community) 
* [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
* [Jest](https://jestjs.io)
* [Yarn](https://yarnpkg.com/en/)

# Getting Started
You need to have NodeJS, git and mongodb installed.  

## Running locally 
> $ git clone https://github.com/LeonardoTorres/vuttr-back-end.git\
> $ cd vuttr-back-end\
> $ yarn\
> $ yarn start:dev # run with nodemon\

Your app should now be running on localhost:3000

## Testing
There is only one test created

> $ yarn test

# Env (Optional)
It's possible to set some environment variables values, see below.

* PORT - Default 3000.
* SECRET - Private key to generate Jwt Token.
* MONGODB_URI - MongoDB URI.
* AUTH_MODE - Enable authentication, see below. Default false.

# Authentication (Optional)
Authentication is disabled by default. To enable it, set AUTH_MODE to true and get a access token doing a HTTP GET request to /signin. When authentication is enable is necessary send a **Header Authorization: Bearer token** in each request made to /tools

# Docker (Optional)
It's possible run Vuttr API as a Docker container. For instructions about how to install docker, please visit [Docker documentation](https://docs.docker.com/install/). For instructions about how to install docker compose, please visit [Docker compose](https://docs.docker.com/compose/install/). No need to install mongodb in this case.

## Getting Start
> $ git clone https://github.com/LeonardoTorres/vuttr-back-end.git\
> docker-compose up --build








