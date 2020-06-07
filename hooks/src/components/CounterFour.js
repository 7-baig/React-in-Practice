import React, {useState} from 'react'
import { useForm } from './useForm'

function CounterFour() {

    const [values, handleChange] = useForm({email: '', password: ''})

    return (
        <div>
            <label>Email: </label>
            <input 
                onChange={handleChange} 
                type="email" 
                name="email"
                value={values.email}    
            />
            &nbsp;
            <label>Password: </label>
            <input 
                onChange={handleChange} 
                type="password" 
                name="password"
                value={values.password}
            />
        </div>
    )
}

export default CounterFour
