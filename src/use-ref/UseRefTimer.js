import React, { useState, useEffect, useRef } from 'react'

function UseRefTimer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
            console.log('test')
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    })

    const handleCancelClick = (val) => {
        alert(val)
        clearInterval(intervalRef.current);
    }

    return (
        <div>
            Time - {timer}
            <button onClick={() => handleCancelClick(1)}>ClearHook Timer</button>
        </div>
    )
} 

export default UseRefTimer
