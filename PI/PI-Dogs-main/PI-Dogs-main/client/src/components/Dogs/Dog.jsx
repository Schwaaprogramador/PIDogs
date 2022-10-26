import React from "react";
import styled from "./Dog.module.css";
import { NavLink } from "react-router-dom";



const Dog = ({image, nombre, temperamento, peso, id})=>{
    
    
    return (<>

        <div className={styled.container}>

                

                <img src={image.url} alt="perro-imagen" className={styled.imagen}/>


                <div className={styled.text}>
                        <NavLink to={`/dogdetail/${id}`} className={styled.navlink}><h2>{nombre}</h2></NavLink>

                        <h3>Temperament: {temperamento}</h3>
                        <h3>Weight: {peso}</h3>
                </div>

        </div>

         
            
           
            </>)
};

export default Dog;