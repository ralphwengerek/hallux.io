import axios from 'axios';
import { apiUrl } from '../config';

const createPost = post => axios.post(`${apiUrl}/posts`, post);

const fetchPosts = () => axios.get(`${apiUrl}/posts`);

const fetchPost = id => axios.get(`${apiUrl}/posts/${id}`);

const updatePost = post => axios.put(`${apiUrl}/posts/${post.id}`, post);

const deletePost = id => axios.delete(`${apiUrl}/posts/${id}`);

export default {
  createPost,
  fetchPosts,
  fetchPost,
  updatePost,
  deletePost,
};
