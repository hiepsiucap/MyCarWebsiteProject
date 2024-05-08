/** @format */
import totalcar from "../assets/totalcar.svg"
import money from "../assets/money.svg"
import rent from "../assets/rent.svg"
import ApexChart from "../Utiliz/ApexChart";
import LineApexChart from "../Utiliz/LineApexChart";
import BarChart from "../Utiliz/BarChart";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
const Revenue = () => {
  const Number = ({n})=> {
      const {number} = useSpring({
        from: {number: 0},
        number: n,
        delay: 100,
        config: {mass:1, tension:20, friction:10}
      })
      return <animated.div className=" font-manrope font-bold text-2xl text-primary">{number.to((n)=> n.toFixed(0))}</animated.div>
  }
  return (
    <>
       <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" w-full">
         <h5 className=" font-manrope text-3xl  font-bold text-start pb-10">Quản lý tài chính</h5>
        <div className=" flex justify-center space-x-10 w-full">
             <div className=" bg-white w-1/4 flex p-5 space-x-5  rounded-lg border border-primary border-opacity-50 ">
                <img src={totalcar} alt="" className=" w-12 h-12" /> 
                <div className=" flex flex-col  items-start"> 
                <div className=" font-manrope font-medium text-gray-700 text-sm">Tổng số xe: </div>
               <Number n={70}></Number>
                 </div>
             </div>
              <div className=" bg-white  flex p-5 space-x-5  rounded-lg border border-primary border-opacity-50 ">
                <img src={money} alt="" className=" w-12 h-12" /> 
                <div className=" flex flex-col  items-start"> 
                <div className=" font-manrope font-medium text-gray-700 text-sm">Tổng doanh thu: </div>
                <Number n={200000}></Number>
                 </div>
             </div>
              <div className=" bg-white  flex p-5 space-x-5 rounded-lg border border-primary border-opacity-50 ">
                <img src={rent} alt="" className=" w-12 h-12" /> 
                <div className=" flex flex-col  items-start"> 
                <div className=" font-manrope font-medium text-gray-700 text-sm">Tổng số lượt cho thuê: </div>
                 <Number n={1800}></Number>
                 </div>
             </div>
        </div>
        <div className=" flex flex-col items-center space-y-8 pt-16">
            <h5 className=" font-manrope text-2xl font-bold">Doanh thu theo tháng (triệu đồng)</h5>
            <ApexChart></ApexChart>
            <h5 className=" font-manrope text-2xl font-bold pt-4">Lượt đặt xe theo tháng (lần)</h5>
            <LineApexChart></LineApexChart>
             <h5 className=" font-manrope text-2xl font-bold pt-4">Top xe có doanh thu cao nhất</h5>
            <BarChart></BarChart>
            </div>
       </motion.section>
    </>
  );
};
export default Revenue;
