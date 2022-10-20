//imports
const { Temperamento } = require ("../db.js");
const axios = require("axios");
const temperamentsRouter = require("../routes/temperamentsRouter.js");


//-------------
const getTemperaments = async ()=>{
    // traer los temps de la api
    const temperamentosApi = await axios.get("https://api.thedogapi.com/v1/breeds");
    const temps = await temperamentosApi.data;

    let temperamentosSolos= temps.map(t=>t.temperament).join().split(",").sort();

    temperamentosSolos = await temperamentosSolos.map(t=>{
        Temperamento.findOrCreate({
            where:{ name: t.trim()},
        })
    })

    const dbTemps = await Temperamento.findAll({order:[['name']]});
    return dbTemps;

};




module.exports = getTemperaments;




   
  
  