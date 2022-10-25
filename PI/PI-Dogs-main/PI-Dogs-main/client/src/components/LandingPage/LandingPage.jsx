//IMPORTACIONES
import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./LandingPage.module.css";



//COMPONENTE
const LandingPage = ()=>{
        
    return (
            <div className={styles.container}>

                    
                <div><h1 className={styles.h1}>Daniel Toro<br/>Api Dogs</h1></div>
                
                <div>  <NavLink to='/home' className={styles.botonIngreso}>Let's Go</NavLink></div>
                  
                 
                    

            </div>
            
            )
};




//EXPORT
export default LandingPage;