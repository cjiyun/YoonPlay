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
        <div className="main-content">
          <Outlet />
        </div>
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

export default RootLayout;