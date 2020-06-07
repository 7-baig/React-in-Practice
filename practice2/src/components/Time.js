import React, { PureComponent } from 'react'


class Time extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             time: 'time'
        }
    }
    componentDidMount() {
        this.setIntervalID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.setIntervalID)
    }

    zero(i) {
        if(i < 10) {
            i = '0' + i
        }
        return i
    }

    tick() {
        const today = new Date()
        const h = today.getHours()
        const m = today.getMinutes()
        const s = today.getSeconds()
        this.setState({
            time: `${this.zero(h)}:${this.zero(m)}:${this.zero(s)}`
        })
    }

    render() {

        return (
            <div>
                <h1 className="time">{this.state.time}</h1>
            </div>
        )
    }
}

export default Time
