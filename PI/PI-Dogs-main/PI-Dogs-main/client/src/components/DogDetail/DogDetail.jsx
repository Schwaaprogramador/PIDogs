import React from "react";
import { connect } from "react-redux";
import { getDogDetail } from "../../redux/actions.js";



const DogDetail = (props)=> {

    console.log(props)
    //useEffect(()=>{props.getDogDetail(props.match.params.id)},[]);
     
    return (<>
                <div>
                    <h1>DOG DETAIL</h1>
                    <h2>{props.dogDetail.name}</h2>
                    <h3>{props.dogDetail.temperament}</h3>
                    <h3>{props.dogDetail.origin}</h3>
                    {/* <h3>{props.dogDetail.weight.metric}</h3>
                    <h3>{props.dogDetail.height.metric}</h3> */}
                    {/* <p>{props.match.params.id}</p> */}
                    <img src={`https://cdn2.thedogapi.com/images/${props.dogDetail.reference_image_id}.jpg`} alt="perro-imagen"/>
                    
                </div>
          
           
            </>)
};


// ---------- Conectar al store Redux----------

const mapStateToProps = (state)=>{
    return {
        dogDetail:state.dogDetail, // ESTADO GLOBAL

    }
    
}


//FUNCIONES PARA HACER DISPATCH= useDispatch() el HOOK
const mapDispatchToProps = (dispatch)=>{    
return {
    getDogDetail: (id)=> dispatch(getDogDetail(id)),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(DogDetail);