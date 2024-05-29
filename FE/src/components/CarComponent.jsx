import caricon from "../assets/car.svg"
import cayxang from "../assets/cayxang.svg"
import giamgia from "../assets/giamgia.svg"
import tien from "../assets/tien.svg"
import dongco from "../assets/dongco.svg"
import lua from "../assets/icon.svg"
import start from "../assets/start.svg"
import carimage from "../assets/imagecar.png"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ListOfCar, formatPrice } from "../Utiliz/Constants"
const CarComponent = ({c}) => {
   console.log(c);
   if (c)
  return (
<Link to={`/car/${c.carId}`} >
      <motion.div initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity: 1, y:0 }}   transition={{ duration: 0.4 }} 
       className=" flex shadow-md flex-col rounded-md">
       <img src={c.image} alt="" className=" h-44" />
       <div className="px-4 py-2 border-b-2 border-gray-100">
        <p className=" font-bold text-start font-manrope"> {c.brand} {c.model} {c.year}</p>
        <p className=" text-sm text-gray-600 text-start font-manrope">{c?.location?.district}, {c?.location?.province}</p>
        <div className="flex justify-between">
         <div className=" flex flex-col justify-center space-y-2">
            <div className=" flex justify-start items-center space-x-1">
            <img src={lua} alt="" />
            <p className=" text-sm font-manrope">{c.numberOfRental} lượt thuê !</p>
            </div>
            <div className=" flex justify-start items-center space-x-1">
            <img src={start} alt="" />
            <p className=" text-sm font-manrope">{c.review || '0.0'}</p>
            </div>
         </div>
            <div className=" flex flex-col items-end space-y-2">
                 <p className=" font-manrope text-gray-600 line-through">{formatPrice(c.cost*2)}</p>
                 <p className=" font-manrope text-2xl font-bold text-primary">{formatPrice(c.cost)}</p>
                   <p className=" font-manrope text-gray-600 text-sm "> 1 ngày/ 24 giờ</p>
                    <p className="  text-gray-600 text-xs pb-3 "> chưa bao gồm các phí</p>
                 </div>
        </div>
       </div>
       <div className=" flex justify-between px-4 py-2 ">
              <div className=" flex-col space-y-1 items-center">
                 <div className=" flex justify-center">
                 <img src={caricon} alt="" />
                 </div>
                 <p className="text-sm">{c.seat} chỗ</p>
              </div>
              <div className=" flex-col space-y-1 items-center">
                 <div className=" flex justify-center">
                 <img src={dongco} alt="" />
                 </div>
                 <p className="text-sm">{c.gear ==="Tu dong" ? "Tự động" :"Số sàn"}</p>
              </div>
              <div className=" flex-col space-y-1 items-center">
                 <div className=" flex justify-center">
                 <img src={cayxang} alt="" />
                 </div>
                 <p className="text-sm">{c.fuel ==="Xang" && "Xăng"} {c.fuel ==="Dau" && "Dầu"}{c.fuel ==="Dien" && "Điện"}</p>
              </div>
       </div>
       </motion.div>
   </Link>
  );
};
export default CarComponent;
