import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuthContext from './useAuthContext';

const axiosSecure = axios.create({
  baseURL: 'https://assignment12-server-ten.vercel.app/', 
});

const useAxiosSecure = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate(); 

  

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('jwt-access-token');
      if (token) {
        config.headers.authorization = `bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;