import React, { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function UseCallbackParentComponent() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleCallback={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleCallback={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default UseCallbackParentComponent
