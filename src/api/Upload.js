import axios from 'axios';

const api = axios.create({
  baseURL: "/api"
});

export const analysisUpload = (formData, config) => api.post("/analysis/upload", formData, config);
//export const simulExperienceUpload = (formData, config) => api.post("/simulExperience/uploadSimulExperience", formData, config);