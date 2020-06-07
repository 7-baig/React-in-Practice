import React, { Component } from 'react'


class Timer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            minutes: 1,
            seconds: 0             
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            const {minutes, seconds} = this.state
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.intervalID)
                }
                else {
                    this.setState(({minutes}) => ({
                        minutes: minutes - 1,
                        seconds: 59        
                    }))
                }
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
    
    render() {
        const {minutes, seconds} = this.state
        const style = {
            color: "red",
            fontSize: "4em"
        }
        const sale = {
            textDecoration: "black line-through"
        }
        return (
            <div style={style}>
                <h1 style={sale}>50% Sale</h1>

                {minutes === 0 && seconds === 0 
                ?
                <>
                <h1>Sale is Over!</h1> 
                </>
                :
                <>
                <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                {sale.textDecoration = ""}
                </>
                }
            </div>
        )
    }
}

export default Timer
