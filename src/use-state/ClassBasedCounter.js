import React, { Component } from 'react'


// Define class componet
class ClassCounter extends Component {

    constructor(props) {
        super(props)

        // State variable with an inital value
        this.state = {
            count: 0
        }
    }

    // Set state value
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })

        // A safer implemntation is take previous state
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.increment}>
                    class count: {this.state.count}
                </button>
            </div>
        )
    }
}

export default ClassCounter