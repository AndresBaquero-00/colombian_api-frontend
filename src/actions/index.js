const API_URL = 'https://api-colombia.com/api/v1';

export const getPresidents = async () => {
  const res = await fetch(`${API_URL}/President`);
  return await res.json();
};

export const getAirports = async () => {
  const res = await fetch(`${API_URL}/Airport`);
  return await res.json();
};

export const getTouristicAttractions = async () => {
  const res = await fetch(`${API_URL}/TouristicAttraction`);
  return await res.json();
};

export const getRegions = async () => {
  const res = await fetch(`${API_URL}/Region`);
  return await res.json();
};

export const getDepartments = async () => {
  const res = await fetch(`${API_URL}/Department`);
  return await res.json();
};
