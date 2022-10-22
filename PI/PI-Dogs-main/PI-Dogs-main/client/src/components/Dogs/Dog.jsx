import React from "react";
//import styles from "./Dog.module.css";
import { NavLink } from 'react-router-dom';


const Dog = ({image, nombre, temperamento, peso, id})=>{
    // Un get en insomnio remplaza estos console.logs
        
    return (<>
            
           <div className={styles.container}>
                
                    <NavLink to={`/dogdetail/${id}`}><h2>{nombre}</h2></NavLink>
                        <h3>{temperamento}</h3>
                        <h3>{peso}</h3>
                        
                
             
            </div>

            <img src={image.url} alt="perro-imagen" className={styles.img}/>
           
            </>)
};

export default Dog;