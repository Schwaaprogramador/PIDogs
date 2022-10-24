import React from "react";
//import styles from "./Dog.module.css";
import { NavLink } from "react-router-dom";



const Dog = ({image, nombre, temperamento, peso, id})=>{
    
    console.log(image)
    return (<>

            <img src={image.url} alt="perro-imagen" width="400px" height="300px"/>


           <div>
                    <NavLink to={`/dogdetail/${id}`}><h2>{nombre}</h2></NavLink>
                    <h3>{temperamento}</h3>
                    <h3>{peso}</h3>
            </div>

         
            
           
            </>)
};

export default Dog;