const { Registration } = require('../models/registrations.model'); // Importo el modelo para que los controladores funcionen bien


const getRegisters = async (req,res, next) =>{
    try {
        const registers = await Registration.findAll()
        res.status(200).json({ 
                status:"sucess",
                registers,
        })
        console.log("working")
    } catch (error) {
        
    }
}

const getRegisterById = async (req,res, next) =>{
    try {
        const { id } =req.params

        const register = await Registration.findOne({where:{id}})

        if(!register){
            return res.status(404).json({
                message:"User not found"
            })
        }   

        res.status(200).json({
            status:"succes",
            register
        })

    } catch (error) {
        
    }
}

const checkin = async (req,res, next) =>{
    try {
       const { entranceTime } = req.body

       const newRegistration = await Registration.create({entranceTime});

       res.status(201).json({
            status:"succes",
            newRegistration,
       })
    } catch (error) {
        
    }
}

const checkout = async (req,res, next) =>{
    try {

        const {id} = req.params

        const { exitTime } =req.body

        const register = await Registration.findOne({where:{id}})

        if(!register){
            return res.status(404).json({
                message:"User not found"
            })
        }   
        await register.update({exitTime, status:"out"})
       
        res.status(204).json({
            status:"succes",
            register,
        });
    } catch (error) {
        
    }
}

const cancelRegister = async (req,res, next) =>{
    try {
       
        const {id} = req.params

        const register = await Registration.findOne({where:{id}})

        if(!register){
            return res.status(404).json({
                message:"User not found"
            })
        }   
        await register.update({status:"canceled"})

        
        res.status(204).json({
            status:"canceled"
        });
    } catch (error) {
        
    }
}

module.exports = { getRegisters , getRegisterById, checkin, checkout, cancelRegister}