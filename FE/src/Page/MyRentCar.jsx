
import detail1 from "../assets/detail1.png"
import start from "../assets/start.svg"
import discount from "../assets/discount.svg"
import diadiem from "../assets/diadiem.svg"
import { motion } from "framer-motion"
const MyRentCar = () => {
  return (
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" w-full">
     <h1 className=" text-3xl font-manrope font-bold text-start pb-5">Xe đang thuê <span className=" text-primary font-4xl">(3)</span></h1>
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
            <div className=" flex space-x-2  items-end"> <p className=" pb-1 font-manrope text-gray-500 text-sm">Thời gian còn lại:</p>  <h5 className=" text-2xl font-manrope text-primary font-bold">17 giờ</h5> </div>
                    <p className="font-manrope text-gray-500 text-sm">Ngày trả: 20:00 21/07/2024</p>
                 <div className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium w-3/4">Trả xe</div> 
                                  <div className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium w-3/4">Khiếu nại</div> 
                                              <div className=" p-2 px-9 border border-primary rounded-md font-manrope  text-sm font-medium w-3/4">Gia hạn thuê</div> 
        </div>
                </div>
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
            <div className=" flex space-x-2  items-end"> <p className=" pb-1 font-manrope text-gray-500 text-sm">Thời gian còn lại:</p>  <h5 className=" text-2xl font-manrope text-primary font-bold">17 giờ</h5> </div>
                    <p className="font-manrope text-gray-500 text-sm">Ngày trả: 20:00 21/07/2024</p>
                 <div className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium w-3/4">Trả xe</div> 
                                  <div className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium w-3/4">Khiếu nại</div> 
                                              <div className=" p-2 px-9 border border-primary rounded-md font-manrope  text-sm font-medium w-3/4">Gia hạn thuê</div> 
        </div>
                </div>
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
            <div className=" flex space-x-2  items-end"> <p className=" pb-1 font-manrope text-gray-500 text-sm">Thời gian còn lại:</p>  <h5 className=" text-2xl font-manrope text-primary font-bold">17 giờ</h5> </div>
                    <p className="font-manrope text-gray-500 text-sm">Ngày trả: 20:00 21/07/2024</p>
                 <div className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium w-3/4">Trả xe</div> 
                                  <div className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium w-3/4">Khiếu nại</div> 
                                              <div className=" p-2 px-9 border border-primary rounded-md font-manrope  text-sm font-medium w-3/4">Gia hạn thuê</div> 
        </div>
                </div>
     </div>
    </motion.section>
  );
};
export default MyRentCar;
