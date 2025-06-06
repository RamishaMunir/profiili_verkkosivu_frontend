const BASE_URL = 'http://localhost:5000';
const API_URL = `${BASE_URL}/api`;

export { BASE_URL, API_URL };

export const fetchPersonalInfo = async () => {
  const response = await fetch(`${API_URL}/personal`);
  return response.json();
};

export const fetchEducation = async () => {
  const response = await fetch(`${API_URL}/education`);
  return response.json();
};

export const fetchExperience = async () => {
  const response = await fetch(`${API_URL}/experience`);
  return response.json();
};

export const fetchSkills = async () => {
  const response = await fetch(`${API_URL}/skills`);
  return response.json();
};

export const fetchAchievements = async () => {
  const response = await fetch(`${API_URL}/achievements`);
  return response.json();
};

export const fetchHobbies = async () => {
  const response = await fetch(`${API_URL}/hobbies`);
  return response.json();
};

export const fetchReferences = async () => {
  const response = await fetch(`${API_URL}/references`);
  return response.json();
};

export const fetchRecommendations = async () => {
  const response = await fetch(`${API_URL}/recommendations`);
  return response.json();
};

export const fetchFullCV = async () => {
  const response = await fetch(`${API_URL}/cv`);
  return response.json();
};