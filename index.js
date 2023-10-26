//import json-server in index.js file
const jsonServer = require('json-server')

//create a server for video-app
const videoappServer = jsonServer.create()

// setup path/route from json file
const router = jsonServer.router("db.json")

//Returns middleware used by JSON server
const middleware = jsonServer.defaults()

//setuo port for running server
const port = 4000 || process.env.PORT

// use middleware and router in server
videoappServer.use(middleware)
videoappServer.use(router)


//to listen server from resolving request from client
videoappServer.listen(port,()=>{
    console.log(`Media Player server started at port  ${port}, and waiting for client request!!!`);
})