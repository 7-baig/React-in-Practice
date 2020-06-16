import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const [user, setUser] = useState({})
    const [id, setId] = useState(1)
    // const [isAddressClicked, setIsAddressClicked] = useState(false)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => console.log(err))
    }, [id])


    return (
        <div className="cardContainer">
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <h1>{user.name}</h1>


            {/* {
                users.map(user => (
                    <div key={user.id} className="card">
                        <p>{user.name}</p>
                        <p>@{user.username}</p>
                        <p>{user.email}</p>
                        {
                            isAddressClicked
                            ?
                            <>
                            <p>street: {user.address.street}</p>
                            <p>suite: {user.address.suite}</p>
                            <p>city: {user.address.city}</p>
                            <button onClick={() => setIsAddressClicked(false)}>hide</button>
                            </>    
                            :
                            <button onClick={() => setIsAddressClicked(true)} >address</button>
                        }
                    </div>
                ))
            } */}

        </div>
    )
}

export default DataFetching
