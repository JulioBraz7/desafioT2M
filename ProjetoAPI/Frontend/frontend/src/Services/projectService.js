import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const getProjects = () => api.get('/project');
export const createProject = (project) => api.post('/project', project);
export const updateProject = (id, project) => api.put(`/project/${id}`, project);
export const deleteProject = (id) => api.delete(`/project/${id}`);
