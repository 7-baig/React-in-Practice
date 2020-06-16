import React, { useReducer, createContext } from  'react'

const initialState = {
    posts: []
}


const reducer = (state, action) => {

    switch(action.type) {
        case 'search':
            return {
                ...state,
                posts: action.payload
            }
            default: return state
    }
}


const Store = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider 
            value={[state, dispatch]}
        >
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState)

export default Store