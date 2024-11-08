// src/api/user.js
import axios from "axios";

const API_BASE_URL = "http://localhost:28080"; // 后端服务地址

export function register(username, password) {
  return axios.post(`${API_BASE_URL}/users/register`, {
    username,
    password,
  });
}

export function login(username, password) {
  return axios.post(`${API_BASE_URL}/users/login`, {
    username,
    password,
  });
}
