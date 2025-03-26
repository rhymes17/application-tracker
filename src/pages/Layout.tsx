import { Outlet } from 'react-router';
import MobileNavbar from '../components/MobileNavbar';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <div className="bg-showcase-bg relative h-[100vh] min-w-[100vw] p-2 xl:p-4 2xl:p-10">
      <div className="bg-sidebar-bg grid h-full grid-cols-6 rounded-xl md:p-2 lg:grid-cols-6">
        <div className="bg-sidebar-bg hidden rounded-xl text-white md:col-span-2 md:block lg:col-span-1">
          <Sidebar />
        </div>
        <div className="bg-primary-bg relative col-span-6 h-full w-full overflow-y-auto rounded-md md:col-span-4 lg:col-span-5">
          <Outlet />
        </div>
      </div>
      <div className="fixed right-0 bottom-10 left-0 mx-auto w-[30%] border-2 md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Layout;
