import React, {useState, useEffect} from 'react'

function UseEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `clicked ${count} times`
        console.log('useEffect Called')
    }, [count])

    return (
        <div>
            <label>Type anything you want: </label>
            <input onChange={e => setName(e.target.value)} type="text" value={name}/>
            &nbsp;
            <button onClick={() => setCount(count + 1)} >Clicked {count} times</button>
        </div>
    )
}

export default UseEffect
