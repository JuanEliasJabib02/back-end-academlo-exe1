

 const express = require('express')

// Controllers -> Funciones de los verbos http para enviar las respuesta al cliente
const {
    getRegisters,
    getRegisterById,
    checkin,
    checkout,
    cancelRegister,
} = require('../controllers/registrations.controller');

const registerRouter = express.Router(); // Cada modelo tiene que ser su router


registerRouter.get('/', getRegisters);
registerRouter.get('/:id', getRegisterById);
registerRouter.post('/', checkin)
registerRouter.patch('/:id', checkout)
registerRouter.delete('/:id', cancelRegister)


module.exports = { registerRouter }



 
