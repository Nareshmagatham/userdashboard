import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";


export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const fetchUserById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
