import React, {useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { getDogDetail } from "../../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";



export default function DogDetail(props){
    console.log(props)
    const dispatch = useDispatch();

    useEffect(()=>{dispatch(getDogDetail(props.match.params.id))},[dispatch]);

        const dogDetail = useSelector(state=>state.dogDetail)

        return (
            <>
                { dogDetail.length>0 ? 
                <div>
                    <img src={dogDetail[0].image.url} alt='perro-imagen'/>
                    <h1>Name: {dogDetail[0].name}</h1>
                    <h1>Name: {dogDetail[0].name}</h1>
                    <h1>Name: {dogDetail[0].name}</h1>
                </div>: <p>Loading..</p>
                
            }
            
            
            <Link to="/home"><button>Back</button></Link>
            </>
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