import React, { useState, useEffect } from 'react'

function HooksMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const mouseMove = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', mouseMove)
    }, [])

    return (
        <h1>
            X - {x}
            &nbsp;
            &nbsp;
            &nbsp;
            Y - {y}    
        </h1>
    )
}

export default HooksMouse
