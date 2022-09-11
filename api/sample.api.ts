import asapInstance from './instances/asapInstance'
import sampleInstance from './instances/sampleInstance'
import { IUserInfo } from './types/api.type'

export async function oauth2() {
  //http://localhost:8080/oauth2/authorization/google
  return await asapInstance.post('/oauth2/authorization/google').then((res) => res.data)
}

export async function getUserInfo() {
  return await sampleInstance.get<IUserInfo[]>('/userInfo').then((res) => res.data)
}

export async function saveNickname() {
  return await asapInstance
    .post('/api/nickname', {
      nickname: ""
    })
    .then(function (response) {
      console.log(response)  
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });
}
