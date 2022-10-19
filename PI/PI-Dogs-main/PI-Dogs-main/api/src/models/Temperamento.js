const {DataTypes} = require('sequelize');

const Temperamento = (database)=>{
    database.define("Temperamento", {   
        
        name:{ type: DataTypes.STRING,  allowNull: false, },
        
    })
};

module.exports = Temperamento;