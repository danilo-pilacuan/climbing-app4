import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://192.168.1.8:5000',
  //baseURL: 'http://ec2-18-226-185-205.us-east-2.compute.amazonaws.com:5002', 
  baseURL: 'http://192.168.2.7:5002', 
  //baseURL: 'http://20.38.39.29:5002', //https://20.38.39.29:5004
  //baseURL: 'http://192.168.143.95:5000',
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
