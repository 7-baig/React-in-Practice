import React, { useState } from 'react'

export function useForm2(initialValues) {

    const [values, setValues] = useState(initialValues)

    return [
        ...values,
        e => {
            setValues(
                {
                    [e.target.name]: e.target.value
                }
            )
        }
    ]
}

