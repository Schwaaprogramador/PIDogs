import {
    GET_DOGS, 
    GET_DOG_DETAIL, 
    FILTER_BY_TEMP, 
    GET_NAME_DOGS,
    GET_TEMPS,
    
    } from "./actions.js";

    const POST_DOG = "POST-DOG";

const initialState = {
    dogs: [],
    dogDetail:{},
    temps: [],
};

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        
        case GET_DOGS:
            return {...state, dogs:action.payload}
        
        case GET_DOG_DETAIL:
            return {...state, dogDetail: action.payload}

        case GET_NAME_DOGS:
            return {...state, dogs: action.payload}

        case GET_TEMPS:
            return {...state, temps: action.payload}

        case POST_DOG:
                return { ...state }




        case FILTER_BY_TEMP:

            const allDogs = state.dogs;
            const tempFilter = action.payload === 'Todos'? 
            allDogs : 
            allDogs.filter( dog => dog.temperament === action.payload) //Los temps del BACK - Value de los opstions


            return {...state , tempFilter}

        
        // case FILTER_CREATED:

        //         const allDogs2 = state.dogs
        //         const filterCreated = action.payload === 'Creados'? 
        //         allDogs2.filter((dog)=>{dog.createdInDb}) : 
        //         allDogs2.filter((dog)=>{!dog.createdInDb})

        //         return {
        //             ...state,
        //             dogs: action.payload==="Todos"? state.allDogs2 : filterCreated

        //         }




        default:
            return {...state};
    }
}


export default rootReducer;