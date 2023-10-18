require ('dotenv').config()


module.exports = { // EN ESTE MODULE EXPORTA EL OBJETO DIRECTAMENTE
    port: process.env.puerto || 3001,// ACA VA LA VARIABLE .env , EL || SIGNIFICA " SINO "
}