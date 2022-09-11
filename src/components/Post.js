import { Stack } from "react-bootstrap"
import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import TimeAgo from '../components/TimeAgo'


const Post = (props) => {
    const post = props.post

    return (
        <Stack direction="horizontal" gap={3} className="Post">
            <Image src={post.author.avatar_url + '&s=48'} alt={post.author.username} roundedCircle />
            <div>
                <p>
                    <Link to={'/user/' + post.author.username}>
                        {post.author.username}
                    </Link>
                    &nbsp;&mdash;&nbsp;
                    <TimeAgo isoDate={post.timestamp} />:
                </p>
                
                <p>{post.text}</p>
            </div>
        </Stack>
    )
}
export default Post