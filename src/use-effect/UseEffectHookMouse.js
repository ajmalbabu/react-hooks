import React, { useState, useEffect } from 'react'

function UseEffectHookMouse({ name }) {

    // console.log('name', name)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const logMousePosition = name => e => {
        console.log(`Mouse event ${name}`)
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('UseEffectHookMouse registration called from ', name)
        const logFn = logMousePosition(name)
        window.addEventListener('mousemove', logFn)
        return () => {
            console.log('UseEffectHookMouse UN-registration called from ', name)
            window.removeEventListener('mousemove', logFn)
        }
    }, [name])


    return (
        <div>
            UseEffectHookMouse  {name} X - {x}, Y - {y}
        </div>
    )
}

export default UseEffectHookMouse
