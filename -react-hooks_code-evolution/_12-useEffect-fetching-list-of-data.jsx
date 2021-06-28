import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Demo = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    // note: won´t be rerendered
  }, [])
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Demo
