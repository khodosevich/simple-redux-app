import {  DECREMENT, DISAUBLE_BTN, ENABLE_BTN, INCREMENT, THEME } from "./types"

export function increment () {
    return {
        type: INCREMENT
    }
}

export function decrement () {
    return {
        type: DECREMENT
    }
}

export function disableBtn () {
    return {
        type: DISAUBLE_BTN
    }
}

export function enableBtn () {
    return {
        type: ENABLE_BTN
    }
}

export function asyncIncrement () {
    return function (dispatch) {
        dispatch(disableBtn())
        setTimeout(()=> {
            dispatch(increment())
            dispatch(enableBtn())
        },2000)
    }
}

export function changeTheme (newTheme) {
    return {
        type: THEME,
        payload: newTheme
    }
}