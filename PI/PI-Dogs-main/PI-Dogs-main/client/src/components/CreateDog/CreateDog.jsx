//importanciones
import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemps} from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import styled from "./CreateDog.module.css";;



const validacion = (input)=>{
    let errors = [];
    if(!input.name){
        errors.name = 'Name required';
    }else if(!input.temperaments) {
        errors.temperaments = 'temperaments required';
    }
    return errors;
}






const CreateDog = (props)=>{


    const dispatch = useDispatch();
    const history = useHistory();
    const tempsDb = useSelector((state)=> state.temps)


    //States----
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: '', 
        height: '', 
        weight:"", 
        life_span:"", 
        temperaments:[],
    });

        useEffect=(()=>{
            dispatch(getTemps());
        }, [])


    //Handlers----------
    const handleChange = (evento)=>{
        setInput({
            ...input,
            [evento.target.name]: evento.target.value,
    })
        setErrors(validacion({
            ...input,
            [evento.target.name]: evento.target.value,
        }))
    };


    const handleSelect = (evento)=>{
        setInput({
            ...input,
            temps: [...input.temperaments, evento.target.value]
        })
    }

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        dispatch(postDog(input));
        alert("Create Dog Success");

        setInput({
            name: '', 
            height: '', 
            weight:"", 
            life_span:"", 
            temperaments:[],
        })
        history.push("/home");
    }

    const handleDelete = (tempToDelete)=>{
        setInput({
            ...input,
            temperaments: input.temperaments.filter( temp => temp !== tempToDelete)
        })
    }



    return (<>
    <div className={styled.container}>

            
            <h1>CREATE YOUR DOG</h1>
            <form>
                <div>
                    <label>Nombre:</label>
                    <input 
                            type='text' 
                            value= {input.name}
                            name= 'name'
                            onChange={handleChange}
                            />
                            {errors.name && (<p>{errors.name}</p>)}

                </div>
                
                <div>
                    <label>height:</label>
                    <input 
                            type='text' 
                            value= {input.height}
                            name= 'height'
                            onChange={handleChange}
                            />
                </div>

                <div>
                    <label>weight:</label>
                    <input 
                            type='text' 
                            value= {input.weight}
                            name= 'weight'
                            onChange={handleChange}
                            />

                </div>
                <div>
                    <label>life_span:</label>
                    <input 
                            type='text' 
                            value= {input.life_span}
                            name= 'life_span'
                            onChange={handleChange}
                            />

                </div>


                <div>
                    <h4> Select Temperaments:</h4>

                <select onChange={handleSelect}>

                    {tempsDb.map((temp)=>{
                        console.log(temp)
                        return (<option value={temp.name}>{temp.name}</option>)
                        
                    })}
                    <option >Ejemplo1</option>
                    <option >Ejemplo2</option>
                </select >

                </div>

              

                <button type="submit" onClick={handleSubmit}>Create Dog</button>


            </form>

            <ul>
                    <li>{input.temperaments.map(temp => 
                        <>
                        <p>{temp}</p>
                        <button
                        onClick={(evento)=>handleDelete(evento)}>X</button>
                            
                        </>)}</li>
                    <li>hola</li>
            </ul>

            <Link to="/home"><button>Back</button></Link>

            </div>
           
            </>)
};

export default CreateDog;