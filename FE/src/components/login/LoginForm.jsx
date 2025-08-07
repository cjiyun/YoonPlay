import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../common/Input';
import useValidate from '../../hooks/useValidate';
import axios from '@/apis/axiosRequest';
import useUser from '@/hooks/useUser';
import SubmitButton from '@/components/common/SubmitButton';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const { handleSubmit, isValid, isSubmitting, ...res } = useValidate('/login');

  const onSubmit = async data => {
    try {
      const { email, password } = data;
      const username = email.split('@')[0];

      const res = await axios.post('/auth/login', { email, password });
      const { accessToken, refreshToken } = res.data;

      login({ email, accessToken, refreshToken });

      toast.success(`${username}님, 반갑습니다!`);
      navigate('/');
    } catch (error) {
      console.error('로그인 실패 : ', error.response.data || error.message);
      toast.error('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-80 space-y-3">
      <>
        {['email', 'password'].map(name => (
          <Input
            key={name}
            name={name}
            type={name === 'email' ? 'text' : 'password'}
            placeholder={name === 'email' ? '이메일을 입력해주세요' : '비밀번호를 입력해주세요'}
            {...res}
          />
        ))}
      </>
      <SubmitButton text="로그인" disabled={!isValid} loading={isSubmitting} />
    </form>
  );
};

export default LoginForm;
