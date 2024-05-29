/** @format */
import carrent from "../assets/carrent.png"
import phonecall from "../assets/phonecall.png"
import imagegallery from "../assets/imagegallery.png"
import registercar from "../assets/registercar.jpg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const RegisterCar = () => {
  return (
    <motion.section   initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" flex flex-col items-center space-y-2  py-12">
        <h1 className=" text-4xl font-manrope font-bold">Đăng ký xe</h1>
        <img src={registercar} alt="" className="w-1/4" />
        <Link to="/registercarform" className=" font-manrope py-3 px-8 bg-primary text-white font-bold rounded-md">Đăng kí xe tự lái</Link>
         <p className=" font-manrope font-medium text-xl pt-5 pb-10">Gia tăng thu nhập từ 5-12 tr/tháng cùng MyCar</p>
         <div className=" border  px-4 py-6 rounded-lg ">
               <p className=" font-manrope font-bold">
Thủ tục đăng ký 4 bước đơn giản & nhanh chóng:</p>
               <div className=" flex flex-col space-y-4 pt-3">
                 <div className=" flex items-center space-x-2">
                    <img src={carrent} alt="" className=" w-6 h-6" />
                    <p className=" text-sm font-manrope">Điền thông tin xe</p>
                 </div>
                   <div className=" flex items-center space-x-2">
                    <img src={phonecall} alt="" className=" w-6 h-6" />
                    <p className=" text-sm font-manrope">Tải hình ảnh xe</p>
                 </div>
                   <div className=" flex items-center space-x-2">
                    <img src={imagegallery} alt="" className=" w-6 h-6" />
                    <p className=" text-sm font-manrope">Mycar tư vấn chủ xe và phê duyệt</p>
                 </div>
                   <div className=" flex items-center space-x-2">
                    <img src={carrent} alt="" className=" w-6 h-6" />
                    <p className=" text-sm font-manrope">Bắt đầu cho thuê</p>
                 </div>
               </div>
         </div>
    </motion.section>
  );
};
export default RegisterCar;
