
import React, {useState, useEffect} from "react";
//import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { postDog, getTemps} from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import styled from "./CreateDog.module.css";
import { FaRedoAlt } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";




const validacion = (input)=>{
    let errors = [];
    if(!input.name){
        errors.name = 'Name required';
    }else if(!input.height) {
        errors.height = 'Height required';
    }
    else if(!input.weight) {
        errors.weight = 'Weight required';
    }else if(!input.life_span) {
        errors.life_span = 'Life Span required';
    }
    return errors;
}





const CreateDog = (props)=>{


   
    //const history = useHistory();

    const tempsDb = useSelector((state)=> state.temps);

    const dispatch = useDispatch();
    useEffect=(()=>{
        dispatch(getTemps());
    }, [dispatch]);
    
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: '', 
        height: '', 
        weight:"", 
        life_span:"", 
        temperaments:[],
    });

        
    
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
        
    }

    const handleDelete = (tempToDelete)=>{
        setInput({
            ...input,
            temperaments: input.temperaments.filter( temp => temp !== tempToDelete)
        })
    }



    return (
        <div className={styled.container}>

            
            <h1 className={styled.h1}>CREATE YOUR DOG</h1>
            
            
            <form className={styled.form}>

                    <div className={styled.input}>
                        <label htmlFor="name">Name:</label>
                        <input 
                                type='text' 
                                value= {input.name}
                                name= 'name'
                                onChange={handleChange}
                                />
                                {errors.name && (<div>{errors.name}</div>)}

                    </div>
                

                    <div className={styled.input}>
                        <label>Height:</label>
                        <input 
                                type='number' 
                                value= {input.height}
                                name= 'height'
                                onChange={handleChange}
                                />
                                {errors.height && (<div>{errors.height}</div>)}
                    </div>

                    <div className={styled.input}>
                        <label>Weight:</label>
                        <input 
                                type='number' 
                                value= {input.weight}
                                name= 'weight'
                                onChange={handleChange}
                                />
                                {errors.weight && (<div>{errors.weight}</div>)}

                    </div>


                    <div className={styled.input}>
                        <label>Life_span:</label>
                        <input 
                                type='number' 
                                value= {input.life_span}
                                name= 'life_span'
                                onChange={handleChange}
                                />
                                {errors.life_span && (<div>{errors.life_span}</div>)}

                    </div>


                    <div className={styled.input}>
                        
                        <p> Select Temperaments:</p>

                        <select onChange={handleSelect}>

                            
                            {tempsDb.map(temp => (<option value={temp.name}>{temp.name}</option>))}

                            {/* <input type= check value></input>
                            label </input>*/}

                        </select>

                    </div>


                    <ul>
                        <li>
                            {input.temperaments.map(temp => 
                            <>
                            <p>{temp}</p>
                            <button
                            onClick={(evento)=>handleDelete(evento)}><FaRegMinusSquare/></button>
                                
                            </>)}
                        </li>
                    </ul>

              

                <button 
                    type="submit"
                    disabled={errors}
                    onClick={handleSubmit} 
                    className={styled.buttonCreate}>Create Dog</button>


            </form>

            
             

            </div>
           
            )
};

export default CreateDog;