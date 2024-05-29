
import detail1 from "../assets/detail1.png"
import start from "../assets/start.svg"
import discount from "../assets/discount.svg"
import diadiem from "../assets/diadiem.svg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { mcdata } from "../Utiliz/Constants"
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
import { useState, useEffect } from "react"
import { getRequest, patchRequest } from "../Utiliz/services"
import 'sweetalert2/src/sweetalert2.scss'
const MyCar = () => {
    const [cardata, changecardata]= useState(null);
  useEffect(()=>{
    const getData=async()=>{
    const responsedata= await getRequest("http://localhost:8080/api/cars/mycar");
    if(responsedata.error)
      {
        console.log(responsedata.message);
      } 
      else
      {
         changecardata(responsedata);
      }
    }
    getData();
  },[])
  console.log(cardata);
  const  onClickHandler=async(e)=>{
  Swal.fire({
  title: 'Chắc chắn bạn muốn dừng cho thuê ?',
  showDenyButton: true,
    icon: "warning",
  confirmButtonText: "Chắc chắn",
  denyButtonText: 'Tiếp tục cho thuê',
  customClass: {
    actions: 'my-actions',
    cancelButton: 'order-1 right-gap',
    confirmButton: 'order-2',
    denyButton: 'order-3',
  },
}).then(async(result) => {
  if (result.isConfirmed) {
     const response=  await patchRequest(`http://localhost:8080/api/cars/${e.target.id}`,{status: "pause"})
     if(response.error)
      {
     return Swal.fire('Dừng cho thuê không thành công!', '', 'error')
      }
      changecardata((cardata)=>{
        return cardata?.map((car)=>{
        if(car.carId== e.target.id)
          {
          car.status="pause";
          }
        return car;
      })
      })
      
    Swal.fire('Dừng cho thuê thành công!', '', 'success')
  } 
})
 }
  const  onClickOpenHandler=async(e)=>{
  Swal.fire({
  title: 'Chắc chắn bạn muốn tiếp tục cho thuê ?',
  showDenyButton: true,
    icon: "warning",
  confirmButtonText: "Chắc chắn",
  denyButtonText: 'tiếp tục dừng cho thuê',
  customClass: {
    actions: 'my-actions',
    cancelButton: 'order-1 right-gap',
    confirmButton: 'order-2',
    denyButton: 'order-3',
  },
}).then(async(result) => {
  if (result.isConfirmed) {
     const response=  await patchRequest(`http://localhost:8080/api/cars/${e.target.id}`,{status: "active"})
     if(response.error)
      {
     return Swal.fire('Dừng cho thuê không thành công!', '', 'error')
      }
      changecardata((cardata)=>{
        return cardata?.map((car)=>{
        if(car.carId== e.target.id)
          {
          car.status="active";
          }
        return car;
      })
      })
      
    Swal.fire('Dừng cho thuê thành công!', '', 'success')
  } 
})
 }
  return (
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" w-full">
    <div className=" justify-between flex items-center pb-5"> <h1 className=" text-3xl font-manrope font-bold text-start pb-5">Xe của tôi <span className=" text-primary font-4xl">({cardata?.length})</span></h1> <Link to="/registercar" className="  px-5 py-3 font-manrope font-medium text-white  bg-primary rounded-lg">Đăng kí xe mới</Link></div> 
     <div className=" flex flex-col space-y-5 w-full">
        {cardata?.map((car)=> 
        {
            return  (
                <>
                <div className=" p-5 pb-10 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 flex  space-x-5 border-r-2 border-primary border-opacity-40 ">
                 <div className=" w-10/12 h-56">
                <img src={car.images[0]?.image} alt="" className=" h-56 rounded-lg" />
                </div>
                <div className=" flex flex-col space-y-2 w-full">
                    <div className=" flex space-x-2 w-full">
    
                        <div className=" rounded-2xl px-2 py-1 bg-background font-manrope text-sm">{car.gear === "Tu dong" ? "Tự động" : "Số sàn"}</div>
                         <div className=" rounded-2xl px-2 py-1 bg-background font-manrope text-sm">Giao xe tận nơi</div>
                    </div>
                    <h5 className=" font-manrope font-bold text-start text-lg">{car.brand} {car.model} {car.year}</h5>
                     <div className=" flex space-x-1">
                          <img src={start} alt="" />
                          <p className=" text-gray-500 text-sm font-manrope pr-2">{car.numberOfReview}</p>
                          <img src={discount} className=" w-4" alt="" />
                            <p className=" text-gray-500 text-sm font-manrope pr-2">{car.numberOfRental} chuyến</p>
                     </div>
                         <div className=" flex space-x-1">
                          <img src={diadiem} alt="" />
                          <p className=" text-gray-500 text-sm font-manrope pr-2">{car.location.district}, {car.location.province}</p>
                     </div>
                </div>
            </div>
               <div className=" flex flex-col justify-center items-center w-1/4 space-y-2.5">
              <h5 className=" text-2xl font-manrope font-bold text-primary pb-3">{!car.status && "Đang xét duyệt"} {car.status == "active" && "Đang cho thuê" }  <span className=" text-red-600">{car.status == "pause" && "Dừng cho thuê"} {car.status == "pending" && "Đăng kí thất bại"}</span></h5>
                 <Link to="/updatecar/1" className=" p-2.5 px-5 bg-primary  rounded-md font-manrope text-white text-sm font-medium">cập nhật thông tin </Link> 
                                   {
                                    car.status == "pause" &&
                                  <button id={car.carId} className=" p-2 px-6 border border-primary rounded-md font-manrope  text-sm font-medium"onClick={onClickOpenHandler}>Tiếp tục cho thuê</button> 
                                   }
                                  { car.status == "active" &&        
                                  <button id={car.carId} className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium"onClick={onClickHandler}>Dừng cho thuê</button> 
                                  }
                                   
                                              <Link to={`/calendar/${car.carId}`} className=" p-2 px-9 border border-primary rounded-md font-manrope  text-sm font-medium">Lịch cho thuê</Link> 
        </div>
                </div>
                </>
            )
})}
     </div>
    </motion.section>
  );
};
export default MyCar;
