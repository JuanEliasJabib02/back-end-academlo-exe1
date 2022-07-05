

const express = require('express')
// Init express app
const app = express()
app.use(express.json()) // Funciona para que la aplicacion pueda recibir json


// Routers

const { registerRouter } = require('./routers/registrations.router')

// Endpoints

app.use('/api/v1/registrations', registerRouter )


module.exports = { app }