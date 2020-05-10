import React, { Component } from 'react'
import './App.css'

class FetchPractice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: false,
            characters: []
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                this.setState({
                    loading: false,
                    characters: data.results
                })
            } )
    }

    render() {
        const text = this.state.loading ? 'Loading...' : this.state.characters.map(char => <h3 key={char.name}>Characters: {char.name}</h3>)
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default FetchPractice
