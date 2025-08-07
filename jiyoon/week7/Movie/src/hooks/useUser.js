import { useContext } from 'react';
import UserContext from '@/contexts/UserContext';

const useUser = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('useUser는 UserProvider 안에서만 사용해야 합니다.');
  }
  return userContext;
};

export default useUser;
