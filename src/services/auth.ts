import axios from 'axios';
import { LoginFormInputs, SignUpFormInputs } from 'types/user';

export const API_URL = 'http://localhost:8080/api/v1/auth/';

export const register = (data: SignUpFormInputs) => {
  return axios.post(`${API_URL}`, data);
};

export const login = async (data: LoginFormInputs) => {
  const response = await axios.post(`${API_URL}sign_in`, data);

  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};
