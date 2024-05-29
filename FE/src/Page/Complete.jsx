/** @format */
import { useEffect } from "react";
import { useState , useRef } from "react";
import { formatDate, formatPrice, time } from "../Utiliz/Constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import detail1 from "../assets/detail1.png"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import bank from "../assets/bank.jpg"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Complete  = () => {
      const { rentalinfo,carinfo } = useSelector(
    (state) => state.rental
  )
  const navigate= useNavigate();
  console.log(carinfo)
  const [timer, settimer] =useState(300);
  const countRef = useRef(null)
  useEffect(() => {
    countRef.current = setInterval(() => {
      settimer((prev) => {
        if (prev <= 0) {
            Swal.fire({
      title: "Hết thời gian!",
      text: "Hết thời gian thanh toán đơn hàng quý khách bị huỷ!",
      icon: "error"});
          clearInterval(countRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countRef.current);
  }, []);

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getMinutes} : ${getSeconds}`
  }
  console.log(timer)
  useEffect(() => {
  // Scroll to the top when the component mounts
  window.scrollTo(0, 0);
}, []);
  return (
    <>
    <motion.section initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className=" bg-slate-50 py-6 ">
        <div className=" flex space-x-5 w-7/12 mx-auto ">
        <div className=" w-1/2 bg-white p-8 shadow-md rounded-md">
        <h5 className="font-manrope font-bold text-lg">Vui lòng thanh toán phí giữ chỗ <br></br>
        <p className=" text-xl"> {formatPrice(Number(rentalinfo.totalCost))}</p>
         </h5>
         <p className=" text-sm pb-6">Thời gian giữ chỗ còn lại:</p>
           <p className=" font-bold font-manrope p-2 w-1/2 text-xl mx-auto border-2 border-slate-300 text-primary rounded-md">{formatTime()}</p>
           <p className=" text-sm py-3">Mã đặt xe của bạn : <span className=" font-bold">{rentalinfo.rentalId}</span></p>
           <div className=" border border-primary"></div>
           <h5 className=" font-bold text-lg py-6 font-manrope">Thanh toán bằng QR Code</h5>
                    <p className=" text-sm pb-6">Quét QR để chuyển khoản:</p>
                    <img src={bank} alt="" />
            <div className=" bg-background rounded-md font-manrope flex flex-col">
                <p className=" text-sm py-3">Nội dung: <span className=" font-bold">TT DH {rentalinfo.rentalId}</span></p>
                                <p className=" text-sm py-3">Số tài khoản: <span className=" font-bold">032226853232</span></p>
                                                <p className=" text-sm py-3">Số tiền: <span className=" font-bold">{formatPrice(Number(rentalinfo.totalCost))}</span></p>
                                         
            </div>
                   <p className=" text-sm pb-6 text-gray-600">Hoặc liên hệ qua bộ phận CSKH ở đây:</p>
                   <div className=" flex justify-between w-full items-center">
                      <button >
                     <img src="https://static.kinhtedothi.vn/images/upload//2023/08/18/z1-4x.png" className=" w-24 px-5  border border-lg rounded-md" alt="" />
                     </button>
                     <button className=" flex border py-3 space-x-1 items-center px-3 rounded-md ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04ABFF" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
                       <p className=" font-bold font-manrope text-xs text-primary">Hotline</p>
                     </button>
                   </div>
         </div>
         <div className=" w-1/2 flex flex-col space-y-6">
         <div className="bg-white  rounded-md p-8 flex-col space-y-3 h-min shadow-md">
            <h5 className="font-manrope font-bold text-lg">Thông tin đơn thuê</h5>
            <div className=" flex justify-center">
            <img src={carinfo.images[0].image} className=" rounded-md" alt="" />
            </div>
             <div className=" border border-primary border-opacity-50"></div>
            <div className=" flex flex-col space-y-1">
                <h5 className=" font-bold font-manrope pb-2">Thông tin xe</h5>
                <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700  pb-0.5">Tên Xe:</p>
                <p className="  font-bold font-manrope">{carinfo.name}</p>
                </div>
                 <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 pb-0.5 ">Số chỗ:</p>
                <p className="  font-bold font-manrope">{carinfo.seat} (Bốn)</p>
                </div>
                 <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 pb-0.5 ">Nhiên liệu:</p>
                <p className=" font-bold font-manrope">{carinfo.fuel ==="Xang" && "Xăng"} {carinfo.fuel ==="Dau" && "Dầu"} {carinfo.fuel ==="Dien" && "Điện"}</p>
                </div>
                 <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 pb-0.5 ">Hộp số:</p>
                <p className="font-bold font-manrope">{carinfo.gear === "Tu dong" ? "Tự động" : "Số sàn"}</p>
                </div>
                <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 pb-0.5 ">Tiêu thụ:</p>
                <p className="  font-bold font-manrope">{carinfo.consumption}L/100KM</p>
                </div>
            </div>
             <div className=" border border-primary border-opacity-50"></div>
            <div className=" flex flex-col space-y-1">
                <h5 className=" font-bold font-manrope pb-2">Thông tin đặt chỗ</h5>
                <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 pb-0.5">Giờ nhận xe:</p>
                <p className="  font-bold font-manrope">{rentalinfo.pickUpHours}</p>
                </div>
                 <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700  pb-0.5">Ngày nhận xe:</p>
                <p className="  font-bold font-manrope">{formatDate(rentalinfo.pickUpDate)}</p>
                </div>
                 <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 pb-0.5 ">Giờ trả xe:</p>
                <p className=" font-bold font-manrope">{rentalinfo.dropOffHours}</p>
                </div>
                 <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 pb-0.5 ">Ngày trả xe:</p>
                <p className="font-bold font-manrope">{formatDate(rentalinfo.dropOffDate)}</p>
                </div>      
                 <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 text-start pb-0.5 ">Địa điểm nhận xe :</p>
                <p className="font-bold font-manrope text-start">{carinfo.address} {carinfo.district} {carinfo.province}</p>
                </div>  
            </div>
            <div className=" border border-primary border-opacity-50"></div>
            <div className=" flex flex-col space-y-1">
                <h5 className=" font-bold font-manrope pb-2">Thông tin người đặt</h5>
                <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 ">Họ và Tên:</p>
                <p className="  font-bold font-manrope">{rentalinfo.user.firstName} {rentalinfo.user.lastName}</p>
                </div>
                 <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 pb-0.5 ">Số điện thoại:</p>
                <p className="  font-bold font-manrope">{rentalinfo.user.phoneNumber}</p>
                </div>
                 <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 pb-0.5">Địa chỉ:</p>
                <p className="  font-bold font-manrope"></p>
                </div>
                 <div className=" flex space-x-2 items-end">
                <p className=" font-manrope text-sm text-gray-700 pb-0.5">Email:</p>
                <p className="  font-bold font-manrope">{rentalinfo.user.email}</p>
                </div>            
            </div>
         </div>
         <button onClick={()=> { Swal.fire({
      title: "Xác nhận thanh toán thành công!",
      text: "Nhân viên của chúng tôi sẽ xét duyện sau 24h!",
      icon: "success"
    }).then(async () => {
        navigate("/")
            });
}} className=" w-full border py-3 rounded-md bg-primary font-bold font-manrope text-white">Xác nhận thanh toán</button>
         </div>
         </div>
    </motion.section>
    </>
  );
};
export default Complete;
