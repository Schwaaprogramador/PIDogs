//importanciones
const {Router} = require("express");
const {
    //getApiDogs,
    //getDbDogs,
    createDog,
    getAllDogs,
} = require("../controllers/controllers.js");

const dogsRouter = Router(); //Intancia del router----



// Ruta----------GET todos, name
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


//Ruta -------- GET ID
dogsRouter.get("/:id", async (request, response)=>{
    const id = request.params.id // const {id} = request.params
    let todosLosDogs = await getAllDogs();

    if(id){
        let idDog = await todosLosDogs.filter( dog => {dog.id ==- id});

        idDog.length ? 
        response.status(200).send(idDog) :
        response.status(404).send(`No existe el perro con el Id:${id}`);
    }
})


// Ruta---------POST

dogsRouter.post ("/", async(request, response)=>{
    let { name, height, weight, life_span, createdInDb } = request.body;
    //agregar algunas validaciones.
    let newDog = createDog(name, height, weight, life_span, createdInDb);

    response.status(200).send(newDog);
})

module.exports = dogsRouter;