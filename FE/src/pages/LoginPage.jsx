import LoginForm from '../components/login/LoginForm';

const LoginPage = () => {
  return (
    <div className="mt-25 flex flex-col items-center gap-10">
      <h1 className="w-full truncate text-center">로그인</h1>
      <LoginForm path="/login" />
    </div>
  );
};

export default LoginPage;
