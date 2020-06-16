import React, { useContext, useState, useEffect } from 'react'
import{ Context } from './Store'
import axios from 'axios'

function ComponentA() {

    const [state, dipatch] = useContext(Context)
    const [isClicked, setIsClicked] = useState(false)
    const [text, setText] = useState([])
    // const text = 'hello world'
    
    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                console.log(res.data)
                setText(res.data)
            } )
            .catch(err => console.log(err))
    }, [])

    const handleClick = () => {
        setIsClicked(true)
        dipatch({type: 'search', payload: text})
    }

    return (
        <div>
            {/* <input type="text" value={text} onChange={e => setText(e.target.value)}></input> */}
            <button onClick={handleClick} >search</button>
        </div>
    )
}

export default ComponentA
