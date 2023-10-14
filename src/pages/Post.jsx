import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data';

const Post = () => {
  // Get the "id" parameter from the URL using useParams
  const { id } = useParams();

  // Find the post with the matching "id"
  const post = posts.find((post) => post.id === parseInt(id, 10));

  // Check if a post with the specified "id" was found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-gray-300 rounded-t-3xl px-6 pt-32 lg:px-8">

      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
        <Link to="/blog" className="text-gray-900 hover:text-gray-600 text-xl absolute top-40 left-20">
          &larr;  Back
        </Link>
        <p className="mt-6 text-xl leading-8">{post.body}</p>
        <h2 className="mt-4 text-xl font-bold tracking-tight text-gray-900 ">By {post.author.name}</h2>
        <div className="mt-10 max-w-2xl mb-8">
          <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 mb-8">🎵 🎹🎹🎹 🎹🎹🎹 🎵</h3>
        </div>
      </div>
    </div>
  );
}

export default Post;
