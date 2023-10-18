const app = require('./app')
const { port } = require('./config/index.config')
require('dotenv').config() // REQUIRE NECESARIO PARA EJECUTAR .env 

app.listen(port, ()=> {
    console.log(`Server andando en puerto ${port}`)
})


// require('dotenv').config() // REQUIRE NECESARIO PARA EJECUTAR .env 
//ES LO MISMO QUE PONER 
// const dotenv = require('dotenv')
// dotenv.config()