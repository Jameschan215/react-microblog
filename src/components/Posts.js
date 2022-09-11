import { Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import Post from '../components/Post'


const BASE_API_URL = process.env.REACT_APP_BASE_API_URL

const Posts = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        (async () => {
            const response = await fetch(BASE_API_URL + '/api/feed')
            if (response.ok) {
                const results = await response.json()
                setPosts(results.data)
            } else {
                setPosts(null)
            }
        })()
    }, [])

    return (
        <div>
            {
                posts === undefined
                    ?
                    <Spinner animation="border" />
                    :
                    <div>
                        {
                        posts === null 
                        ? <p>Could not retrieve blog posts.</p> 
                        : posts.map(post => <Post key={post.id} post={post} />)
                        }
                    </div>
            }
        </div>
    )
}

export default Posts