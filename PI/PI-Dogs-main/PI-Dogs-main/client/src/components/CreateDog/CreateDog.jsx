//importanciones
import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemps} from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";



const CreateDog = (props)=>{

    const dispatch = useDispatch();
    const temps = useSelector((state)=> state.temps)
    
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
    })};

    // const handleCheck = (evento)=>{
    //     if(evento.target.checked){
    //         setInput({
    //             ...input,
    //             status
    //         })
    //     }
    // }

    const handleSelect = (evento)=>{
        setInput({
            ...input,
            temps: [...input.temperaments, evento.target.value]
        })
    }
    return (<>

            <Link to="/home"><button>HOME</button></Link>
            <h1>CREATE DOG</h1>
            <form>
                <div>
                    <label>Nombre:</label>
                    <input 
                            type='text' 
                            value= {input.name}
                            name= 'name'
                            onChange={handleChange}
                            />

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
                    <label>temperaments:</label>
                    <label><input 
                            type='checkbox' 
                            value= 'name'
                            name= 'temperaments'
                            /> Aggressive</label>
                            <label><input 
                            type='checkbox' 
                            value= 'name'
                            name= 'temperaments'
                            /> Otro check</label>

                </div>

                <select onChange={handleSelect}>
                    {temps.map((temp)=>{
                        console.log(temp)
                        return (<><option value={temp.name}>{temp.name}</option></>)
                        
                    })}
                </select >

                <ul>
                    <li>{input.temperaments.map(temp=> temp +',')}</li>
                    <li>hola</li>
                    </ul>

                <button type="submit">Create Dog</button>

            </form>
           
            </>)
};

export default CreateDog;