import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {

  const {id, title} = useParams()
  console.log(id, title)
  return (
    <div className="bg-gray-300 rounded-t-3xl px-6 pt-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Overview</h1>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">By Mitchell M</h2>
        <p className="mt-6 text-xl leading-8">
          Lekker Melodies is all about finding peace and focus through sounds.
          It's like having your own secret tool to make noisy places quieter. Here's what you can expect:
        </p>
        <div className="mt-10 max-w-2xl mb-8">
          <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 mb-8">🎵 🎹🎹🎹 🎹🎹🎹 🎵</h3>
        </div>
      </div>
    </div>
  )
}

export default Post;