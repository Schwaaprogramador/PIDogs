import React from "react";
import styled from "./Paginado.module.css"

export default function Paginado({dogsPage, allDogs, paginado}){
    
    const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(allDogs/dogsPage); i++) {
            pageNumbers.push(i)
            
        }

        return (<>
                <div >
                    <ul className={styled.paginado}>
                        {pageNumbers && pageNumbers.map( number =>(
                                    <li key={number}>
                                        <button onClick={()=> paginado(number)}>  {number}  </button>
                                    </li>
                        ))}
                    </ul>
                </div>
                
                </>)
}