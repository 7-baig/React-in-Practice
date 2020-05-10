import React, { Component } from 'react'
import './App.css'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: false,
            gender: '',
            favColor: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState( { [name]: checked } ) : this.setState( { [name]: value} ) 
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="firstName" 
                    value={this.state.firstName} 
                    placeholder="first name" 
                    onChange={this.handleClick}
                />
                <hr/>
                <input 
                    type="text" 
                    name="lastName" 
                    value={this.state.lastName} 
                    placeholder="last name" 
                    onChange={this.handleClick}
                />
                <p>{this.state.firstName} {this.state.lastName}</p>
                <label>
                    <input 
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleClick}
                    /> is Friendly?
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === 'male'}
                        onChange={this.handleClick}
                    /> Male
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === 'female'}
                        onChange={this.handleClick}
                    /> Female
                </label>
                {this.state.gender && <p>You are a {this.state.gender}</p>}
                <br/>
                <label>Favorite Color</label>
                <select 
                    name="favColor" 
                    value={this.state.favColor}
                    onChange={this.handleClick}
                >
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                    <option value="purple">purple</option>
                    <option value="pink">pink</option>
                </select>
                <p>your favorite color is {this.state.favColor}</p>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
