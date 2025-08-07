import Menu from '@/components/main/Menu';
import { BiSearchAlt2, BiSolidMoviePlay } from 'react-icons/bi';

const MENU_LIST = [
  { path: '/search', text: '찾기', icon: <BiSearchAlt2 /> },
  { path: '/movies', text: '영화', icon: <BiSolidMoviePlay /> },
];

const Sidebar = () => {
  return (
    <nav className="bg-gray300 fixed top-[60px] flex h-screen w-[11vw] min-w-[120px] flex-col gap-3">
      {MENU_LIST.map(item => (
        <Menu key={item.path} {...item} />
      ))}
    </nav>
  );
};

export default Sidebar;
