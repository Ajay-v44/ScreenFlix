import axios  from "axios";
import {baseUrl } from './components/Constents/constats'
const instance = axios.create({
    baseURL: 'baseUrl',
    
  });
  export default instance