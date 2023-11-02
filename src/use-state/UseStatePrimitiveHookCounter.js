import React from 'react'
import { useState } from 'react'


// Functional component
export function HookCounter() {
// export const HookCounter = () => {

    // State hook wuth count variable and default value
    const [ count, setCount ] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>hook count: {count}</button>
        </div>
    )

}

// export default HookCounter