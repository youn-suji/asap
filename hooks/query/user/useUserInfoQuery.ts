import { getUserInfo } from 'api/sample.api';
import { useQuery } from '@tanstack/react-query';

export default function useUserInfoQuery() {
  return useQuery(['userInfo'], getUserInfo, {
    staleTime: Infinity,
    initialDataUpdatedAt: 0,
    initialData: [],
  });
}