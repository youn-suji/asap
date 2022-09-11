import { IUserInfo } from '@/apis/types/api.type';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function userInfoData(_req: NextApiRequest, res: NextApiResponse<IUserInfo>) {
  const data: IUserInfo = {
      name: '윤수지',
      email: 'yyounsj@gmail.com',
      privacy: false,
      nickName: ''
  }

  return res.status(200).json(data);
}
