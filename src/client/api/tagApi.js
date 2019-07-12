import axios from 'axios';
import { apiUrl } from '../../shared/config';

export const createTag = tag => axios.tag(`${apiUrl}/tags`, tag);

export const getTags = () => axios.get(`${apiUrl}/tags`);

export const getTag = id => axios.get(`${apiUrl}/tags/${id}`);

export const updateTag = tag => axios.put(`${apiUrl}/tags/${tag.id}`, tag);

export const deleteTag = id => axios.delete(`${apiUrl}/tags/${id}`);
