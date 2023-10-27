const express = require('express')
const handlebars = require('express-handlebars')
const router = require('./router')
const mongoConnect = require('./db')
const http = require('http');
const socketIo = require('socket.io');

const app = express()

const server = http.createServer(app);

const io = socketIo(server);

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views') // LO MISMO Q STATIC PERO DE VISTA

mongoConnect()
router(app)


module.exports = {app, server, io};
