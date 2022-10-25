import axios from "axios";


export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const FILTER_BY_TEMP = "FILTER_BY_TEMP";
export const FILTER_CREATED = "FILTER_CREATED";
export const GET_NAME_DOGS = "GET_NAME_DOGS";
export const GET_TEMPS = "GET_TEMPS";





//------------
export const getDogs = ()=>{
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs/");
        return dispatch({ type: GET_DOGS, payload: json.data});
    };
};



//-------------
export const getDogDetail = (id)=>{
    return function(dispatch){
        fetch(`http://localhost:3001/dogs/${id}`)
        .then((response)=>response.json())
        .then((data) => dispatch({ type: GET_DOG_DETAIL, payload: data}));
    };
};



//--------
export const filterDogsByTemp = (payload)=>{
    return {
        type: FILTER_BY_TEMP,
        payload
    }

};



//-----------
export const filterCreated= (payload)=>{
    return {
        type: FILTER_CREATED,
        payload
    }
};


//-------
export function getNameDogs(payload){
    return async function (dispatch){
        try {
            var json2 = await axios.get("http://localhost:3001/dogs?name=" + payload);
            return dispatch({
                type: GET_NAME_DOGS,
                payload: json2.data
            })
        } catch(error) {
            console.log(error);
        }
    }
    
};

//-----
export function getTemps(){
    return async function (dispatch){
        const tempsDb = await axios.get("http://localhost:3001/temperaments")
        return dispatch({type: GET_TEMPS, payload: tempsDb.data})
    }
    
    // return function(dispatch){
    //     fetch('http://localhost:3001/temperaments')
    //     .then((response)=>response.json())
    //     .then((data) => dispatch({ type: GET_TEMPS, payload: data}));
    
    };


//-----
export function postDog(payload){
    return async function (dispatch){
        const createdDog = await axios.post("http://localhost:3001/dogs", payload);
        console.log(createdDog);
        return createdDog;
    }
}
