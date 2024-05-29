/** @format */
import "./DatePicker.css"
import logo from "../assets/rentocar.svg";
import chiase from "../assets/chiase.svg"
import diadiem from "../assets/diadiem.svg"
import car from "../assets/car.svg"
import dongco from "../assets/dongco.svg"
import vi from 'date-fns/locale/vi'
import cayxang from "../assets/cayxang.svg"
import tieuhoa from "../assets/tieuhoa.svg"
import cam360 from  "../assets/360.svg"
import etc from  "../assets/etc.svg"
import cuasotroi from  "../assets/cuasotroi.svg"
import kheusb from  "../assets/kheusb.svg"
import manhinh from  "../assets/manhinh.svg"
import tuikhi from  "../assets/tuikhi.svg"
import cameralui from  "../assets/cameralui.svg"
import lop from  "../assets/lop.svg"
import { time } from "../Utiliz/Constants";
import { tinhSoNgay, formatPrice } from "../Utiliz/Constants";
import bluetooth from  "../assets/bluetooth.svg"
import discount from "../assets/discount.svg"
import DatePicker from "react-datepicker";
import Basic from "./Gallery";
import { Link } from "react-router-dom";
import start from "../assets/start.svg"
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';
import CarSlick from "./CarSlick";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { addDays } from "date-fns";
import heart from "../assets/heart2.svg"
import { TimeNow } from "../Utiliz/Constants";
import { DetailCar } from "../Utiliz/Constants";
import { useParams } from "react-router-dom";
import { getRequest } from "../Utiliz/services";
import { createacart } from "../features/carcart/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  Swal  from "sweetalert2/dist/sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
const customStyles = {
   content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
     border: '0',
     padding: '0'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the color and opacity here
  }

};

