import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`
const Content = styled.div`
  position: absolute;
  left: 150px;
  top: 60px;
  width: calc(100% - 190px);
  padding: 20px;
`

export default RootLayout;