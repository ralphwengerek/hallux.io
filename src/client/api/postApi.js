import axios from 'axios';
import { apiUrl } from '../config';

const createPost = (post) => axios.post(`${apiUrl}/posts`, post);

const fetchPosts = () => axios.get(`${apiUrl}/posts`);

const fetchPost = (slug) => axios.get(`${apiUrl}/posts/${slug}`);

const updatePost = (post) => axios.put(`${apiUrl}/posts/${post.slug}`, post);

const deletePost = (id) => axios.delete(`${apiUrl}/posts/${id}`);

const postApi = () => ({
  createPost,
  fetchPosts,
  fetchPost,
  updatePost,
  deletePost,
});

export default postApi();
