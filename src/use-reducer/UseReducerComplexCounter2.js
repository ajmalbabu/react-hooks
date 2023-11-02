import React, { useReducer } from 'react'


const initialState = {
    counter: 0,
    counter2: 10
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.value }
        case 'decrement':
            return { ...state, counter: state.counter - action.value }
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value }
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}


function UseReducerComplexCounter2() {

    const [count, changeCount] = useReducer(reducer, initialState)

    return (
        <div>
            Hello
            <div>Count: {count.counter} </div>
            <div>Count2: {count.counter2} </div>
            <button onClick={() => changeCount({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => changeCount({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => changeCount({ type: 'increment', value: 5 })}>Increment-5</button>
            <button onClick={() => changeCount({ type: 'decrement', value: 5 })}>Decrement-5</button>
            <button onClick={() => changeCount({ type: 'increment2', value: 1 })}>Increment-Counter2</button>
            <button onClick={() => changeCount({ type: 'decrement2', value: 1 })}>Decrement-counter2</button>
            <button onClick={() => changeCount({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default UseReducerComplexCounter2
