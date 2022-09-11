import { useParams } from "react-router-dom"
import Main from "../components/Main"

const UserPage = () => {
    const { username } = useParams()

    return (
        <Main showSidebar>
            <h1>{username}</h1>
            <p>TODO</p>
        </Main>
    )
}
export default UserPage