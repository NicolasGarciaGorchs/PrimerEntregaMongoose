const {app,server, io} = require('./app');
const SocketConfig = require('./socketConfig');
const { port } = require('./config/index.config')
require('dotenv').config() // REQUIRE NECESARIO PARA EJECUTAR .env 

server.listen(port, ()=> {
    console.log(`Server andando en puerto ${port}`)
});

const socketConfig = new SocketConfig(io);


// require('dotenv').config() // REQUIRE NECESARIO PARA EJECUTAR .env 
//ES LO MISMO QUE PONER 
// const dotenv = require('dotenv')
// dotenv.config()