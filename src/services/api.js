import axios from 'axios';

export const createPost = async (postData) => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
  return data;
};
