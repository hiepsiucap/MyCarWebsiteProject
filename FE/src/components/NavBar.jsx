/** @format */
import logo from "../assets/rentocar.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = ({Openlogin,OpenRegister}) => {
    const { userInfo } = useSelector(
    (state) => state.auth
  )
  return (

    <section className=" md:container mx-auto ">
    <div className=" flex justify-between items-center">
        <Link to="/">
      <img src={logo} alt="" className="w-36" />
      </Link>
      <div className=" flex  justify-between space-x-8 items-center">
        <div className=" flex space-x-6  border-r border-gray-300 py-1 pr-4 ">
            <Link to="/howtorent" className=" font-manrope font-bold text-sm">Hướng dẫn thuê xe</Link>
            <Link to="/registercar" className=" font-manrope font-bold text-sm">Trở thành chủ xe</Link>
        </div>
         { !userInfo?.firstName || !userInfo?.avatar ?
        <div className=" flex justify-between space-x-6  ">
          <>
            <button className=" font-manrope font-bold text-sm" onClick={OpenRegister}>Đăng kí</button>
            <button className=" font-manrope font-bold text-sm border px-6 py-3 rounded-lg border-black " onClick={Openlogin}>Đăng nhập</button>
          </> 
          </div> :
   
          <Link to="/user/account" className=" flex space-x-1 items-center justify-end">
           <img src={userInfo.avatar} alt="" className=" w-12 h-12 rounded-full" />
            <h5 className=" font-manrope font-bold pr-2 pl-1 ">{userInfo.firstName}</h5>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

           </Link>
          }
        </div>
      </div>
     
    </section>
  );
};
export default NavBar;
