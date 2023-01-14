import axios from "axios";

const baseUrl = "http://localhost:3001/api/v1/user";

export const getLogin = async (obj) => {
  const result = await axios.post(`${baseUrl}/login`, obj);
  try {
    return result.data;
  } catch (error) {
    console.error(error);
  }
};


export const getUserProfil = async () => {
  const token = localStorage.getItem('userToken');
  axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
  console.log(token);

  const result = await axios.post(`${baseUrl}/profile`);

  console.log(result);
  try {
    return result.data;
  } catch (error) {
    console.error(error);
  }
};