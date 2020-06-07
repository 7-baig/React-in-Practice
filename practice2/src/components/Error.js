import React from 'react'

function Error({hero}) {
    if (hero === 'joker') {
        throw new Error('Not a Hero')
    }
    return (
        <div>
            <h1>{hero}</h1>
        </div>
    )
}

export default Error
