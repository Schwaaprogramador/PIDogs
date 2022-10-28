


const { DataTypes } = require('sequelize');

const Raza = (database)=>{
    database.define("Raza", {   
        id:{ 
            primaryKey: true, 
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,

        },

        name:{ type: DataTypes.STRING, allowNull: false, },
        

        height:{ type: DataTypes.STRING, allowNull: false},

        weight:{ type: DataTypes.STRING, allowNull: false},

        life_span:{ type: DataTypes.STRING, allowNull: false},
        
        createdInDb: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true,}
    })
};

module.exports = Raza;
