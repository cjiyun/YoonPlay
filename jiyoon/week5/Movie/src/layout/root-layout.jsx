import { Outlet } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import Sidebar from "../components/main/Sidebar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-row w-screen h-screen'>
        <Sidebar />
        <div className="fixed overflow-auto top-[60px] p-5
          right-0 bottom-0 left-[clamp(120px,11vw,11vw)] main-content"
        >
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default RootLayout;