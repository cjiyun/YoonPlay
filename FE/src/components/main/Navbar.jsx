import { Link } from 'react-router-dom';
import useUser from '@/hooks/useUser';

const Navbar = () => {
  const { user, logout } = useUser();
  const username = user?.email?.split('@')[0] ?? '';

  return (
    <nav className="bg-gray300 fixed flex h-[60px] w-full justify-between gap-5 px-5 py-2.5">
      <Link to={'/'} className="text-pink100 flex items-center font-bold">
        YOONPLAY
      </Link>
      {user ? (
        <div className="flex min-w-20 items-center gap-4">
          <span className="truncate font-bold">{username}님 반갑습니다.</span>
          <button
            onClick={logout}
            className="hover:bg-pink100 truncate rounded-md p-2.5 text-center text-sm"
          >
            로그아웃
          </button>
        </div>
      ) : (
        <div className="flex min-w-20 items-center gap-4">
          {['/login', '/signup'].map((path, index) => (
            <Link
              key={index}
              to={path}
              className="hover:bg-pink100 truncate rounded-md p-2.5 text-center text-sm"
            >
              {path === '/login' ? '로그인' : '회원가입'}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
