import {
    GET_DOGS, 
    GET_DOG_DETAIL, 
    FILTER_BY_TEMP, 
    GET_NAME_DOGS,
    GET_TEMPS,
    POST_DOG,
    FILTER_CREATED,
    
    } from "./actions.js";

    

const initialState = {
    dogs: [],
    dogs2: [],
    dogDetail:{},
    temps: [],
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        
        case GET_DOGS:
            return {...state, dogs:action.payload, dogs2:action.payload}
        
        case GET_DOG_DETAIL:
            return {...state, dogDetail: action.payload}

        case GET_NAME_DOGS:
            return {...state, dogs: action.payload, dogs2:action.payload}

        case GET_TEMPS:
            return {...state, temps: action.payload}

        case POST_DOG:
                return { ...state }


        case FILTER_BY_TEMP:

            const allDogs = state.dogs2;
            const tempFilter = action.payload === 'All' 
            ? allDogs 
            : allDogs?.filter(dog => dog.temperament?.includes(action.payload));
            return {...state , dogs: tempFilter}


        
        case FILTER_CREATED:
            const allDogs2 = state.dogs2
            const createdFilter = action.payload === 'Created' ? allDogs2.filter(dog => dog.createdInDb) : allDogs2.filter(dog => !dog.createdInDb)
            return {
                    ...state,
                     dogs: action.payload === "All"? state.dogs2 : createdFilter
                 }



        default:
            return {...state};
    }
}


export default rootReducer;