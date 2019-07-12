import axios from 'axios';
import { apiUrl } from '../../shared/config';

export const createPost = post => axios.post(`${apiUrl}/posts`, post);

export const getPosts = () => axios.get(`${apiUrl}/posts`);

export const getPost = id => axios.get(`${apiUrl}/posts/${id}`);

export const updatePost = post => axios.put(`${apiUrl}/posts/${post.id}`, post);

export const deletePost = id => axios.delete(`${apiUrl}/posts/${id}`);
