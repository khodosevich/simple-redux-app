import { combineReducers } from "redux";
import { ASYNC_INCREMENT, DECREMENT, DISAUBLE_BTN, ENABLE_BTN, INCREMENT, MUTUABLE, THEME } from "./types";

const initCounterState = {counterState: 0, isFetch: false}
function counterReducer ( state = initCounterState, action ){

    switch(action.type) {
        case INCREMENT: return {...state, counterState:state.counterState + 1};
        case DECREMENT: return {...state, counterState:state.counterState - 1};
        case DISAUBLE_BTN: return {...state, isFetch: true};
        case ENABLE_BTN: return {...state, isFetch: false};
        default: return state;
    }
}

const initThemeState = {value: "light"}
function themeReducer( state = initThemeState , action) {

    console.log("themeReducer state: ", state, " action: ", action)

    switch(action.type) {
        case THEME: return {...state, value: action.payload};
        default: return state;
    }
}


export const rootReducers = combineReducers( {
    counterState:counterReducer,
    theme:themeReducer
})