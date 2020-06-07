import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        return (
            <button onMouseOver={this.props.handler}>Hovered {this.props.count} times</button>
        )
    }
}

export default HoverCounterTwo
