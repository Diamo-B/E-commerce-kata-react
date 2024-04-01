import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const FullPageLayout= () => {
  return (
    <div 
      className="w-full flex flex-col h-dvh"
      data-theme="nord"
    >
      <Navbar />
      <div className="flex-1">
        <Outlet/>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default FullPageLayout;