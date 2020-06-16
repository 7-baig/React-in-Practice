import React, { createContext, useReducer } from 'react'

const initialState = {
    data: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'execute':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export const Context = createContext(initialState)

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider
            value={
                [state, dispatch]
            }
        >
            {children}
        </Context.Provider>
    )
}

export default Store