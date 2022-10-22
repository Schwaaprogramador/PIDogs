export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";


//------------

export const getDogs = ()=>{
    return function(dispatch){
        fetch("https://api.thedogapi.com/v1/breeds")
        .then((response)=>response.json())
        .then((data) => dispatch({ type: GET_DOGS, payload: data}));
    };
};

//-------------

export const getDogDetail = (id)=>{
    return function(dispatch){
        fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
        .then((response)=>response.json())
        .then((data) => dispatch({ type: GET_DOG_DETAIL, payload: data}));
    };
};