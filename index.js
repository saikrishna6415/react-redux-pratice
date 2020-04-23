const redux = require('redux')
// import redux from 'redux'
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM ="BUY_ICECREAM"


function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
} 
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "second redux acion"
    }
}
// (previousState, action) => newState

const initialState = {
    numOfCakes: 10,
    numOfIcecreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}

const store = createStore(reducer)

console.log('initial state : ', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state = ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())

unsubscribe()