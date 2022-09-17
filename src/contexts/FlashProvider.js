import { createContext, useContext, useState } from "react"


export const FlashContext = createContext()
let flashTimer

const FlashProvider = (props) => {
    const children = props.children
    const [messageToBeFlashed, setMessageToBeFlashed] = useState({})
    const [visible, setVisible] = useState(false)

    const flash = (message, type, duration=10) => {
        if (flashTimer) {
            clearTimeout(flashTimer)
            flashTimer = undefined
        }

        setMessageToBeFlashed({message, type})
        setVisible(true)
        if (duration) {
            flashTimer = setTimeout(hideFlash, duration*1000)
        }
    }

    const hideFlash = () => {
        setVisible(false)
    }

    return (
        <FlashContext.Provider value={{flash, hideFlash, messageToBeFlashed, visible}}>
            {children}
        </FlashContext.Provider>
    )
}

export default FlashProvider

export function useFlash() {
    return useContext(FlashContext).flash
}


