/** @format */
import logo from "../assets/rentocar.svg";
import { Link } from "react-router-dom";
const NavBar = ({Openlogin,OpenRegister}) => {
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
        <div className=" flex justify-between space-x-6  ">
            <button className=" font-manrope font-bold text-sm" onClick={OpenRegister}>Đăng kí</button>
            <button className=" font-manrope font-bold text-sm border px-6 py-3 rounded-lg border-black " onClick={Openlogin}>Đăng nhập</button>
        </div>
      </div>
      </div>
    </section>
  );
};
export default NavBar;
