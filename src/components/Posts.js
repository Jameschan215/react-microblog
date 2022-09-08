const Posts = () => {
    const posts = [
        {
            id: 1,
            text: 'Hello, world!',
            timestamp: 'a minute ago',
            author: {
                username: 'susan',
            },
        },
        {
            id: 2,
            text: 'Second post',
            timestamp: 'an hour ago',
            author: {
                username: 'john',
            },
        },
    ]

    const listOfPosts = posts.map(post => {
        return (
            <li key={post.id}>
                <b>{post.author.username}</b> &mdash; {post.timestamp}
                <br />
                {post.text}
            </li>
        )
    })

    return (
        <div>
            {posts.length === 0 ? <p>There are no blog posts.</p> : <ul>{listOfPosts}</ul>}
        </div>
    )
}

export default Posts