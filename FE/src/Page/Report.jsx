
import detail1 from "../assets/detail1.png"
import start from "../assets/start.svg"
import discount from "../assets/discount.svg"
import diadiem from "../assets/diadiem.svg"
import { motion } from "framer-motion"
import { favouritecar, formatDate, formatPrice } from "../Utiliz/Constants"
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useEffect, useState } from "react"
import { getRequest, patchRequest, postRequest } from "../Utiliz/services"
const Report = () => {
  const [data, changedata]= useState(null);
  const [reload, changereload]= useState("");
  useEffect(()=>{
    const getData=async()=>{
    const responsedata= await getRequest("http://localhost:8080/rentals/staff");
    if(responsedata.error)
      {
        console.log(responsedata.message);
      } 
      else
      {
         changedata(responsedata);
      }
    }
     getData();
  },[reload])
  const onclickHandler =async(e)=>{
    const responsedata= await patchRequest(`http://localhost:8080/rentals/${e.target.id}?status=confirmed`,{});
   if(responsedata.error)
        {
            return Swal.fire({
        title: "Huỷ Xác nhận thất bại",
        text: responsedata.message,
        icon: "error"
      });
        }
      Swal.fire({
        title: "Xác nhận đơn hàng thành công",
        icon: "success"
      });
      changereload(e.target.id);
  }
    
  console.log(data);
  return (
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" w-full">
     <h1 className=" text-3xl font-manrope font-bold text-start pb-5">Đơn hàng cần duyệt</h1>
     <div className=" flex flex-col space-y-5 w-full">
       {data?.map((d)=>
       {
        return (
            <>
        <div className=" p-5 pb-5 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 flex space-x-5 border-r-2 border-primary  ">
                <div className=" flex flex-col space-y-2 border-r-2 w-1/2 border-primary ">
                   <h5 className=" text-start font-bold font-manrope ">{d.carDTO.name}</h5>
                    <h5 className=" text-gray-500 text-sm font-manrope text-start">Số ghế: {d.carDTO.seat}</h5>
                     <h5 className=" text-gray-500 text-sm font-manrope text-start">Hộp số: {d.carDTO.gear ==="Tu dong" ? "Tự động" : "số sàn"}</h5>
                    <h5 className=" text-gray-500 text-sm font-manrope text-start">Địa chỉ: {d.carDTO.address}, {d.carDTO.district}, {d.carDTO.province}</h5>
                     <h5 className=" text-gray-500 text-sm font-manrope text-start">Đơn giá : {formatPrice(d.carDTO.cost)} /1 ngày</h5>
                </div>
                <div className=" flex space-x-5 w-1/2 items-center">
                
                  <div>
                   <img src={d.rental.user.avatar} className=" w-16 h-16 rounded-full" alt="" />
                   </div>
                   <div className=" flex flex-col space-y-2">
                 
                          <h5 className=" text-start font-bold font-manrope ">{d.rental.user.firstName} {d.rental.user.lastName}</h5>
                          <h5 className=" text-gray-500 text-sm font-manrope text-start">email: {d.rental.user.email}</h5>
                           <h5 className=" text-gray-500 text-sm font-manrope text-start">Số điện thoại: {d.rental.user.phoneNumber}</h5>
                            <h5 className=" text-gray-500 text-sm font-manrope text-start">Ngày tham gia: {formatDate(d.rental.user.create_date)}</h5>
                   </div>
                
                </div>
            </div>
               <div className=" flex flex-col justify-center items-center w-1/4 space-y-2">
                <div className=" flex space-x-1 items-end pb-3"><h5 className=" text-3xl font-manrope font-bold text-primary"> {formatPrice(d.rental.totalCost)}</h5></div>
                <div className=" text-sm text-gray-600 font-manrope text-start">Ngày nhận: {d.rental.pickUpHours}, {formatDate(d.rental.pickUpDate)}</div>
                   <div className=" text-sm text-gray-600 font-manrope text-start ">Ngày trả: {d.rental.dropOffHours}, {formatDate(d.rental.dropOffDate)} </div>
                      <div className=" text-sm text-black font-bold font-manrope text-start ">Mã đơn hàng : {d.rental.rentalId}</div>
                 <button id={d.rental.rentalId} className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium" onClick={onclickHandler}>Duyệt đơn hàng</button> 
                    
        </div>
                </div>
                </>
        )})}
     </div>
    </motion.section>
  );
};
export default Report;
