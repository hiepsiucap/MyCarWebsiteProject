
import detail1 from "../assets/detail1.png"
import start from "../assets/start.svg"
import discount from "../assets/discount.svg"
import diadiem from "../assets/diadiem.svg"
import { motion } from "framer-motion"
const FavouriteCar = () => {
  return (
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" w-full">
     <h1 className=" text-3xl font-manrope font-bold text-start pb-5">Xe yêu thích của tôi</h1>
     <div className=" flex flex-col space-y-5 w-full">
        <div className=" p-5 pb-10 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 flex space-x-5 border-r-2 border-primary border-opacity-40 ">
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
                <div className=" flex space-x-1 items-end pb-3"><h5 className=" text-2xl font-manrope font-bold text-primary"> 390K</h5> <p className=" text-sm text-gray-500">/1 ngày</p></div>
                 <div className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium">Xem chi tiết</div> 
                                  <div className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium">Bỏ thích</div> 
        </div>
                </div>
                   <div className=" p-5 pb-10 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 flex space-x-5 border-r-2 border-primary border-opacity-40 ">
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
                <div className=" flex space-x-1 items-end pb-3"><h5 className=" text-2xl font-manrope font-bold text-primary"> 390K</h5> <p className=" text-sm text-gray-500">/1 ngày</p></div>
                 <div className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium">Xem chi tiết</div> 
                                  <div className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium">Bỏ thích</div> 
        </div>
                </div>
                   <div className=" p-5 pb-10 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 flex space-x-5 border-r-2 border-primary border-opacity-40 ">
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
                <div className=" flex space-x-1 items-end pb-3"><h5 className=" text-2xl font-manrope font-bold text-primary"> 390K</h5> <p className=" text-sm text-gray-500">/1 ngày</p></div>
                 <div className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium">Xem chi tiết</div> 
                                  <div className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium">Bỏ thích</div> 
        </div>
                </div>
     </div>
    </motion.section>
  );
};
export default FavouriteCar;
