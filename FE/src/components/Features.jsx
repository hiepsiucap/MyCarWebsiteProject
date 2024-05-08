/** @format */
import logo from "../assets/rentocar.svg";
import navigate from "../assets/navigate.png"
import phone from "../assets/phone.png"
import heart from "../assets/heart.png"
import file from "../assets/file.png"
import carinsurance from "../assets/carinsurance.png"
import diversity from "../assets/diversity.png"
import { motion } from "framer-motion";
const Features = () => {
  return (
    <motion.div initial={{ opacity: 0, x:-50 }}
        whileInView={{ opacity: 1, x:0}}   transition={{ delay: 0.1, duration: 0.5 }} className="py-24 md:container mx-auto"> 
      <h1 className=" text-4xl font-bold font-manrope">Ưu Điểm Của MyCar</h1>
      <p className=" text-xl w-1/2 mx-auto py-4">Những tính năng giúp bạn dễ dàng hơn khi thuê xe trên Mycar.</p>
       <div  className=" flex justify-between items-center w-10/12 mx-auto space-x-5 pb-16">
        <div className="flex flex-col items-center space-y-2">
            <div className=" flex justify-center items-center">
            <img src={carinsurance} alt="" className="h-60" />
            </div>
            <h5 className=" text-xl font-medium"> Hỗ trợ bảo hiểm sự cố</h5>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <div className=" flex justify-center items-center">
            <img src={heart} alt="" className="h-60 px-4 pt-8" />
            </div>
            <h5 className=" text-xl font-medium"> An tâm đặt xe</h5>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <div className=" flex justify-center items-center">
            <img src={file} alt="" className="h-60 px-4 pt-4 pb-4" />
            </div>
            <h5 className="  text-xl font-medium">Hợp đồng tự động, nhanh chóng</h5>
        </div>
       </div>
       <div className=" flex justify-between items-center w-10/12 mx-auto space-x-5"> 
         <div className="flex flex-col items-center space-y-2">
            <div className=" flex justify-center items-center">
            <img src={phone} alt="" className="h-60 px-4 pt-4 pb-4" />
            </div>
            <h5 className=" text-xl font-medium">Tiết kiệm chi phí</h5>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <div className=" flex justify-center items-center">
            <img src={navigate} alt="" className="h-60 px-4 pt-4 pb-4" />
            </div>
            <h5 className="  text-xl font-medium"> Giao xe tận nơi</h5>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <div className=" flex justify-center items-center">
            <img src={diversity} alt="" className="h-60 px-4 pt-4 pb-4" />
            </div>
            <h5 className=" text-xl font-medium"> Đa dạng chủng loại xe</h5>
        </div>
        </div>
    </motion.div>
  );
};
export default Features;
