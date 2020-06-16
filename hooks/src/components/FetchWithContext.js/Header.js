import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Context } from './Store'

function Header() {

    const [state, dispatch] = useContext(Context)

    const [text, setText] = useState('')
    const [url, SetUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux')
    const [data, SetData] = useState([])


    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data.hits)
                SetData(res.data.hits)
            })
            .catch(err => console.log(err))


    }, [url])

    const handleClick = () => {

        dispatch({ type: 'execute', payload: data })

        SetUrl(`https://hn.algolia.com/api/v1/search?query=${text}`)
    }

    return (
        <div>
            <input 
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <button
                type="button"
                onClick={handleClick}
            >
            Search
            </button>
        </div>
    )
}

export default Header
