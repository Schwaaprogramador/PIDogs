import rootReducer from "./reducer.js";
import {createStore, applyMiddleware, } from "redux";
import thunkMiddleware from "redux-thunk";
// import {compose} from redux
    import{composeWithDevTools} from 'redux-devtools-extension'
    //Hay que intalar el redux-dev-tools

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;