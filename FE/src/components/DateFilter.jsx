import { useState } from "react";
import { motion } from "framer-motion";
import { addDays } from "date-fns";
import { TimeNow } from "../Utiliz/Constants";
import { time } from "../Utiliz/Constants";
import { tinhSoNgay } from "../Utiliz/Constants";
import DatePicker from "react-datepicker";
import vi from 'date-fns/locale/vi'
import "react-datepicker/dist/react-datepicker.css";

const DateFilter =({close})=>
{
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return(
<motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className="bg-white rounded-xl py-6 mx-auto w-3/4 flex space-y-2 pb-12 flex-col items-center">
             <h5 className=" font-manrope text-2xl font-bold pb-4 text-center">Chọn ngày thuê</h5>
         <div className="py-6">
        <DatePicker
          className="custom-datepicker"
          selected={startDate} 
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
          selectsRange
          locale={vi} 
          minDate={new Date()}
          monthsShown={2} // Display two months
          selectsDisabledDaysInRange
          inline
        />
        </div>
        <div className=" font-manrope font-medium justify-start flex space-x-5 pb-6 w-full px-10 ">
        <p className=" border py-4 px-3 text-start border-gray-400 rounded-md w-1/2 flex flex-col space-y-2">  
         <p className=" text-sm ">Ngày thuê:</p> 
         <p>{startDate?.getDate() <10 &&0}{startDate?.getDate()}/{startDate?.getMonth() <10 && 0 }{startDate?.getMonth()}/{startDate?.getFullYear()} &nbsp;</p>
         </p>
        <p className=" border py-4 px-3 text-start border-gray-400 rounded-md w-1/2 flex flex-col space-y-2"><p className=" text-sm">Ngày trả:</p> <p> {endDate?.getDate() <10 && 0 }{endDate?.getDate()}/{endDate?.getMonth() <10 && 0 }{endDate?.getMonth()}/{endDate?.getFullYear()} &nbsp; </p></p>

        </div>
        <button className=" font-bold w-1/2 font-manrope font-lg py-3 px-4 bg-primary text-white rounded-md" onClick={close}>Xác nhận</button>
          </motion.div>)
}
export default DateFilter