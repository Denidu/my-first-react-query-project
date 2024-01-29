import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../services/api';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useNavigate();

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      history.push('/posts');
    },
  });

  const handleCreatePost = () => {
    mutation.mutate({ title, body });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Body:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCreatePost} disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
