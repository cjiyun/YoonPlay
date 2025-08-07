import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '@/components/common/Input';
import useValidate from '@/hooks/useValidate';
import axios from '@/apis/axiosRequest';
import SubmitButton from '@/components/common/SubmitButton';

const SignupForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, isValid, isSubmitting, ...res } = useValidate('/signup');

  const onSubmit = async data => {
    try {
      const { email, password, passwordCheck } = data;
      await axios.post('/auth/register', { email, password, passwordCheck });

      toast.success('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      console.error('회원가입 실패 : ', error.response?.data || error.message);
      toast.error('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-80 space-y-3">
      {['email', 'password', 'passwordCheck'].map(name => (
        <Input
          key={name}
          name={name}
          type={name === 'email' ? 'text' : 'password'}
          placeholder={
            name === 'email'
              ? '이메일을 입력해주세요'
              : name === 'password'
                ? '비밀번호를 입력해주세요'
                : '비밀번호를 다시 입력해주세요'
          }
          {...res}
        />
      ))}
      <SubmitButton text="회원가입" disabled={!isValid} loading={isSubmitting} />
    </form>
  );
};

export default SignupForm;
