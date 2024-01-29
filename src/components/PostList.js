import React from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts'; 



const PostList = () => {
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
