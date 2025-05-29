import Input from "./Input";
import useValidate from "../../hooks/useValidate";

const Form = ({ path }) => {
  const { handleSubmit, isValid, ...res } = useValidate({path})
  const onSubmit = (data) => {
    console.log('submit');
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-80 space-y-3"
    >
      <>
        {['email', 'password'].map(name => (
          <Input
            key={name}
            name={name}
            type={name === 'email' ? 'text' : name}
            placeholder={name === "email" ? "이메일을 입력해주세요" : "비밀번호를 입력해주세요"}
            {...res}
          />
        ))}
        {path === "/signup" &&
          <Input
            name="passwordCheck"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            {...res}
          />
        }
      </>
      <input
        type='submit'
        value={path === "/login" ? "로그인" : "회원가입"}
        disabled={!isValid}
        className="w-full text-white bg-pink100 rounded-md p-2.5 cursor-pointer
          hover:bg-blue-500 disabled:bg-gray-500 disabled:cursor-default"
      />
    </form>
  )
}

export default Form;