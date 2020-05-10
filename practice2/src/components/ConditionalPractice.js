import React, { Component } from 'react'
import './App.css'
import ConditionalPracticeFeed from './ConditionalPracticeFeed'

class ConditionalPractice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true    
        }
        this.handleButton = this.handleButton.bind(this)
    }
    
    handleButton() {
       this.state.isLoggedIn ? this.setState({isLoggedIn: false}) : this.setState({isLoggedIn: true})
    }

    render() {
        return (
            <div className="conditionalRenderingPractice">
                <button onClick={this.handleButton}>{this.state.isLoggedIn ? 'log out' : 'log in'}</button>
                <p>{this.state.isLoggedIn ? 'you are logged in' : 'you are logged out'}</p>
                {this.state.isLoggedIn && <ConditionalPracticeFeed />}
            </div>
        )
    }   
}

export default ConditionalPractice
