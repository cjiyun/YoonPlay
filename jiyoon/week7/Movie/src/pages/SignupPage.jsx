import SignupForm from '../components/signup/SignupForm';

const SignupPage = () => {
  return (
    <div className="mt-25 flex flex-col items-center gap-10">
      <h1 className="w-full truncate text-center">회원가입</h1>
      <SignupForm path="/signup" />
    </div>
  );
};

export default SignupPage;
