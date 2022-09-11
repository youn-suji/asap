import axios from 'axios'

const sampleInstance = axios.create({
  baseURL: '/api/sample',
});

export default sampleInstance
