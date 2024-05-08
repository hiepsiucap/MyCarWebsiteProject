/** @format */
import soghe from "../assets/soghe.svg"
import car from "../assets/car.svg"
import rent from "../assets/rent.svg"
import heart from "../assets/heart.svg"
import tien from "../assets/tien.svg"
import Swal from 'sweetalert2'
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"
const AccountSideBar = () => {
    const url =useLocation();
    console.log(url.pathname);
    const onClickHandler =()=>{
        Swal.fire({
  title: "Bạn có muốn đăng xuất?",
  text: "Tất cả các trang làm việc đều đăng xuất",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#04ABFF",
  cancelButtonColor: "#d33",
  confirmButtonText: "Đăng xuất"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Đăng xuất thành công!",
      text: "Tài khoản của bạn đã được đăng xuất",
      icon: "success"
    });
  }
});
    }
  return (
    <motion.section   initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className="w-1/3">
     <h1 className=" text-3xl font-bold font-manrope text-start ">Xin chào bạn!  </h1>
          <div className=" flex flex-col pt-5 w-10/12">
            <Link to="/user/account" className=" flex space-x-4 items-center  py-4  border-t border-gray-200 text-gray-700">
                <img src={soghe}  className={url.pathname==="/user/account"? " w-8 h-8 border-l-2 border-primary scale-125 pl-2 py-1" :" w-8 border-l-2 border-slate-50 scale-125 pl-2 py-1"} alt="" />
                <div className={url.pathname==="/user/account" ?" font-manrope font-bold": " font-manrope font-medium"}>Thông tin cá nhân</div>
            </Link>
           <Link to="/user/favouritecar" className=" flex space-x-4 items-center  py-4  border-t border-gray-200 text-gray-700">
                <img src={heart}  className={url.pathname==="/user/favouritecar"? " border-l-2 w-8  h-8 border-primary scale-125 pl-2 py-1" :"border-l-2 w-8 h-8  border-slate-50 scale-125 pl-2 py-1"} alt="" />
                <div className={url.pathname==="/user/favouritecar" ?" font-manrope font-bold": " font-manrope font-medium"}>Xe ưu thích</div>
            </Link >
              <Link to="/user/mycar" className=" flex space-x-4 items-center  py-4  border-t border-gray-200 text-gray-700">
                <img src={car}  className={url.pathname==="/user/mycar"? " border-l-2 border-primary w-8  scale-125 pl-2 py-1" :"border-l-2 w-8  border-slate-50 scale-125 pl-2 py-1"} alt="" />
                <div className={url.pathname==="/user/mycar" ?" font-manrope font-bold": " font-manrope font-medium"}>Xe của tôi</div>
            </Link >
              <Link to="/user/myrentcar" className=" flex space-x-4 items-center  py-4  border-t border-gray-200 text-gray-700">
                <img src={rent}  className={url.pathname==="/user/myrentcar"? " border-l-2 border-primary w-8  scale-125 pl-2 py-1" :"border-l-2 w-8  border-slate-50 scale-125 pl-2 py-1"} alt="" />
                <div className={url.pathname==="/user/myrentcar" ?" font-manrope font-bold": " font-manrope font-medium"}>Xe đang thuê</div>
            </Link >
                <Link to="/user/revenue" className=" flex space-x-4 items-center  py-4  border-t border-gray-200 text-gray-700">
                <img src={tien}  className={url.pathname==="/user/revenue"? " border-l-2 border-primary w-8  scale-125 pl-2 py-1" :"border-l-2 w-8  border-slate-50 scale-125 pl-2 py-1"} alt="" />
                <div className={url.pathname==="/user/revenue" ?" font-manrope font-bold": " font-manrope font-medium"}>Quản lý tài chính</div>
            </Link >
             <div className=" flex space-x-4 items-center  py-5 px-3 border-t border-gray-200 text-gray-700">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04ABFF" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>

                <div className=" font-manrope font-medium" onClick={onClickHandler}>Đăng xuất</div>
            </div>
          </div>
    </motion.section>
  );
};
export default AccountSideBar;