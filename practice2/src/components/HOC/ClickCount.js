import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCount extends Component {
    render() {
        const {count, clickHandler, name} = this.props
        return (
            <div>
                <button onClick={clickHandler}> 
                    {name} Clicked {count} times
                </button>  
            </div>
        )
    }
}

export default UpdatedComponent(ClickCount, 2)
