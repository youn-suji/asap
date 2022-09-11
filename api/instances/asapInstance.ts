import axios from 'axios'

const asapInstance = axios.create({
  baseURL: 'http://ec2-52-78-162-180.ap-northeast-2.compute.amazonaws.com:8080',
});

export default asapInstance
