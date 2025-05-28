import Form from "../components/common/Form";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-25">
      <h1 className="w-full text-center nowrap-ellipsis">회원가입</h1>
      <Form path="/signup" />
    </div>
  )
}

export default SignupPage;