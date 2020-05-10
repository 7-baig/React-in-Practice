import React, { Component } from 'react'
import './App.css'

class StateTwo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             backgroundColor: 'white'
        }
        this.increment = this.increment.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        this.success()
    }
    reset() {
        this.setState(prevState => ({
            count: prevState.count = 0,
            backgroundColor: 'white'
        }))
    }
    success() {
        this.state.count === 3 && this.setState({backgroundColor: 'red'})
        this.state.count === 6 && this.setState({backgroundColor: 'purple'})
        this.state.count === 9 && this.setState({backgroundColor: 'yellow'})
        this.state.count === 12 && this.setState({backgroundColor: 'lightblue'})
    }

    render() {
        const style = {
            backgroundColor: this.state.backgroundColor
        }
        return (
            <div className="stateTwo" style={style}>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.reset}>Reset</button>
            </div>  
        )
    }
}

export default StateTwo
