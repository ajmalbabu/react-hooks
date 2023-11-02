import React, { Component } from 'react'

export class ClassBasedLifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `${this.state.count} cliks`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('updating document titie')
            document.title = `${this.state.count} clicks`
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={e => {
                    this.setState({ name: e.target.value })
                }} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    ClassBasedLifeCycle Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassBasedLifeCycle
