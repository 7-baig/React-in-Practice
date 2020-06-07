// import React, {useState} from 'react'

// function CounterTwo() {

//     const [name, setName] = useState({firstName: '', lastName: ''})

//     return (
//         <div>
//             <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value}) } />
//             <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value}) } />
//             <h1>Firstname is {name.firstName}</h1>
//             <h1>Lastname is {name.lastName}</h1>
//         </div>
//     )
// }

// export default CounterTwo

import React, {useState} from 'react'

function CounterTwo() {

    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: ''
    })

    return (
        <div>
            first name <input type="text" value={info.firstName} onChange={e => setInfo({...info, firstName: e.target.value})} />
            <br/>
            last name <input type="text" value={info.lastName} onChange={e => setInfo({...info, lastName: e.target.value})} />
            <br/>
            email <input type="text" value={info.email} onChange={e => setInfo({...info, email: e.target.value})} />
            <br/>
            phone <input type="number" value={info.phone} onChange={e => setInfo({...info, phone: e.target.value})} />
            <br/>

            <h1>first name: {info.firstName}</h1>
            <h1>last name: {info.lastName}</h1>
            <h1>email: {info.email}</h1>
            <h1>phone: {info.phone}</h1>
        </div>
    )
}

export default CounterTwo
