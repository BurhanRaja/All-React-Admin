import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

// const initialState = {
//     cart: false,
//     chat: false,
//     notification: false,
//     profile: false
// }

export const ContextProvider = (props) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(undefined)

    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, screenSize, setScreenSize}}>
            {props.children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)