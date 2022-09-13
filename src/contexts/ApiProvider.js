import { createContext, useContext } from "react"
import MicroblogApiClient from "../MicroblogApiClient"

const ApiContext = createContext()

const ApiProvider = (props) => {
    const api = new MicroblogApiClient()
    const children = props.children

    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    )
}

export function useApi() {
    return useContext(ApiContext)
}

export default ApiProvider

