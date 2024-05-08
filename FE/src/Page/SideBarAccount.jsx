import { AccountSideBar } from "../components";
import { Outlet } from "react-router-dom";
const SideBarAccountLayout = () => {
  return (
    <section className=" bg-slate-50">
     <div className="flex space-x-2  md:container mx-auto py-12">
        <AccountSideBar></AccountSideBar>
        <Outlet></Outlet>
     </div>
    </section>
  );
};
export default SideBarAccountLayout;