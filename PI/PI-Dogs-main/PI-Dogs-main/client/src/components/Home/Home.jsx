import React from "react";
//import NavBar from "../NavBar/NavBar";
//import Dogs from "../Dogs/Dogs";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDogsByTemp, getDogs, filterCreated } from "../../redux/actions.js";
import { NavLink } from "react-router-dom";
import Dog from "../Dogs/Dog.jsx";
import Paginado from "../Paginado/Paginado.jsx";
import { SearchBar } from "../SearchBar/SearchBar.jsx";

const Home = ()=>{

    //HOOKS----------

    const dispatch = useDispatch();
    const allDogs = useSelector((state)=> state.dogs); // mapStateToProps

    //
    useEffect (()=>{
        dispatch(getDogs()) //mapDispatchToProps
    }, []); // poner en el array de lo que depende el dispatch.


    //Paginado-----
    const [currentPage, serCurrentPage] = useState(1);
    const [dogsPage] = useState(8);
    const indexLastDog = currentPage * dogsPage;
    const indexFirtsDog = indexLastDog - dogsPage;

    const currentDogs = allDogs.slice(indexFirtsDog, indexLastDog);

    const paginado = (pageNumber)=>{
        serCurrentPage(pageNumber);
    }


    //HANDLERS--------
    const buttonHandler = (evento)=>{
        evento.preventDefault();
        dispatch(getDogs());
    }

    const filterTemps = (evento)=>{
        dispatch(filterDogsByTemp(evento.target.value));
    }

    const filterByCreated = (evento)=>{
        dispatch(filterCreated(evento.target.value))
    }


    //RENDERIZADOS
    return (<>
    
            <NavLink to='/createdog'>Create New Dog</NavLink>
            <h1>Aguante Naruto11111</h1>
            <button onClick={evento=>{buttonHandler(evento)}}>MOSTRAR PERROS</button>

                <SearchBar/>

            <div><b>alfabeticamente</b>
                <select>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Desendente</option>
                </select>


                <b>Temperaments</b>
                <select onChange={evento => filterTemps(evento)}>
                    <option value='Todos'>All</option>
                    <option value='Active'>Active</option>
                    <option value='Adaptable'>Adaptable</option>
                    <option value='Adventurous'>Adventurous</option>
                    <option value='Affectionate'>Affectionate</option>
                    <option value='Agile'>Agile</option>
                    <option value='Alert'>Alert</option>
                    <option value='Assertive'>Assertive</option>
                </select>


                <b>Creados</b> 
                <select onChange={evento => filterByCreated(evento)}>
                    <option value='Todos'>Todos</option>
                    <option value='Creados'>Creados</option>
                    <option value='Existentes'>Existentes</option>
                </select>

                <Paginado
                    dogsPage={dogsPage}
                    allDogs={allDogs.length}
                    paginado={paginado}
                    />



            </div>

            {
                currentDogs?.map((dog)=>{
                    
                    return (<>
                    <Dog
                        id={dog.id}
                        key={dog.id}
                        nombre={dog.name}
                        image={dog.image}
                        temperamento={dog.temperament}
                        peso={dog.weight.metric}
                        
                        
                    />
                    </>)
                })
            }
            </>)
};

export default Home;