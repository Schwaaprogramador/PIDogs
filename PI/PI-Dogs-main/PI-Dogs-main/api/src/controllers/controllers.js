const axios = require("axios");
// const Temperamento = require("../models/Temperamento.js");
// const Raza = require("../models/Raza.js");
const { Raza , Temperamento } = require ("../db.js");


//--------------------API DOGS
const getApiDogs = async ()=>{
    const apiUrl = await axios.get("https://api.thedogapi.com/v1/breeds");
    const apiInfo = await apiUrl.data.map(dog=>{
        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            temperament: dog.temperament,
            image: dog.image,
            //temperament: dog.temperament.map(temp => temp) 
        }
    })
    return apiInfo;
}


//---------------------DB DOGS
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




//---------CREAR UN NUEVO PERRO EN LA BASE

const createDog = async (name, height, weight, life_span, createdInDb, temperaments)=>{

    let newDog = await Raza.create({ name, height, weight, life_span, createdInDb});

    let tempDb = await Temperamento.findAll({ where: {name: temperaments}});

    newDog.addTemperamento(tempDb);

    return newDog;
}



module.exports = {
    getApiDogs,
    getDbDogs,
    getAllDogs,
    createDog,
}
