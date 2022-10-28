import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import styled from "./Home.module.css";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDogsByTemp, getDogs, filterCreated, getTemps } from "../../redux/actions.js";

import Dog from "../Dogs/Dog.jsx";
import Paginado from "../Paginado/Paginado.jsx";
import { FaRedoAlt } from "react-icons/fa";

const Home = ()=>{

    

    const dispatch = useDispatch();
    const allDogs = useSelector((state)=> state.dogs);
    const tempsDb = useSelector((state)=> state.temps);
    
    useEffect (()=>{
        dispatch(getDogs());
        dispatch(getTemps());
    }, [dispatch]); 



    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPage, setDogsPage] = useState(8);

    const indexLastDog = currentPage * dogsPage;
    const indexFirtsDog = indexLastDog - dogsPage;

    const currentDogs = allDogs.slice(indexFirtsDog, indexLastDog);

    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }


    
    const buttonHandler = (evento)=>{
        evento.preventDefault();
        dispatch(getDogs());
    }

    const filterTemps = (evento)=>{
        console.log(evento.target.value);
        dispatch(filterDogsByTemp(evento.target.value));
        
    }

    const filterByCreated = (evento)=>{
        dispatch(filterCreated(evento.target.value))
    }


    return (<>

            <NavBar/>
            
            

        
             

            <div className={styled.filters}>
                <div>
                <b>Organice: </b>
                <select>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Desendente</option>
                </select>
                </div>


                <div>
                <b>Temperaments: </b>

                <select onChange={evento => filterTemps(evento)}>

                    <option value='All'>All</option>

                    {tempsDb.map(temp => (<option value={temp.name}>{temp.name}</option>))}
                    
                </select>
                </div>


                <div>
                <b> Created: </b> 
                <select onChange={evento => filterByCreated(evento)}>
                    <option value='All'>All</option>
                    <option value='Created'>Created</option>
                    <option value='Exist'>Exist</option>
                </select>
                </div>

                <button onClick={evento=>{buttonHandler(evento)}}><FaRedoAlt/></button>

            </div>


            
                <div className={styled.dogs}>
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
                </div>
            


            <Paginado
                    dogsPage={dogsPage}
                    allDogs={allDogs.length}
                    paginado={paginado}
                    />
        
            </>)
};

export default Home;