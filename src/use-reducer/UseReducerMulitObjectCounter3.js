import React, { useReducer } from 'react'


const initialState = 0

const reducer = (state, action) => {

    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function UseReducerMulitObjectCounter3() {

    const [count, changeCount] = useReducer(reducer, initialState)
    const [count2, changeCount2] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count} </div>
            <button onClick={() => changeCount('increment')}>Increment</button>
            <button onClick={() => changeCount('decrement')}>Decrement</button>
            <button onClick={() => changeCount('reset')}>Reset</button>
            <div>Count2 - {count2} </div>
            <button onClick={() => changeCount2('increment')}>Increment</button>
            <button onClick={() => changeCount2('decrement')}>Decrement</button>
            <button onClick={() => changeCount2('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerMulitObjectCounter3
