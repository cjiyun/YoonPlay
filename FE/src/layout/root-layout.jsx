import { Outlet } from 'react-router-dom';
import Navbar from '../components/main/Navbar';
import Sidebar from '../components/main/Sidebar';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen w-screen flex-row">
        <Sidebar />
        <div className="main-content fixed top-[60px] right-0 bottom-0 left-[clamp(120px,11vw,11vw)] overflow-auto p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
