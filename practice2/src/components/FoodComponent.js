import React, { Component } from 'react'
import './App.css'
import menu from './menu'

class FoodComponent extends Component {
    render() {
        const mappedMenu = menu.map(item => <div className="card"><img src={item.url} alt="food image"/><p>{item.name}</p><p>price: {item.price}</p></div>)

        return (
            <div className="cardsContainer">
                {mappedMenu} 
            </div>
        )
    }
}

export default FoodComponent
