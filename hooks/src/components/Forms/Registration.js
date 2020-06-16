import React, { useState, useEffect } from 'react'
import useForm2 from './useForm2'

function Registration() {

    const [values, handleChange] = useState({ firstname: '', lastname: '', password: '', phone: '', email: '' })
    const [tickValue, setTickValue] = useState(0)

    const tick = () => {
        setTickValue(prevState => prevState + 1)
    }

    useEffect(() => {
        console.log('use Effect')
        setInterval(tick, 1000)
        return () => {
            clearInterval(tick)
        }
    }, [])

    return (
        <>
            <h1>{tickValue}</h1>
            <div className="formCard" >
                <label>First Name</label>
                <input type="text" onChange={handleChange} name="firstname" value={values.firstname}/>
                <label>Last Name</label>
                <input type="text" onChange={handleChange} name="lastname" value={values.lastname}/>
                <label>Password</label>
                <input type="password" onChange={handleChange} name="password" value={values.password}/>
                <label>Phone</label>
                <input type="number" onChange={handleChange} name="phone" value={values.phone}/>
                <label>Email</label>
                <input type="email" onChange={handleChange} name="email" value={values.email}/>
            </div>
        </>
    )
}

export default Registration
