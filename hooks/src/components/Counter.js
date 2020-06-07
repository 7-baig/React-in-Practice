import React, {useState} from 'react'
import './App.css'

function Counter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            &nbsp;&nbsp;Count {count}&nbsp;&nbsp;   
            <button onClick={() => setCount(prevState => prevState + 1)} >Increment</button>
            <button onClick={() => setCount(initialCount)} >Reset</button>
            <button onClick={() => setCount(prevState => prevState - 1)} >Decrement</button>
        </div>
    )
}

export default Counter
