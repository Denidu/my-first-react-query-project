import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts'; 


const PostDetail = () => {
  const { id } = useParams();
  const { data: post, isLoading, isError } = usePosts(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching post</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
