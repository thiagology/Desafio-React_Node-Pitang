import swal from '@sweetalert/with-react';
import axios from 'axios';

const { REACT_APP_API_BASE_URL: apiBaseURL } = process.env;

const myAxios = axios.create({
  baseURL: apiBaseURL,
});

myAxios.interceptors.response.use((response) => {
  if (response.status >= 400) {
    swal('Oops...', 'Request Failed...', 'error');
  }

  return response;
});

export default myAxios;
