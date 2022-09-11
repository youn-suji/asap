import sampleInstance from './instances/sampleInstance'
import { IUserInfo } from './types/api.type'

export async function oauth2() {
  //http://localhost:8080/oauth2/authorization/google
  return await sampleInstance.get('http://localhost:8080/oauth2/authorization/google').then((res) => res.data)
}

export async function getUserInfo() {
  return await sampleInstance.get<IUserInfo[]>('/userInfo').then((res) => res.data)
}
