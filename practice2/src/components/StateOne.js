import React, { Component } from 'react'

class StateOne extends Component {
    constructor() {
        super() 
        this.state = {
            buttonMessage: 'make me old',
            url: 'https://cdn.thegentlemansjournal.com/wp-content/uploads/2015/10/front18-900x600-c-center.jpg',
            height: '500px'
        }
        this.changeMe = this.changeMe.bind(this)
    }
    changeMe() {
        if(this.state.buttonMessage === 'make me old' && this.state.url === 'https://cdn.thegentlemansjournal.com/wp-content/uploads/2015/10/front18-900x600-c-center.jpg') {
            this.setState(
                {
                    buttonMessage: 'make me young',
                    url: 'https://www.newskarnataka.com/storage/photos/shares/gates_M_2442020.jpg',
                    height: '400px'
                }
            )
        }
        else {
            this.setState(
                {
                    buttonMessage: 'make me old',
                    url: 'https://cdn.thegentlemansjournal.com/wp-content/uploads/2015/10/front18-900x600-c-center.jpg',
                    height: '500px'
                }
            )
        }
    }

    render() {
        // STYLE
    const style = {
        height: this.state.height
    }

        return (
            <div className="stateOne">
                <button onClick={this.changeMe}>{this.state.buttonMessage}</button>
                <img src={this.state.url} style={style}  />
            </div>
        )
    }
}

export default StateOne
