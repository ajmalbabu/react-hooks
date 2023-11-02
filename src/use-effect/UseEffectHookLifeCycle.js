import React, { useState, useEffect } from 'react'

function UseEffectHookLifeCycle() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('updating doc title')
        document.title = `${count} cliks`
        return () => {
            document.title = ``
        }
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(precCount => precCount + 1)}>UseEffectHook Click {count} times</button>
        </div>
    )
}

export default UseEffectHookLifeCycle
