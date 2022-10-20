//imports
const { Temperamento } = require ("../db.js");
const axios = require("axios");


//-------------
const getTemperaments = async ()=>{

    const temperamentosApi = await axios.get("https://api.thedogapi.com/v1/breeds");

    const todosLosTemperamentos = temperamentosApi.data.map( dog => dog.temperament);
    console.log(todosLosTemperamentos);

    const temps = todosLosTemperamentos.split(","); // split devuelve un nuevo array.
    
    await Temperamento.bulkCreate(temps);
    //temps.forEach(element => { Temperamento.findOrCreate({ where: {name:element} })});

    const temperamentosDb = await Temperamento.findAll();

    return temperamentosDb;
};




module.exports = getTemperaments;




   
  
  