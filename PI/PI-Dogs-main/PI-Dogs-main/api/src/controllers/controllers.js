const axios = require("axios");
// const Temperamento = require("../models/Temperamento.js");
// const Raza = require("../models/Raza.js");
const { Raza , Temperamento } = require ("../db.js");


//--------------------
const getApiDogs = async ()=>{
    const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds");
    const apiInfo = await apiUrl.data.map(dog=>{
        return {
            name: dog.name,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            temperament: dog.temperament,
            //temperament: dog.temperament.map(temp => temp) 
        }
    })
    return apiInfo;
}


//---------------------
const getDbDogs = async ()=> {
    return await Raza.findAll({
        include:{
            model: Temperamento,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
}



//----------------

const getAllDogs = async ()=>{
    const apiInfo = await getApiDogs();
    const dbInfo = await getDbDogs();

    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;
}



module.exports = {
    getApiDogs,
    getDbDogs,
    getAllDogs,
}
