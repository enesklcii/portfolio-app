import client from './client.js';


export const fetchProfile = () => client.get('/profile').then(r => r.data);
export const fetchProjects = (params = {}) => client.get('/projects', { params }).then(r => r.data);
export const sendMessage = (payload) => client.post('/contact', payload).then(r => r.data);
export const fetchEducation = () => client.get('/education').then(r => r.data);
export const fetchCertificates = () => client.get('/certificates').then(r => r.data);