import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt2, BiSolidMoviePlay } from "react-icons/bi";

const Sidebar = () => {
  return (
    <Nav>
      <Menu to={'/search'}>
        <BiSearchAlt2 />
        <p>찾기</p>
      </Menu>
      <Menu to={'/movies'}>
        <BiSolidMoviePlay />
        <p>영화</p>
      </Menu>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 60px;
  flex-direction: column;
  width: 10vw;
  min-width: 90px;
  height: 100%;
  color: white;
  background-color: #2b2b2b;
`
const Menu = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 20px;
  font-size: small;
  text-decoration: none;
  color: white;
`

export default Sidebar;