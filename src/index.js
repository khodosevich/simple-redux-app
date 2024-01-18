import './styles.css'
// import { createStore } from './own-redux'
import { applyMiddleware, createStore } from 'redux'
import { rootReducers } from './redux/rootReducer'
import { asyncIncrement, changeTheme, decrement, increment } from './redux/actions'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'


const counter = document.getElementById('counter')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

let store = createStore(rootReducers, {counterState:{counterState: 88, isFetch: false} , theme:{value: "dark"}} , applyMiddleware(thunk,logger))

add.addEventListener("click" , () => {
    store.dispatch(increment())
})

sub.addEventListener("click" , () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener("click" , () => {
    store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click',() => {  
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark"
    store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
    const state = store.getState()
    
    if(state.counterState.isFetch) {
        add.disabled = true
        sub.disabled = true
        asyncBtn.disabled = true
        themeBtn.disabled = true
    } else {
        add.disabled = false
        sub.disabled = false
        asyncBtn.disabled = false
        themeBtn.disabled = false
    }

    counter.textContent = state.counterState.counterState
    document.body.classList = state.theme.value


})

store.dispatch({
    type: "INIT_APP",
})
