/** @format */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getRequest } from "../Utiliz/services";
import { formatPrice } from "../Utiliz/Constants";
import { useParams } from "react-router";
const Calendar = () => {
    const {id}= useParams();
       const [cardata, changecardata]= useState(null);
       console.log(cardata);
  useEffect(()=>{
    const getData=async()=>{
    const responsedata= await getRequest(`http://localhost:8080/users/cars/${id}/history`);
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
  
  return (
    <>
    <motion.section initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className=" px-12 py-12 ">
       <h1 className=" text-4xl font-manrope font-bold">Lịch cho thuê</h1>

  <div className=" grid-cols-4">
    
  </div>
<div class="relative overflow-x-auto font-manrope pt-12">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr  className="">
                <th scope="col" class="px-6 py-3">
                    Tên xe
                </th>
                <th scope="col" class="px-6 py-3">
                    Ngày thuê
                </th>
                 <th scope="col" class="px-6 py-3">
                    Số ngày thuê
                </th>
                <th scope="col" class="px-6 py-3">
                    Đơn giá
                </th>
                <th scope="col" class="px-6 py-3">
                   Trạng thái
                </th>
                <th scope="col" class="px-6 py-3">
                    Tiền thu được
                </th>
                 <th scope="col" class="px-6 py-3">
                    Cập nhật
                </th>
            </tr>
        </thead>
        <tbody>
            {cardata?.length>0 && cardata.map((car)=>{
                return(
 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={cardata.carId}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {car.name}
                </th>
                <td className="px-6 py-4">
                    {car.rentalDate}
                </td>
                  <td className="px-6 py-4">
                    {car.totalDay}
                </td>
                <td className="px-6 py-4">
                    {formatPrice(car.totalCost)}
                </td>
                
                <td className="px-6 py-4">
                    {car.rentalStatus ==="completed" && "Hoàn thành"  } {car.rentalStatus ==="confirmed" && "Đang cho thuê"  } {car.rentalStatus ==="pause" && "Ngưng cho thuê"  }
                </td>
                  <td className="px-6 py-4">
                    {formatPrice(car.totalCost*0.6)}
                </td>
                <td className="px-6 py-4 ">
                    <button className=" underline text-primary">Huỷ</button>
                </td>
            </tr>)
            })
        }
         
        </tbody>
    </table>
</div>

       </motion.section >
    </>
  );
};
export default Calendar;
