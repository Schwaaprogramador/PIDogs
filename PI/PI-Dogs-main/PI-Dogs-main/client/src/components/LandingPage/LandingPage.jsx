//IMPORTACIONES
import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./LandingPage.module.css";



//COMPONENTE
const LandingPage = ()=>{
        
    return (<>
            <div className={styles.container}>

                    <h1 className={styles.h1}>Daniel Toro<br/>Api Dogs</h1>
                    <NavLink to='/home' className={styles.botonIngreso}>INGRESAR</NavLink>
                 
                    

            </div>
            
            </>)
};




//EXPORT
export default LandingPage;