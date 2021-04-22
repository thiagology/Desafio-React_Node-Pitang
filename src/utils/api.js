import swal from '@sweetalert/with-react';
import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'http://localhost:3333/api',
});

myAxios.interceptors.response.use((response) => {
  if (response.status >= 400) {
    swal('Oops...', 'Request Failed...', 'error');
  }

  return response;
});

export default myAxios;
