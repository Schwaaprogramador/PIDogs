import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../redux/actions";



export function SearchBar(){
    
    const dispatch = useDispatch();

    const [name, setName] = useState('');


    
    const handlerInputChange = (evento)=>{
        evento.preventDefault();
        setName(evento.target.value);
        

    };
    const handlerSubmit=(evento)=>{
        evento.preventDefault();
        dispatch(getNameDogs(name));
        
    }


    return (
        <div>
            <input type='text' placeholder="Search Dog..." onChange={(evento) => handlerInputChange(evento)} ></input>
            <button type="submit" onClick={(evento)=> handlerSubmit(evento)}>Search</button>
        </div>
    )
}