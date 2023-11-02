import React, { useState } from 'react'

function HookArrayCounter() {

    const [items, setItems] = useState([]);

    const addItem = () => {
        // Creater a new array and copy all items to that array with spread operator 
        // and then we append another object with {} operator with id as array index and element as a random nunber.
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            Array state&nbsp; &nbsp;
            <button onClick={addItem}>Add a number</button>
            <br /> Values <br />
            {
                items.map(
                    item => (
                        <li key={item.id}>{item.value}</li>
                    )
                )
            }
        </div>
    )
}

export default HookArrayCounter
