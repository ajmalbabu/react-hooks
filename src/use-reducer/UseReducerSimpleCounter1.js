import React, { useReducer, useState } from 'react'


export const initialState = 0

export const reducer = (state, action) => {

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

// An example implmentation of useReducer
const useReducerSampleImpl = (red, init) => {

    const [innerState, setInnerState] = useState(init)

    const dispatch = (action) => {
        setInnerState(red(innerState, action))
    }

    return [innerState, dispatch];
}


function UseReducerSimpleCounter1() {

    // const [count, changeCount] = useReducerSampleImpl(reducer, initialState)
    const [count, changeCount] = useReducer(reducer, initialState)

    return (
        <div>
            Hello
            <div>Count - {count} </div>
            <button onClick={() => changeCount('increment')}>Increment</button>
            <button onClick={() => changeCount('decrement')}>Decrement</button>
            <button onClick={() => changeCount('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerSimpleCounter1
