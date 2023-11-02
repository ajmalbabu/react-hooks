import React, { useState } from 'react'

function Form1() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const submitHandler = e => {
        // To stop page from refreshing
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text"></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input value={lastName} onChange={e => setLastName(e.target.value)} type="text"></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form1
