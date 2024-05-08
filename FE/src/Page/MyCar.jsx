
import detail1 from "../assets/detail1.png"
import start from "../assets/start.svg"
import discount from "../assets/discount.svg"
import diadiem from "../assets/diadiem.svg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const MyCar = () => {
  return (
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" w-full">
    <div className=" justify-between flex items-center pb-5"> <h1 className=" text-3xl font-manrope font-bold text-start pb-5">Xe của tôi <span className=" text-primary font-4xl">(17)</span></h1> <Link to="/registercar" className="  px-5 py-3 font-manrope font-medium text-white  bg-primary rounded-lg">Đăng kí xe mới</Link></div> 
     <div className=" flex flex-col space-y-5 w-full">
        <div className=" p-5 pb-10 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 flex items-center space-x-5 border-r-2 border-primary border-opacity-40 ">
                <img src={detail1} alt="" className=" w-80 h-40 rounded-lg" />
                <div className=" flex flex-col space-y-2 w-full">
                    <div className=" flex space-x-2 w-full">
                        <div className=" rounded-2xl px-2 py-1 bg-background font-manrope text-sm"> Số tự động</div>
                         <div className=" rounded-2xl px-2 py-1 bg-background font-manrope text-sm">Giao xe tận nơi</div>
                    </div>
                    <h5 className=" font-manrope font-bold text-start text-lg">Lamborghini Huracan Evo 2021</h5>
                     <div className=" flex space-x-1">
                          <img src={start} alt="" />
                          <p className=" text-gray-500 text-sm font-manrope pr-2">5.0</p>
                          <img src={discount} className=" w-4" alt="" />
                            <p className=" text-gray-500 text-sm font-manrope pr-2">10 chuyến</p>
                     </div>
                         <div className=" flex space-x-1">
                          <img src={diadiem} alt="" />
                          <p className=" text-gray-500 text-sm font-manrope pr-2">Quận Thủ Đức, TP. Hồ Chí Minh</p>
                     </div>
                </div>
            </div>
               <div className=" flex flex-col justify-center items-center w-1/4 space-y-2">
              <h5 className=" text-2xl font-manrope font-bold text-primary pb-3">Đang cho thuê</h5>
                 <div className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium">cập nhật thông tin </div> 
                                  <div className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium">Dừng cho thuê</div> 
                                              <div className=" p-2 px-9 border border-primary rounded-md font-manrope  text-sm font-medium">Lịch cho thuê</div> 
        </div>
                </div>
                <div className=" p-5 pb-10 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 items-center flex space-x-5 border-r-2 border-primary border-opacity-40 ">
                <img src={detail1} alt="" className=" w-80 h-40 rounded-lg" />
                <div className=" flex flex-col space-y-2 w-full">
                    <div className=" flex space-x-2 w-full">
                        <div className=" rounded-2xl px-2 py-1 bg-background font-manrope text-sm"> Số tự động</div>
                         <div className=" rounded-2xl px-2 py-1 bg-background font-manrope text-sm">Giao xe tận nơi</div>
                    </div>
                    <h5 className=" font-manrope font-bold text-start text-lg">Lamborghini Huracan Evo 2021</h5>
                     <div className=" flex space-x-1">
                          <img src={start} alt="" />
                          <p className=" text-gray-500 text-sm font-manrope pr-2">5.0</p>
                          <img src={discount} className=" w-4" alt="" />
                            <p className=" text-gray-500 text-sm font-manrope pr-2">10 chuyến</p>
                     </div>
                         <div className=" flex space-x-1">
                          <img src={diadiem} alt="" />
                          <p className=" text-gray-500 text-sm font-manrope pr-2">Quận Thủ Đức, TP. Hồ Chí Minh</p>
                     </div>
                </div>
            </div>
               <div className=" flex flex-col justify-center items-center w-1/4 space-y-2">
              <h5 className=" text-2xl font-manrope font-bold text-primary pb-3">Đang cho thuê</h5>
                 <div className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium">cập nhật thông tin </div> 
                                  <div className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium">Dừng cho thuê</div> 
                                  <div className=" p-2 px-9 border border-primary rounded-md font-manrope  text-sm font-medium">Lịch cho thuê</div> 
        </div>
                </div>
                  <div className=" p-5 pb-10 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 items-center flex space-x-5 border-r-2 border-primary border-opacity-40 ">
                <img src={detail1} alt="" className=" w-80 h-40 rounded-lg" />
                <div className=" flex flex-col space-y-2 w-full">
                    <div className=" flex space-x-2 w-full">
                        <div className=" rounded-2xl px-2 py-1 bg-background font-manrope text-sm"> Số tự động</div>
                         <div className=" rounded-2xl px-2 py-1 bg-background font-manrope text-sm">Giao xe tận nơi</div>
                    </div>
                    <h5 className=" font-manrope font-bold text-start text-lg">Lamborghini Huracan Evo 2021</h5>
                     <div className=" flex space-x-1">
                          <img src={start} alt="" />
                          <p className=" text-gray-500 text-sm font-manrope pr-2">5.0</p>
                          <img src={discount} className=" w-4" alt="" />
                            <p className=" text-gray-500 text-sm font-manrope pr-2">10 chuyến</p>
                     </div>
                         <div className=" flex space-x-1">
                          <img src={diadiem} alt="" />
                          <p className=" text-gray-500 text-sm font-manrope pr-2">Quận Thủ Đức, TP. Hồ Chí Minh</p>
                     </div>
                </div>
            </div>
               <div className=" flex flex-col justify-center items-center w-1/4 space-y-2">
              <h5 className=" text-2xl font-manrope font-bold text-primary pb-3">Đang cho thuê</h5>
                 <div className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium">cập nhật thông tin </div> 
                                  <div className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium">Dừng cho thuê</div> 
                                              <div className=" p-2 px-9 border border-primary rounded-md font-manrope  text-sm font-medium">Lịch cho thuê</div> 
        </div>
                </div>
     </div>
    </motion.section>
  );
};
export default MyCar;
