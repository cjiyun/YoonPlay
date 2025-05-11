import { Link } from "react-router-dom";
import styled from "styled-components";
import '../css/navbar.css';

const Navbar = () => {
  return (
    <Nav>
      <Logo to={'/'}>YOONCHA</Logo>
      <div className='authBtnContainer'>
        <AuthBtn to={'/login'}>로그인</AuthBtn>
        <AuthBtn to={'/signup'}>회원가입</AuthBtn>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: 100;
  width: calc(100% - 20px);
  height: 40px;
  background-color: #2b2b2b;
  padding: 10px;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: #ff1161;
  padding: 10px;
`

const AuthBtn = styled(Link)`
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #2b2b2b;
  font-size: small;
  text-decoration: none;
  color: white;
  padding: 10px;
  margin-left: 10px;
  &:hover {
    background-color: #ff1161;
  }
`

export default Navbar;