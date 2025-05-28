import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Input from "./Input";

const Form = ({ path }) => {
  const schema = yup.object().shape({
    email: yup.string()
      .required('이메일을 입력해주세요.')
      .matches(/^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/, '올바른 이메일 형식을 입력해주세요.'),
    password: yup.string()
      .required('비밀번호를 입력해주세요.')
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.'),
    ...(path === "/signup" && {
      passwordCheck: yup.string()
        .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
        .required('비밀번호를 한 번 더 입력해주세요.'),
    }),
  })
  const {
    register,
    handleSubmit,
    formState: {errors, touchedFields, isValid}
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
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
            register={register}
            touchedFields={touchedFields}
            errors={errors}
          />
        ))}
        {path === "/signup" &&
          <Input
            name="passwordCheck"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            register={register}
            touchedFields={touchedFields}
            errors={errors}
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