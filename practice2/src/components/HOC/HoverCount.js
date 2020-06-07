import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCount extends Component {
    render() {
        const {count, clickHandler} = this.props
        return (
            <div>
                <h1 onMouseOver={clickHandler}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCount, 10)

