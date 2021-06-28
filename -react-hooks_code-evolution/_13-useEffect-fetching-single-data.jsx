import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Demo = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res)
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    // note: now, >will update when id change
  }, [id]) 
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
    </div>
  )
}

export default Demo
