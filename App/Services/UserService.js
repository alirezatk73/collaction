import axios from "axios";
import { Config } from "App/Config";
import { is, curryN, gte } from "ramda";

const ApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

async function fetchUsers() {
  const response = await ApiClient.get("/users");
  return response.data;
}
async function fetchUserById(id) {
  const response = await ApiClient.get(`/users/${id}`);
  return response.data;
}
async function deleteUser(id) {
  const response = await ApiClient.delete(`/users/${id}`);
  return response.data;
}
async function postUser(data) {
  const response = await ApiClient.post(`/users`, data);
  return response.data;
}

async function updateUser(id, data) {
  const response = await ApiClient.put(`/users/${id}`, data);
  return response.data;
}

export const userService = {
  fetchUsers,
  fetchUserById,
  deleteUser,
  postUser,
  updateUser,
};
