//importanciones
const {Router} = require("express");
const {
    getApiDogs,
    getDbDogs,
    getAllDogs,
} = require("../controllers/controllers.js");

const dogsRouter = Router(); //Intancia del router----



// Ruta----------
dogsRouter.get ("/", async (request, response)=>{
    // const { name } = request.query;
    const name = request.query.name;
    let todosLosDogs = await getAllDogs();

    if(name){
        let dogName = await todosLosDogs.filter( dog => dog.name.toLowerCase().includes(name.toLowerCase()));
        dogName.length ? 
        response.status(200).send(dogName) :
        response.status(404).send('No existe el perro con el nombre')
    } else {
        response.status(200).json(todosLosDogs);
    }
});

module.exports = dogsRouter;