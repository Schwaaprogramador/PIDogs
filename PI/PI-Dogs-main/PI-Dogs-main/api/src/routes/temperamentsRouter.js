//importanciones
//const { default: axios } = require("axios");
const {Router} = require("express");

const getTemperaments = require("../controllers/TempControllers.js");
// const {
//     getApiDogs,
//     getDbDogs,
//     getAllDogs,
// } = require("../controllers/controllers.js");

const temperamentsRouter = Router(); //Intancia del router----



// Ruta----------
temperamentsRouter.get ("/", async (request, response)=>{
    const todosLosTemperamentos = await getTemperaments();

    response.status(200).send(todosLosTemperamentos);
});


module.exports = temperamentsRouter;