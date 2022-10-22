import React from "react";
//import NavBar from "../NavBar/NavBar";
//import Dogs from "../Dogs/Dogs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions.js";
import { NavLink } from "react-router-dom";

const Home = ()=>{

    //HOOKS----------

    const dispatch = useDispatch();
    const allDogs = useSelector((state)=> state.Dogs); // mapStateToProps
    useEffect (()=>{
        dispatch(getDogs()) //mapDispatchToProps
    }, []); // poner en el array de lo que depende el dispatch.


    //HANDLERS--------
    const buttonHandler = (evento)=>{
        evento.preventDefault();
        dispatch(getDogs());
    }



    return (<>
    
            <NavLink to='/CreateDog'>Create New Dog</NavLink>
            <h1>Aguante Naruto</h1>
            <button onClick={evento=>{buttonHandler(evento)}}>Volver</button>

            <div>
                <select>
                    <options value='asc'>Ascendente</options>
                    <options value='desc'>Desendente</options>
                </select>
                <select>
                    <options value='Todos'>Todos</options>
                    <options value='Raza'>Raza</options>
                    <options value='Temperamento'>Temperamento</options>
                    <options value='Peso'>Peso</options>
                </select>
                <select>
                    <options value='Todos'>Todos</options>
                    <options value='Creados'>Creados</options>
                    <options value='Existentes'>Existentes</options>
                    
                </select>
            </div>
            </>)
};

export default Home;