import React, { Component } from 'react'
import './App.css'

class MemeGenerator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'https://www.tjtoday.org/wp-content/uploads/2020/01/unnamed-7.png',
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes)
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState( { [name]: value } )
    } 
    handleSubmit(event) {
        event.preventDefault()
        const ranNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMeme = this.state.allMemeImgs[ranNum].url
        this.setState({
            randomImg: randomMeme
        })
    }

    render() {
        return (
            <div className="memeContainer">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="topText"
                        placeholder="top text"
                        value={this.state.topText}
                        onChange={this.handleChange}                
                    />
                    <input 
                        type="text" 
                        name="bottomText"
                        placeholder="bottom text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Generate</button>
                </form>

                <div className="memeGenerator">
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="top"> {this.state.topText} </h2>
                    <h2 className="bottom"> {this.state.bottomText} </h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator
