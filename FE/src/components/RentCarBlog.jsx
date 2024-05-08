/** @format */
import rangerover from "../assets/rangerover.png"
import mecamg from "../assets/mecamg.png"
import lexus from "../assets/lexus.png"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const RentCarBlog = () => {
  return (
     <section className=" md:container mx-auto py-24">
          <h1 className=" font-manrope text-4xl font-bold pb-12">MY CAR BLOG</h1>
           <motion.div initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{ delay: 0.1, duration: 0.5 }} className=" flex space-x-5">
                   <div  className=" flex flex-col space-y-5">
                        <Link className=" relative">
                        <img src={rangerover} alt="" />
                          <div className=" absolute bottom-2 left-3 text-start z-100">
                            <p className=" text-white font-manrope">29-02-2024</p>
                            <p className=" font-bold text-white text-lg font-manrope">Thuê xe ô tô tự lái: Du lịch sau lễ
thảnh thơi đi muôn nơi</p>
                           </div>
                        </Link>
                         <Link className=" relative">
                        <img src={lexus} alt="" className=" opacity-90" />
                           <div className=" absolute bottom-2 left-3 text-start z-100">
                            <p className=" text-white font-manrope">29-02-2024</p>
                            <p className=" font-bold text-white text-lg font-manrope">Thuê xe ô tô tự lái: An tâm đưa gia
đình đi muôn nơi dịp Tết Nguyên Đán</p>
                           </div>
                        </Link>
                   </div>
                    <Link className=" relative">
                        <img src={mecamg} alt="" />
                        <div className=" absolute bottom-12 left-8 text-start z-100">
                            <p className=" text-white text-2xl font-manrope">29-02-2024</p>
                            <p className=" font-bold text-white text-3xl font-manrope">Thuê xe ô tô tự lái: Tự do trải nghiệm lễ Giáng sinh
đáng nhớ</p>
                           </div>
                        </Link>
           </motion.div>
     </section>
  );
};
export default RentCarBlog;
