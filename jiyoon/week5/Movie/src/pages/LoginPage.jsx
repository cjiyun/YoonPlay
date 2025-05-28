import Form from "../components/common/Form";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-25">
      <h1 className="w-full text-center nowrap-ellipsis">로그인</h1>
      <Form path="/login" />
    </div>
  )
}

export default LoginPage;