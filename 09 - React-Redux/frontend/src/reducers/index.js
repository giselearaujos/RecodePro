import { combineReducers } from "redux";

const initialState = {
    listas: []
}

function listasReducer(state = initialState, action){
    if(action.type === "ADICIONAR"){
        return {listas:[...state.listas, {...action.value}]}
    }else{
        return state;
    }   
}

function tituloReducer(state = { titulo: "Lista"}, action){
    if(action.type === "ALTERAR"){
        return { titulo: action.value };
    }else{
        return state;
    }
     

}

const reducers = combineReducers({listasReducer, tituloReducer});

export default reducers;