import React from 'react'

function Button({ handleCallback, children }) {
    console.log(`Rendering button - ${children}`)
    return (
        <button onClick={handleCallback}>
            {children}
        </button>
    )
}

export default React.memo(Button)
