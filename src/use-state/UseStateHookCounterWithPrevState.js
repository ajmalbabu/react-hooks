import React, { useState } from 'react'

// Updating state using previous state variables
function HookCounterWithPrevState() {
    const initialCount = 0

    const [count, setCount] = useState(initialCount)

    const incrmentFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            HookCounterWithPrevState count: {count} &nbsp;&nbsp;
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrmentFive}>Increment Five</button>

        </div>
    )
}

export default HookCounterWithPrevState
