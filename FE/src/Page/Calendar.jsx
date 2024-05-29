/** @format */
import { RenToCar, HeroRentCar, RentCarBlog } from "../components";
import { motion } from "framer-motion";
const Calendar = () => {
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mercedes-Benz G63 AMG 2023
                </th>
                <td class="px-6 py-4">
                    27/02/2024 - 28/02/2024
                </td>
                  <td class="px-6 py-4">
                    7 ngày
                </td>
                <td class="px-6 py-4">
                    390.000
                </td>
                
                <td class="px-6 py-4">
                    Đang cho thuê
                </td>
                  <td class="px-6 py-4">
                    350.000
                </td>
                <td class="px-6 py-4 ">
                    <button className=" underline text-primary">Huỷ</button>
                </td>
            </tr>
           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mercedes-Benz G63 AMG 2023
                </th>
                <td class="px-6 py-4">
                    27/02/2024 - 28/02/2024
                </td>
                    <td class="px-6 py-4">
                    7 ngày
                </td>
                <td class="px-6 py-4">
                    390.000
                </td>
                <td class="px-6 py-4">
                    Đang cho thuê
                </td>
                  <td class="px-6 py-4">
                    350.000
                </td>
                 <td class="px-6 py-4 ">
                    <button className=" underline text-primary">Huỷ</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mercedes-Benz G63 AMG 2023
                </th>
                <td class="px-6 py-4">
                    27/02/2024 - 28/02/2024
                </td>
                    <td class="px-6 py-4">
                    7 ngày
                </td>
                <td class="px-6 py-4">
                    390.000
                </td>
                <td class="px-6 py-4">
                    Đang cho thuê
                </td>
                  <td class="px-6 py-4">
                    350.000
                </td>
                 <td class="px-6 py-4 ">
                    <button className=" underline text-primary">Huỷ</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

       </motion.section >
    </>
  );
};
export default Calendar;
