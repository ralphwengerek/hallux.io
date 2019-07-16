import axios from 'axios';
import { apiUrl } from '../config';

const createTag = tag => axios.tag(`${apiUrl}/tags`, tag);

const getTags = () => axios.get(`${apiUrl}/tags`);

const getTag = id => axios.get(`${apiUrl}/tags/${id}`);

const updateTag = tag => axios.put(`${apiUrl}/tags/${tag.id}`, tag);

const deleteTag = id => axios.delete(`${apiUrl}/tags/${id}`);

export default {
  createTag,
  getTags,
  getTag,
  updateTag,
  deleteTag,
};
