import './styles.css'

const counter = document.getElementById('counter')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')


let state = 0

function render () {
    counter.textContent = state
}

function increment () {
    state++
}

function decriment () {
    state--
}

add.addEventListener("click" , () => {
    increment()
    render()
})

sub.addEventListener("click" , () => {
    decriment()
    render()
})


asyncBtn.addEventListener("click" , () => {

    console.log("hello")
    setTimeout(()=> {
        increment()
        render()
    },2000)

})

themeBtn.addEventListener('click',() => {
    document.body.classList.toggle('dark')
})

render()