import React, { useEffect, useRef } from 'react'

function FocusInput() {

    // Access DOM nodes
    const inputRef = useRef(null)

    useEffect(() => {

        // Focus input element using ref
        inputRef.current.focus()

    }, [])

    return (
        <div>
            <input ref={inputRef} type="text"></input>
        </div>
    )
}

export default FocusInput
