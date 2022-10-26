import React, {useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { getDogDetail } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import styled from "./DogDetail.module.css";
import { FaAngleLeft } from "react-icons/fa";


export default function DogDetail(props){
    console.log(props)
    const dispatch = useDispatch();

    useEffect(()=>{dispatch(getDogDetail(props.match.params.id))},[dispatch]);

        const dogDetail = useSelector(state=>state.dogDetail)

        return (
            
                <div classname={styled.todo}>


                    { dogDetail.length > 0 ? 
                            <div className={styled.todo}>

                                <img src={dogDetail[0].image.url} alt='perro-imagen' className={styled.image}/>
                                <h1>Name: {dogDetail[0].name}</h1>
                                <h3>Temperament: {dogDetail[0].temperament}</h3>
                                <h3>Height: {dogDetail[0].height.metric}</h3>
                                <h3>weight: {dogDetail[0].weight.metric}</h3>
                                <h3>life_span: {dogDetail[0].life_span}</h3>
                                
                                <Link to="/home"><button className={styled.icon}><FaAngleLeft/></button></Link>

                            </div>: <p>Loading..</p>
                
                    
                    }


                


                </div>
            
            
            
            
        )
};


// ---------- Conectar al store Redux----------

// const mapStateToProps = (state)=>{
//     return {
//         dogDetail:state.dogDetail, // ESTADO GLOBAL

//     }
    
// }



// //FUNCIONES PARA HACER DISPATCH= useDispatch() el HOOK
// const mapDispatchToProps = (dispatch)=>{    
// return {
//     getDogDetail: (id)=> dispatch(getDogDetail(id)),
// }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DogDetail);