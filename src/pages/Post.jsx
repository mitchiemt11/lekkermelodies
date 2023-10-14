import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {

  const {id, title} = useParams()
  console.log(id, title)
  return (
    <div>Post</div>
  )
}

export default Post