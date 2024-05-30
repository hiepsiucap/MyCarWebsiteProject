
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
const ComplainCheck = () => {
  const [data, changedata]= useState(null);
  const [reload, changereload]= useState("");
  useEffect(()=>{
    const getData=async()=>{
    const responsedata= await getRequest("http://localhost:8080/reports/staff");
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
    const responsedata= await patchRequest(`http://localhost:8080/rentals/${e.target.id}/reports?status=complete`,{});
   if(responsedata.error)
        {
            return Swal.fire({
        title: "Xác nhận xử lý khiếu nại thất bại",
        text: responsedata.message,
        icon: "error"
      });
        }
      Swal.fire({
        title: "Xác nhận xử lý khiếu nại thành công",
        icon: "success"
      });
      changereload(e.target.id);
  }
    
  console.log(data);
  return (
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" w-full">
     <h1 className=" text-3xl font-manrope font-bold text-start pb-5">Khiếu nại khách hàng</h1>
     <div className=" flex flex-col space-y-5 w-full">
       {data?.map((d)=>
       {
        return (
            <>
        <div className=" p-5 pb-5 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 flex space-x-5 border-r-2 border-primary  ">
                <div className=" flex flex-col space-y-2 border-r-2 w-1/2 border-primary ">
                   <h5 className=" text-start font-bold font-manrope ">Thông tin đơn thuê</h5>
                      <div className=" text-sm text-gray-600 font-manrope text-start">Ngày nhận: {d.rental.pickUpHours}, {formatDate(d.rental.pickUpDate)}</div>
                      <div className=" text-sm text-gray-600 font-manrope text-start ">Ngày trả: {d.rental.dropOffHours}, {formatDate(d.rental.dropOffDate)} </div>
                    <h5 className="  text-sm font-manrope text-gray-600 text-start">Địa chỉ: {d.carDTO.address}, {d.carDTO.district}, {d.carDTO.province}</h5>
                     <h5 className=" text-sm font-manrope text-gray-600 text-start">Tên xe : {d.carDTO.name}</h5>
                </div>
               
                   <div className=" flex flex-col space-y-2">
                 
                          <h5 className=" text-start font-bold font-manrope ">Nội dung khiếu nại</h5>
                          <h5 className=" text-gray-500 text-sm font-manrope text-start">mã số : {d.report.reportId}</h5>
                           <h5 className=" text-gray-500 text-sm font-manrope text-start">Nội dung: {d.report.details}</h5>
                            <h5 className=" text-gray-500 text-sm font-manrope text-start">Ngày khiếu nại: {formatDate(d.report.date)}</h5>
                   </div>
                
          
            </div>
               <div className=" flex flex-col justify-center items-center w-1/4 space-y-2">
                 <div className=" text-2xl font-bold text-primary font-manrope text-start">{d.report.state==="complete" ? "Đã hoàn thành" : "Đang xử lý"}</div>
                <div className=" text-sm text-gray-600 font-manrope text-start">Khách hàng: {d.rental.user.firstName} {d.rental.user.lastName}</div>
                      <div className=" text-sm text-black font-bold font-manrope text-start ">Số điện thoại: {d.rental.user.phoneNumber}</div>
                 <button disabled id={d.rental.rentalId} className=" w-44 p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium" onClick={onclickHandler}>Chi tiết khách hàng</button> 
                 <button id={d.report.reportId} className=" w-44 p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium" onClick={onclickHandler}>Đã xử lý</button> 
                    
        </div>
                </div>
                </>
        )})}
     </div>
    </motion.section>
  );
};
export default ComplainCheck;
