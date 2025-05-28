import { Link } from "react-router-dom";

const Menu = ({ path, text, icon }) => {
  return (
    <Link
      to={path}
      className="flex items-center gap-3 px-5 text-sm"
    >
      {icon}
      <p>{text}</p>
    </Link>
  )
}

export default Menu;