import React from 'react'
import useInput from './useInput'

function Form1WithHook() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        // To stop page from refreshing
        e.preventDefault() 
        alert(`Hello ${firstName} ${lastName}`)  
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input {...bindFirstName} type="text"></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input {...bindLastName} type="text"></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form1WithHook