Modal.setAppElement('#root');
const MainDetail = () => {
      const { 
        userInfo  
       } = useSelector(state => state.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
const [data, changedata]=useState(
  {

address: "",
consumption: "",
cost: "",
days: [],
description: "",
district: "",
fuel :"", 
gear: "", 
images: [],
name: "",
province: "",
reviews: [],
seat: ""}
);
console.log(data.days);
const { id } = useParams();
  useEffect(()=>{
   const fetchData=async()=>
    {
      const responsedata= await getRequest(`http://localhost:8080/api/cars/${id}`)
      changedata(responsedata);
    }
    fetchData();
    
  },[id, useParams])
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [totalerror, changetotalerror] =useState(null);
 const renderStars = (num) => {
    return [...Array(num)].map((_, index) =>   <img src={start} alt="" key={index} />);
  }
  function openModal() {
    setIsOpen(true);
  }
  const [total, setTotal] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [MaxDate, setMaxDate] = useState(addDays(new Date()+365));
  const [DateError,setDateError]= useState("");
    useEffect(()=>{
   setTotal(tinhSoNgay(startDate,endDate)* data.cost);
  },[startDate, endDate, data])
    const verifyDay =({start,end})=> {
      if(!start || !end)
        {
          return;
        }
    for( var a of DetailCar.days)
      {
           
        const days= new Date(a);
         console.log("Hello",days)
            if(days.getTime()>start.getTime() && days.getTime()<end.getTime())
              {
                setDateError("Lịch bạn chọn đã có ngày xe bận, vui lòng chọn lại ngày nhận và trả xe")
                return;
              }
      }
      setDateError("");

  }
  const onChange = (dates) => {
    const [start, end] = dates;
    verifyDay({start,end});
    setStartDate(start);
    setEndDate(end);
  };

  const [startHour, ChangeStart] =  useState("08:00");
    const [EndHour, ChangeEnd] =  useState("20:00");
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '##000000';
  }
  function closeModal() {
    setIsOpen(false);
  }
    useEffect(()=>{
    if(total<=0)
      {
       changetotalerror("Vui lòng");
      }
      else
      {
        changetotalerror(null);
      }
  },[total])
  const AddCartHandler =async()=>{
     const dt= await getRequest("http://localhost:8080/users/current");
    if(dt?.driverLicenseCheck =='N' ||!dt?.driverLicenseCheck)
      {
        return  Swal.fire({
      title: "Bạn chưa xác minh bằng lại",
      text: "Vui lòng xác minh bằng lái để được thuê xe",
      icon: "error"}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    console.log("hello");
    navigate("/user/account")
  }}); 
      }
    if(total ===0)
      {
      return;
      }
    const adddata={
      carId: id,
      pickUpDate: startDate,
      pickUpHours: startHour,
      dropOffDate: endDate,
      dropOffHours: EndHour,
      totalCost: total,
      location: `${data.address}, ${data.district}, ${data.province}`
    }
    dispatch(createacart(adddata));
    navigate(`/booking/${id}`)

  }
  return (
    <>
    {data ? <section className=" md:container mx-auto pt-8">
       
        <Basic></Basic>
         <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      style={modalIsOpen ? { ...customStyles, content: { ...customStyles.content, transform: 'translate(-50%, -50%) scale(1)', opacity: 1 } } : customStyles}
        contentLabel="Example Modal"
      >
             <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className="bg-white rounded-xl py-6 px-16 w-full flex space-y-5 pb-24 flex-col items-center">
             <h5 className=" font-manrope text-2xl font-bold pb-4 text-center">Chọn ngày thuê</h5>
         
        <DatePicker
          className="custom-datepicker"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          excludeDates={data.days.map((r)=> {return new Date(r) })}
          selectsRange
          locale={vi} 
          minDate={new Date()}
          maxDate={MaxDate}
          monthsShown={2} // Display two months
          selectsDisabledDaysInRange
          inline
        />
      <div className=" flex w-full space-x-5 pb-5 rounded-b-2xl">
        <div className=" flex flex-col space-y-1  w-1/2">
      <h5 className=" text-sm font-manrope text-gray-500">Giờ nhận xe:</h5>
              <select  name="" id="" value={startHour} onChange={(e)=>{ChangeStart(e.target.value)}} className=" w-full border border-gray-400 rounded-md py-4">
            {TimeNow(startDate).map((t)=>{
              return (
                 <option value={t} key={t}>{t}</option>
              )
            })}
            </select>
        </div>
        <div className=" flex flex-col space-y-1  w-1/2">
      <h5 className=" text-sm font-manrope text-gray-500">Giờ trả xe:</h5>
      <select name="" id="" value={EndHour} onChange={(e)=>{ChangeEnd(e.target.value)}} className=" border border-gray-400 rounded-md w-full py-4">
 {time.map((t)=>{
              return (
                 <option value={t} key={t}>{t}</option>
              )
            })}
      </select>
        </div>
      </div>

<div className=" flex w-full justify-between items-center 0 fixed bottom-0 px-5 py-5 bg-background">
      <div className=" flex flex-col font-manrope font-bold">
       <p> {startHour +", "}  {startDate?.getDate()<10 &&0}{startDate?.getDate()}/{startDate?.getDate()<10 && 0}{startDate?.getMonth()+1} - {EndHour +", "}  {endDate?.getDate()<10 && 0}{endDate?.getDate()||0}/{endDate?.getDate()<10 && 0}{endDate?.getMonth()+1 || 0}</p>
       <p> Số ngày thuê: {tinhSoNgay(startDate, endDate)|| 0} </p>
      </div>
      <button className=" font-bold w-1/3 font-manrope font-lg py-2 px-4 bg-primary text-white rounded-md" onClick={closeModal}>Xác nhận</button>
      </div>
          </motion.div>
      </Modal>
        <div className=" flex space-x-10 pt-10">
        <div className=" flex flex-col text-start w-2/3">
            <div>
            <h2 className=" text-3xl font-manrope font-bold">{data.name}</h2>
             <div className=" flex justify-between border-b-2 pb-6 border-gray-200">
                <div className=" flex space-x-2 items-center">
                <img src={diadiem} alt="" />
                <p className=" font-manrope text-gray-500">Thành phố {data.province}</p>
                </div>
                  <div className=" flex space-x-2 items-center">
                <button className=" font-manrope font-bold text-lg text-gray-800">Chia sẻ</button>
                 <img src={chiase} alt="" />
                 <div className=" px-2"></div>
                  <button className=" font-manrope font-bold text-lg text-gray-800">Yêu thích</button>
                 <img src={heart} alt="" />
                </div>
             </div>
               <div className=" flex flex-col space-y-8 py-8">
                     <div className=" flex flex-col space-y-2">
                        <h5 className=" font-bold font-manrope text-xl">Đặc điểm</h5>
                          <div className="pt-1 px-1 rounded-sm bg-primary w-12"></div>
                          <div className=" flex justify-between pt-3">
                            <div className="flex justify-start space-x-4 ">
                                  <img src={car} alt="" />
                                  <div>
                                  <p className=" text-gray-600">Số ghế</p>
                                    <p className=" text-xl font-medium ">{data.seat} Chỗ</p>
                                  </div>
                    
                            </div>
                            <div className="flex justify-start space-x-4 ">
                                  <img src={dongco} alt="" />
                                  <div>
                                  <p className=" text-gray-600">Truyền động</p>
                                    <p className=" text-xl font-medium ">{data.gear ==="Tu dong" ? "Tự động" : "Số sàn"}</p>
                                  </div>
                    
                            </div>
                            <div className="flex justify-start space-x-4 ">
                                  <img src={cayxang} alt="" />
                                  <div>
                                  <p className=" text-gray-600">Nhiên liệu</p>
                                    <p className=" text-xl font-medium">{data.fuel ==="Xang" && "Xăng"}  {data.fuel === "Dau" && "Dầu"}  {data.fuel ==="Dien" && "Điện"}</p>
                                  </div>
                    
                            </div>
                             <div className="flex justify-start space-x-4 ">
                                  <img src={tieuhoa} alt="" />
                                  <div>
                                  <p className=" text-gray-600">Tiêu hao</p>
                                    <p className=" text-xl font-medium ">{data.consumption}L/100KM</p>
                                  </div>
                    
                            </div>
                          </div>
                          </div>
                               <div className=" flex flex-col space-y-2">
                        <h5 className=" font-bold font-manrope text-xl">Mô tả</h5>
                          <div className="pt-1 px-1 rounded-sm bg-primary w-12"></div>
                            <div className=" pt-3 leading-relaxed font-manrope">{data.description}</div>
                          </div>
                          <div className=" flex flex-col space-y-2">
                        <h5 className=" font-bold font-manrope text-xl">Các tiện nghi khác</h5>
                          <div className="pt-1 px-1 rounded-sm bg-primary w-12"></div>
                              <div className=" grid grid-cols-4 gap-5 pt-3">
                                <div className=" flex items-center justify-start space-x-2">
                                       <img src={cam360} alt="" />
                                       <p className=" font-manrope">camera 360</p>
                                </div>
                                <div className=" flex items-center justify-start space-x-2">
                                       <img src={etc} alt="" />
                                       <p className=" font-manrope">ETC</p>
                                </div>
                                 <div className=" flex items-center justify-start space-x-2">
                                       <img src={cuasotroi} alt="" />
                                       <p className=" font-manrope">Cửa sổ trời</p>
                                </div>
                                 <div className=" flex items-center justify-start space-x-2">
                                       <img src={etc} alt="" />
                                       <p className=" font-manrope">ETC</p>
                                </div>
                                 <div className=" flex items-center justify-start space-x-2">
                                       <img src={kheusb} alt="" />
                                       <p className=" font-manrope">Khe USB</p>
                                </div>
                                 <div className=" flex items-center justify-start space-x-2">
                                       <img src={manhinh} alt="" />
                                       <p className=" font-manrope">Màn hình</p>
                                </div>
                                  <div className=" flex items-center justify-start space-x-2">
                                       <img src={tuikhi} alt="" />
                                       <p className=" font-manrope">Túi khí</p>
                                </div>
                                  <div className=" flex items-center justify-start space-x-2">
                                       <img src={cameralui} alt="" />
                                       <p className=" font-manrope">Camera lùi</p>
                                </div>
                                  <div className=" flex items-center justify-start space-x-2">
                                       <img src={lop} alt="" />
                                       <p className=" font-manrope">Lốp dự phòng</p>
                                </div>
                                  <div className=" flex items-center justify-start space-x-2">
                                       <img src={bluetooth} alt="" />
                                       <p className=" font-manrope">Bluetooth</p>
                                </div>
                              </div>
                          </div>
                        <div className=" flex flex-col space-y-2">
                        <h5 className=" font-bold font-manrope text-xl">Điều khoản</h5>
                          <div className="pt-1 px-1 rounded-sm bg-primary w-12"></div>
                            <div className=" pt-3 leading-relaxed font-manrope"> <h2>Quy định khác:</h2>
    <ul>
        <li>-Sử dụng xe đúng mục đích.</li>
        <li>-Không sử dụng xe thuê vào mục đích phi pháp, trái pháp luật.</li>
        <li>-Không sử dụng xe thuê để cầm cố, thế chấp.</li>
        <li>-Không hút thuốc, nhả kẹo cao su, xả rác trong xe.</li>
        <li>-Không chở hàng quốc cấm dễ cháy nổ.</li>
        <li>-Không chở hoa quả, thực phẩm nặng mùi trong xe.</li>
        <li>-Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách hàng vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh xe.</li>
    </ul>
    <p>Trân trọng cảm ơn, chúc quý khách hàng có những chuyến đi tuyệt vời!</p></div>
                          </div>
                         <div className=" border"></div>
                         <div className=" text-3xl font-manrope font-bold">Đánh giá</div> 
                         <div className="class flex flex-col space-y-4">
                           {
                            data.reviews.map((r)=>
                              {
                                return(
                            <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y:0 }}
    transition={{ duration: 0.5 }}  key={r.name}className=" flex flex-col px-6 py-4 space-y-3 border rounded-lg border-slate-300 ">
                            <div className=" flex justify-between">
                            <div className=" flex space-x-4">
                                <img src={r.ava} className=" w-20 h-20 rounded-full" alt="" />
                                <div className=" flex flex-col space-y-2">
                                    <h2 className=" font-medium text-xl font-manrope">{r.name}</h2>
                                     <div className=" flex ">
                                    {renderStars(r.rate)}
                                     </div>    
                                </div>
                                </div>
                                  <p className=" text-gray-600">{r.date}</p>
                                </div>
                                 <div className=" font-manrope text-gray-600">{r.detail}</div>
                                </motion.div>
                                )
})     
}
                                </div> 
                </div>
             </div>
        </div>
        <div className=" shadow-md bg-slate-50 flex flex-col space-y-5 items-center p-5 w-1/3 h-min">
            <h1 className=" text-3xl font-manrope text-primary font-bold">{formatPrice(data.cost)}/1 Ngày</h1>
            <div className=" w-full">
            <div className=" flex w-full">
            <button className={DateError ?"bg-white border border-red-400 rounded-l-md p-3 w-1/2" :"bg-white border rounded-l-md p-3 w-1/2"} onClick={openModal}>
                <p className="text-sm font-manrope text-gray-600 text-start">Nhận xe </p>
                <p className=" font-manrope tracking-wide font-medium w-full text-start">{startDate?.getDate() <10 && 0}{startDate?.getDate()}/{startDate?.getMonth()+1 <10 && 0 }{startDate?.getMonth()+1}/{startDate?.getFullYear()} &nbsp; {startHour}</p>
   
            </button>
            <button className={DateError ?"bg-white border border-red-400 rounded-r-md p-3  w-1/2" :"bg-white border rounded-r-md p-3  w-1/2"} onClick={openModal}>
                <p className="text-sm font-manrope text-gray-600 text-start"> Trả xe</p>
                <p className=" font-manrope tracking-wide font-medium text-start">{endDate?.getDate() <10 && 0 }{endDate?.getDate()}/{startDate?.getMonth()+1 <10 && 0 }{endDate?.getMonth()+1}/{endDate?.getFullYear()} &nbsp; {EndHour}</p>
            </button>
            </div>
               <p className=" text-red-500 text-xs italic text-start pt-1">{DateError}</p>
            </div>
            <button className="bg-white border flex flex-col space-y-2 rounded-md p-5 w-full">
                <p className="text-sm font-manrope text-gray-600 text-start">Địa điểm nhận xe: </p>
                <p className=" font-manrope tracking-wide font-medium text-start"> {data.address}, {data.district}, {data.province}</p>
                   <p className="text-sm font-manrope text-gray-400 text-start">Rất tiếc, chủ xe không hỗ trợ giao xe tận nơi </p>
            </button>
            <div className=" w-full border"></div>
            <div className=" flex w-full justify-between">
                <div className=" flex space-x-2 items-center">
                    <p className=" font-manrope text-lg">Đơn giá thuê</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
                </div>
                <div className=" flex space-x-2 items-end">
                     <p className=" text-sm font-manrope text-gray-600 pb-1 ">{tinhSoNgay(startDate,endDate)}*{formatPrice(data.cost)}=</p>
                <p className=" font-bold font-manrope text-lg">{formatPrice(total)}</p>
             
                </div>
            </div>
                            <div className=" flex w-full justify-between">
                <div className=" flex space-x-2 items-center">
                    <p className=" font-manrope text-lg">Chí phí bảo hiểm</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
                </div>
                <p className=" font-bold font-manrope text-lg">{formatPrice(0)}</p>
            </div>
              <div className=" w-full border"></div>
                <div className=" flex w-full justify-between">
                <div className=" flex space-x-2 items-center">
                    <p className=" font-manrope text-lg">Tổng cộng</p>
                   
                </div>
                <p className=" font-bold font-manrope text-lg">{formatPrice(total)}</p>
            </div>
                <div className=" w-full border"></div>
                 <div className=" flex w-full justify-between">
                <div className=" flex space-x-2 items-center">
                    <img src={discount} alt="" />
                    <p className=" font-manrope text-lg">Khuyến mãi</p>
                    
                </div>
                <p className=" font-bold font-manrope text-lg">Chọn</p>
            </div>
             <div className=" w-full border"></div>
              <div className=" flex w-full justify-between">
                <div className=" flex space-x-2 items-center">
                    <p className=" font-manrope text-lg font-bold">Thành tiền</p>
                   
                </div>
                <p className=" font-bold font-manrope text-lg ">{formatPrice(total)}</p>
            </div>
            <div className=" pt-4"></div>
            {DateError || totalerror ?
            <button to="/booking" disabled className=" bg-primary opacity-60 rounded-md p-4 w-1/2 mx-auto font-manrope text-lg font-bold text-white" onClick={AddCartHandler}>Thanh toán</button>
            :
            <button to="/booking" className=" bg-primary rounded-md p-4 w-1/2 mx-auto font-manrope text-lg font-bold text-white" onClick={AddCartHandler}>Thanh toán</button>
}
        </div>

        </div>
        <div className=" py-16">
          <h5 className=" text-4xl font-bold font-manrope text-center pb-12">Xe tương tự</h5>
        <CarSlick></CarSlick>
        </div>
    </section> : null
}   
</>
  );
};
export default MainDetail;
