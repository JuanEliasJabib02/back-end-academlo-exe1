const { db , DataTypes } = require('../utils/database.util')

const Registration = db.define('registration', {
    id:{
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    entranceTime:{
        type: DataTypes.DATE,
        allowNull:null,

    },
    exitTime:{
        type: DataTypes.DATE,
        allowNull: true, // La hora de salida puede ser null xq al momento de entrar aun no tengo la hora de salida 
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active' 
    }
})

module.exports = { Registration }

