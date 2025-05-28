import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='flex justify-between fixed w-full h-[60px] bg-gray200 p-2.5'>
      <Link to={'/'} className="flex items-center font-bold text-pink100 p-2.5">YOONCHA</Link>
      <div className='flex items-center'>
        {['/login', '/signup'].map((path, index) => (
          <Link
            key={index}
            to={path}
            className='text-center nowrap-ellipsis text-sm rounded-md p-2.5 ml-2.5 hover:bg-pink100'
          >
            {path === '/login' ? '로그인' : '회원가입'}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;