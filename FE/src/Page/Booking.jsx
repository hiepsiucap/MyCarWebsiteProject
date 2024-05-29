/** @format */
import { useEffect } from "react";
import { useState } from "react";
import { formatDate, formatPrice } from "../Utiliz/Constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getRequest, postRequest } from "../Utiliz/services";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createarental } from "../features/Rental/RentalSlice";
const Booking = () => {
     const { userInfo } = useSelector(
    (state) => state.auth
  )
     const { rentalinfo,carinfo } = useSelector(
    (state) => state.rental
  )
  const dispatch=useDispatch();
  const navigate= useNavigate();
  const SubmitHanlder=async()=>{
    const data= {
      pickUpDate: new Date(pickUpDate).toISOString().split('T')[0],
      pickUpHours,
      dropOffDate: new Date(dropOffDate).toISOString().split('T')[0],
      dropOffHours,
      totalCost,
      carId,
    }
    console.log(data);
      const response= await postRequest("http://localhost:8080/rentals", data);
      if(response.error)
        {
           Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: response.messeage,
      icon: "error"});
      console.log(response.message)
        }
        else
        {
          const responsedata= await getRequest(`http://localhost:8080/api/cars/${carId}`);
          if( responsedata.error) 
            {
             Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: responsedata.messeage,
      icon: "error"});
            }
            else
            {
           const rentailid = response.rentalId;
           const car = responsedata;
          dispatch(createarental({rentalinfo: response , carinfo: car}))
          navigate(`/complete/${rentailid}`);
            }    
        }
  }
   const { carId,
      pickUpDate,
      pickUpHours,
      dropOffDate,
      dropOffHours,
      totalCost,
      location,
    } = useSelector((state)=> state.cartcar)
    console.log(userInfo, carId)
    console.log(pickUpDate)
   
  useEffect(() => {
  // Scroll to the top when the component mounts
  window.scrollTo(0, 0);
}, []);
if(!pickUpDate || !dropOffDate || !userInfo)
  return (
<h1 className=" font-bold text-primary text-2xl py-24">Đã xảy ra lỗi, Vui lòng quay lại </h1>)
  return (
    <>
    <motion.section initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className=" bg-slate-50 py-12 ">
      <Link to="/" className=" flex space-x-2 w-1/2 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>
        <p className=" text-gray-700 font-manrope pb-6 ">Quay lại</p>
      </Link>
      <div className=" w-1/2 mx-auto bg-white rounded-md shadow-md p-5">
           <h5 className=" font-manrope text-lg font-bold">Thông tin liên hệ</h5>
           <p className=" text-xs text-gray-500 pt-2 ">Vui lòng để lại thông tin liên lạc. Chúng tôi sẽ liên hệ bạn sớm nhất</p>
          <form className=" grid grid-cols-2 gap-x-5 gap-y-2 py-6">
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Số điện thoại:</label>
             <input type="text" disabled value={userInfo.phoneNumber} id="pn" name="fname" className="px-1 py-2.5 border border-slate-300 w-full rounded-lg"/>
            </div>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Họ và tên:</label>
             <input type="text" disabled id="pn" value={`${userInfo.firstName} ${userInfo.lastName}`} name="fname" className="px-1 py-2.5 border border-slate-300 w-full rounded-lg"/>
            </div>
           
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Email:</label>
             <input type="text" disabled id="pn" name="fname" value={userInfo.email} className="px-1 py-2.5 border border-slate-300 w-full rounded-lg"/>
            </div>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Địa chỉ:</label>
             <input type="text" disabled id="pn" name="fname" className="px-1 py-2.5 border border-slate-300 w-full rounded-lg"/>
            </div>
           
           </form>
           <div className="border border-primary border-opacity-40"></div>
           <div className=" flex flex-col space-y-6 pt-6">
           <div className="  text-lg text-start font-bold font-manrope">Thông tin đơn hàng</div>
           <div className=" flex space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04ABFF" class="w-10 h-10 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
               <div className=" flex flex-col text-start space-y-1">
                  <p className=" text-xs text-gray-500 font-manrope">thời gian thuê</p>
                   <p className=" font-manrope  font-bold">{pickUpHours +", "}  {pickUpDate?.getDate()<10 &&0}{pickUpDate?.getDate()}/{pickUpDate?.getMonth()<10 && 0}{pickUpDate?.getMonth()+1}/{pickUpDate?.getFullYear()<10 && 0}{pickUpDate?.getFullYear()} - { dropOffHours+", "}  {dropOffDate?.getDate()<10 && 0}{dropOffDate?.getDate()||0}/{dropOffDate?.getMonth()<10 && 0}{dropOffDate?.getMonth()+1 || 0}/{dropOffDate?.getFullYear()} </p>
               </div>
           </div>
            <div className=" flex space-x-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04ABFF" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

               <div className=" flex flex-col text-start space-y-1">
                  <p className=" text-xs text-gray-500 font-manrope">Địa điểm nhận xe</p>
                   <p className=" font-manrope  font-bold">{location}</p>
               </div>
           </div>
           </div>
           <div className=" flex flex-col pt-8 space-y-4">
             <p className=" font-bold  font-manrope flex justify-between">
                <p>Phí thuê xe</p>
                <p>{formatPrice(totalCost)}</p>
             </p>
             <div className=" border"></div>
             <p className=" font-bold  font-manrope flex justify-between">
                <p>Khuyến mãi</p>
                <p className=" text-red-600">-{formatPrice(0)}</p>
             </p>
              <div className=" border"></div>
                <p className=" font-bold  font-manrope flex justify-between">
                <p>Thuế VAT</p>
                <p className=" text">{formatPrice(0)}</p>
             </p>
             <p className=" font-bold  font-manrope flex justify-between py-6">
                <p>Tổng cổng</p>
                <p className=" text">{formatPrice(totalCost)}</p>
             </p>
           </div>
           <div className=" w-full flex pt-6">
           <button className=" font-manrope bg-primary text-lg w-full text-white p-2 font-bold rounded-md " onClick={SubmitHanlder}>Xác nhận</button>
           </div>
      </div>
    </motion.section>
    </>
  );
};
export default Booking;
