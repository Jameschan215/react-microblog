import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  //  const post = {
  //    id: 1,
  //    text: 'Hello, world!',
  //    timestamp: 'a minute ago',
  //    author: {username: 'susan'},
  //  }

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
      <h1>Microblog</h1>
      {posts.length === 0 ? <p>There are no blog posts.</p> : <ul>{listOfPosts}</ul>} 
    </div>
  )
}

export default App