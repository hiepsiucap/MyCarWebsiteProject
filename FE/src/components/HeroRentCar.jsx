/** @format */
import logo from "../assets/rentocar.svg";
import volang from "../assets/volang.png"
import icon1 from "../assets/rentocar2.svg"
import image2 from "../assets/amg.png"
import { motion } from "framer-motion";
const HeroRentCar = () => {
  return (
    <section className=" md:container mx-auto">
     <div className=" flex justify-between space-x-12 bg-background bg-opacity-30 rounded-2xl p-10">
      <motion.div initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className="w-1/2">
        <img src={volang} alt="" className="" />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" flex flex-col w-1/2 justify-center space-y-10">
        <h1 className=" text-4xl font-manrope font-bold"> Bạn muốn biết thêm
về Mycar?</h1>
   <p className=" font-manrope w-5/6 mx-auto  ">
    Mycar kết nối khách hàng có nhu cầu thuê xe với hàng ngàn chủ
xe ô tô ở TPHCM, Hà Nội & các tỉnh thành khác. Mycar hướng đến
việc xây dựng cộng đồng người dùng ô tô văn minh & uy tín tại
Việt Nam.
   </p>
    <button className=" font-manrope justify-between py-2 px-4 font-bold bg-primary w-1/4 mx-auto rounded-xl text-white">Tìm hiểu thêm</button>
      </motion.div>
     </div>
      <div className=" flex bg-background justify-between space-x-12 bg-opacity-30 rounded-2xl p-10 mt-24">
         <motion.div initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" flex flex-col w-1/2 justify-center items-center space-y-10">
            <img src={icon1} alt="" className=" w-20" />
        <h1 className=" text-4xl font-manrope font-bold"> Bạn muốn cho
thuê xe?</h1>
   <p className=" font-manrope w-5/6 mx-auto  ">
    Hơn 5,000 chủ xe đang cho thuê hiệu quả trên Mycar
Đăng kí trở thành đối tác của chúng tôi ngay hôm nay để gia tăng
thu nhập hàng tháng.
   </p>
   <div className=" flex justify-between space-x-10">
<button className=" font-manrope py-2 px-4 font-bold    mx-auto rounded-xl  border border-gray-400">Tìm hiểu thêm</button>
<button className=" font-manrope py-2 px-9 font-bold bg-primary  mx-auto rounded-xl text-white">Đăng ký xe</button>
   </div>
    
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className="w-1/2">
        <img src={image2} alt="" className="" />
      </motion.div>
     </div>
    </section>
  );
};
export default HeroRentCar;
