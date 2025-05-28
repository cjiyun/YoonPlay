import Menu from "./Menu";
import {BiSearchAlt2, BiSolidMoviePlay} from "react-icons/bi";

const MENU_LIST = [
  { path: '/search', text: '찾기', icon: <BiSearchAlt2 /> },
  { path: '/movies', text: '영화', icon: <BiSolidMoviePlay /> },
]

const Sidebar = () => {
  return (
    <nav className="flex flex-col fixed top-[60px] w-[11vw] min-w-[120px] h-screen bg-gray200 gap-3">
      {MENU_LIST.map(item => (
        <Menu key={item.path} {...item} />
      ))}
    </nav>
  )
}

export default Sidebar;