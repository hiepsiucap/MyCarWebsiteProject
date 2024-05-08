/** @format */
import logo from "../assets/rentocar.svg";
import step1 from "../assets/taixe.png";
import step2 from "../assets/xedienthoai.png";
import step3 from "../assets/taixe2.png";
import step4 from "../assets/nguoicamns.png";
import { motion } from "framer-motion";
const RenToCar = () => {
  return (
    <section className=" md:container mx-auto my-24">
      <motion.h1  initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" text-4xl font-bold font-manrope">Hướng Dẫn Thuê Xe</motion.h1>
      <motion.p initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" text-xl w-1/2 mx-auto py-4">Chỉ với 4 bước đơn giản để trải nghiệm thuê xe 
một cách nhanh chóng.</motion.p>
       <motion.div  className=" flex pt-16 space-x-16 w-10/12 mx-auto" >
            <motion.div initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" flex flex-col space-y-5">
                <img src={step1} alt="" className=" h-52" />
                <div className=" flex space-x-2 items-start
                 ">
                    <p className=" font-bold text-primary text-xl">01</p>
                    <p className=" font-bold ">Đặt xe trên
Website Mytutor</p>
                 </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" flex flex-col space-y-5">
                <img src={step2} alt="" className=" h-52" />
                <div className=" flex space-x-2 items-start
                 ">
                    <p className=" font-bold text-primary text-xl">02</p>
                    <p className=" font-bold ">Nhận xe</p>
                 </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" flex flex-col space-y-5">
                <img src={step3} alt="" className=" h-52" />
                <div className=" flex space-x-2 items-start
                 ">
                    <p className=" font-bold text-primary text-xl">03</p>
                    <p className=" font-bold ">Bắt đầu hành trình</p>
                 </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" flex flex-col space-y-5">
                <img src={step4} alt="" className=" h-52" />
                <div className=" flex space-x-2 items-start
                 ">
                    <p className=" font-bold text-primary text-xl">04</p>
                    <p className=" font-bold ">Trả xe & kết thúc
chuyến đi</p>
                 </div>
            </motion.div>
       </motion.div>
    </section>
  );
};
export default RenToCar;
