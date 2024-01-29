import { useQuery } from 'react-query';
import axios from 'axios';


const fetchPost = async (id) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
};

export const usePost = (id) => {
  return useQuery(['post', id], () => fetchPost(id));
};
