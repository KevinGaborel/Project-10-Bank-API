import axios from "axios";

const baseUrl = "http://localhost:3001/api/v1/user";

export const getLogin = async (obj) => {
  return axios.post(`${baseUrl}/login`, obj)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    })
};


export const getUserProfil = async () => {
  const token = sessionStorage.getItem('userToken');
  axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;

  return axios.post(`${baseUrl}/profile`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
  })
};


export const updateUserProfil = async (obj) => {
  const token = sessionStorage.getItem('userToken');
  axios.defaults.headers.put['Authorization'] = `Bearer ${token}`;

  return axios.put(`${baseUrl}/profile`, obj)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    return error.response.data;
})
}