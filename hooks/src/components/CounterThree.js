import React, {useState} from 'react'

function CounterThree() {

    const [items, setItems] = useState([])

    const handleClick = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10)   
        }])
    }
    const clear = () => {
        setItems([])
    }

    return (
        <div>
            <button onClick={handleClick}>Add a number</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>
            <button onClick={clear}>clear all</button>
        </div>
    )
}

export default CounterThree
