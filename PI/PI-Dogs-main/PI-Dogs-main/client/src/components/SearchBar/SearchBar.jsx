import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../redux/actions";



export function SearchBar(){
    const dispatch = useDispatch();

    const [name, setName] = useState('');


    //------ HANDLERS -----
    const handlerInputChange = (evento)=>{
        evento.preventDefault();
        setName(evento.target.value);
        console.log(name);

    };
    const handlerSubmit=(evento)=>{
        evento.preventDefault();
        dispatch(getNameDogs(name));
        
    }



    //RENDER COMPO
    return (
        <div>
            <input type='text' placeholder="Buscar..." onChange={(evento) => handlerInputChange(evento)} ></input>
            <button type="submit" onClick={(evento)=> handlerSubmit(evento)}>Buscar</button>
        </div>
    )
}