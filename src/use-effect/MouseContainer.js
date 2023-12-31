import React, { useState } from 'react'
import UseEffectHookMouse from './UseEffectHookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <UseEffectHookMouse name="From-MouseContainer" />}
        </div>
    )
}

export default MouseContainer
