import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
  baseURL: `https://server-side-one-mauve.vercel.app/`,
});

const useAxiosPublic = () => {
  return axiosPublic
};

export default useAxiosPublic;