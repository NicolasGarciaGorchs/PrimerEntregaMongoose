const mongoose = require('mongoose')


const usersCollection = 'user'// siempre en singular, mongoose se encarga de pluralizar

const usersSchema = new mongoose.Schema({ // LOS PARAMETROS SE MANDAN A mongoose.Schema
    name: String,
    lastname: String,
    email: {
        type: String,
        unique: true // SI ALGUIEN QUIERE USAR EL MISMO EMAIL NO PUEDE
    },
    age: Number,
    status: {
        type: Boolean,
        default : true,
    },
})


const Users = mongoose.model(usersCollection, usersSchema) // NOMBRE DE COLECCION Y ESQUEMA DE LA COLLECION



module.exports = Users


// Users.create({age:3}) // ESTO ES MONGOOSE
// db.users.insertOne({name: 'Nico'}) // ESTO ES MONGO