/** @format */
import logo from "../assets/rentocar.svg";
import start from "../assets/start.svg"
import { motion } from "framer-motion";
const Testimonial = () => {
  return (
    <section className=" md:container mx-auto">
        <h1 className=" text-4xl py-24 font-bold font-manrope">Đánh giá khách hàng</h1>
        <div className=" flex space-x-5">
           <motion.div initial={{ opacity: 0, x:-50 }}
        whileInView={{ opacity: 1, x:0}}   transition={{ delay: 0.1, duration: 0.5 }}>
                <div className=" flex space-x-1 pb-2">
                  <img src={start} alt="" />
                   <img src={start} alt="" />
                    <img src={start} alt="" />
                     <img src={start} alt="" />
                      <img src={start} alt="" />
                </div>
               <p className=" text-sm font-manrope h-28 text-start">Thời gian đặt xe linh động và không ràng buộc
nhiều vấn đề khi đặt xe.</p>
                <div className=" flex space-x-2 items-center">
                    <img src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1710901348/rfb0bgnjivk8cujez1ft.jpg" alt="" className=" rounded-full h-12 w-12" />
                    <div className=" flex flex-col items-start">
                        <p className=" font-manrope font-bold">Anh Hiệp</p>
                        <p className=" font-manrope text-sm text-gray-600">Thủ đức, Hồ Chí Minh</p>
                    </div>
                </div>
</motion.div>
 <motion.div initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0}}   transition={{ delay: 0.1, duration: 0.5 }}>
                <div className=" flex space-x-1 pb-2">
                  <img src={start} alt="" />
                   <img src={start} alt="" />
                    <img src={start} alt="" />
                     <img src={start} alt="" />
                      <img src={start} alt="" />
                </div>
               <p className=" text-sm font-manrope h-28 text-start">Thời gian đặt xe linh động và không ràng buộc
nhiều vấn đề khi đặt xe.</p>
                <div className=" flex space-x-2 items-center">
                    <img src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1710901348/rfb0bgnjivk8cujez1ft.jpg" alt="" className=" rounded-full h-12 w-12" />
                    <div className=" flex flex-col items-start">
                        <p className=" font-manrope font-bold">Anh Hiệp</p>
                        <p className=" font-manrope text-sm text-gray-600">Thủ đức, Hồ Chí Minh</p>
                    </div>
                </div>
</motion.div>
 <motion.div initial={{ opacity: 0, x:150 }}
        whileInView={{ opacity: 1, x:0}}   transition={{ delay: 0.1, duration: 0.5 }}>
                <div className=" flex space-x-1 pb-2">
                  <img src={start} alt="" />
                   <img src={start} alt="" />
                    <img src={start} alt="" />
                     <img src={start} alt="" />
                      <img src={start} alt="" />
                </div>
               <p className=" text-sm font-manrope h-28  text-start">Thời gian đặt xe linh động và không ràng buộc
nhiều vấn đề khi đặt xe.</p>
                <div className=" flex space-x-2 items-center">
                    <img src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1710901348/rfb0bgnjivk8cujez1ft.jpg" alt="" className=" rounded-full h-12 w-12" />
                    <div className=" flex flex-col items-start">
                        <p className=" font-manrope font-bold">Anh Hiệp</p>
                        <p className=" font-manrope text-sm text-gray-600">Thủ đức, Hồ Chí Minh</p>
                    </div>
                </div>
</motion.div>
        </div>
        <div className=" pt-16 flex justify-center space-x-2">
            <div className=" bg-primary py-1 px-3 rounded-full"></div>
            <div className=" bg-slate-300 px-1 py-1 rounded-full"></div>
                        <div className=" bg-slate-300 px-1 py-1 rounded-full"></div>
                                    <div className=" bg-slate-300 px-1 py-1 rounded-full"></div>
                                                <div className=" bg-slate-300 px-1 py-1 rounded-full"></div>
                                                            <div className=" bg-slate-300 px-1 py-1 rounded-full"></div>
                                                                       
        </div>
    </section>
  );
};
export default Testimonial;
