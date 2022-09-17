import { useParams } from "react-router-dom"
import Main from "../components/Main"
import { useState, useEffect, Component } from "react"
import { Stack, Image, Spinner } from "react-bootstrap"
import TimeAgo from "../components/TimeAgo"
import { useApi } from "../contexts/ApiProvider"
import Posts from "../components/Posts"


const UserPage = () => {
    const { username } = useParams()
    const [user, setUser] = useState()
    const api = useApi()

    useEffect(
        () => {
            (async () => {
                const response = await api.get('/users/' + username)
                setUser(response.ok ? response.body : null)
            })()
        },
        [username, api]
    )

    return (
        <Main showSidebar>
            {
                user === undefined
                    ? <Spinner animation="border" />
                    : <div>
                        {user === null
                            ? <p>User not found.</p>
                            : <div>
                                <Stack direction="horizontal" gap={4}>
                                    <Image src={user.avatar_url + '&s=128'} roundedCircle />
                                    <div>
                                        <h1>{user.username}</h1>
                                        {user.about_me && <h5>{user.about_me}</h5>}
                                        <p>
                                            Member since: <TimeAgo isoDate={user.first_seen} />
                                            <br />
                                            Last seen: <TimeAgo isoDate={user.last_seen} />
                                        </p>
                                    </div>
                                </Stack>
                                <Posts content={user.id} />
                            </div>
                        }
                    </div>
            }
        </Main>
    )
}
export default UserPage
