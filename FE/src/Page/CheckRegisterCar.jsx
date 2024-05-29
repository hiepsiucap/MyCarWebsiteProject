
import detail1 from "../assets/detail1.png"
import start from "../assets/start.svg"
import discount from "../assets/discount.svg"
import diadiem from "../assets/diadiem.svg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { formatPrice, mcdata } from "../Utiliz/Constants"
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
import { useState, useEffect } from "react"
import { getRequest, patchRequest } from "../Utiliz/services"
import { DetailCarReview } from "../components"
import Modal from 'react-modal';
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
const CheckRegisterCar = () => {
    const [reload, changereload] =useState("");
      const [modalIsOpen, setIsOpen] = useState(false);
    const [cardata, changecardata]= useState(null);
      function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '##000000';
  }
  function closeModal() {
    setIsOpen(false);
  }
   function openModal() {
    setIsOpen(true);
  }
  const [id, changeid]= useState("111")
  useEffect(()=>{
    const getData=async()=>{
    const responsedata= await getRequest("http://localhost:8080/api/cars/null-cars");
    if(responsedata.error)
      {
        console.log(responsedata.message);
      } 
      else
      {
         changecardata(responsedata);
      }
    }
    getData();
  },[])
  console.log(cardata);
  const  onClickHandler=async(e)=>{
  Swal.fire({
  title: 'Chắc chắn bạn muốn duyệt đơn?',
  showDenyButton: true,
    icon: "warning",
  confirmButtonText: "Chắc chắn",
  denyButtonText: 'Không duyệt đơn',
  customClass: {
    actions: 'my-actions',
    cancelButton: 'order-1 right-gap',
    confirmButton: 'order-2',
    denyButton: 'order-3',
  },
}).then(async(result) => {
  if (result.isConfirmed) {
     const response=  await patchRequest(`http://localhost:8080/api/cars/${e.target.id}`,{status: "active"})
     if(response.error)
      {
     return Swal.fire('Duyệt đơn  không thành công!', '', 'error')
      } 
    Swal.fire('Dừng cho thuê thành công!', '', 'success')
  } 
})
 }
  const  onClickOpenHandler=async(e)=>{
  Swal.fire({
  title: 'Chắc chắn bạn muốn tiếp tục cho thuê ?',
  showDenyButton: true,
    icon: "warning",
  confirmButtonText: "Chắc chắn",
  denyButtonText: 'tiếp tục dừng cho thuê',
  customClass: {
    actions: 'my-actions',
    cancelButton: 'order-1 right-gap',
    confirmButton: 'order-2',
    denyButton: 'order-3',
  },
}).then(async(result) => {
  if (result.isConfirmed) {
     const response=  await patchRequest(`http://localhost:8080/api/cars/${e.target.id}`,{status: "active"})
     if(response.error)
      {
     return Swal.fire('Dừng cho thuê không thành công!', '', 'error')
      }      
    Swal.fire('Dừng cho thuê thành công!', '', 'success')
    changereload("Hiiii");
  } 
})
 }
 const onClickCloseHandler =async(e)=>{
  Swal.fire({
  title: 'Chắc chắn bạn muốn tiếp tục cho thuê ?',
  showDenyButton: true,
    icon: "warning",
  confirmButtonText: "Chắc chắn",
  denyButtonText: 'tiếp tục dừng cho thuê',
  customClass: {
    actions: 'my-actions',
    cancelButton: 'order-1 right-gap',
    confirmButton: 'order-2',
    denyButton: 'order-3',
  },
}).then(async(result) => {
  if (result.isConfirmed) {
     const response=  await patchRequest(`http://localhost:8080/api/cars/${e.target.id}`,{status: "pending"})
     if(response.error)
      {
     return Swal.fire('Dừng cho thuê không thành công!', '', 'error')
      }      
    Swal.fire('Dừng cho thuê thành công!', '', 'success')
    changereload("Hiiii");
  } 
})
 }
  return (
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" w-full">
    <div className=" justify-between flex items-center pb-5"> <h1 className=" text-3xl font-manrope font-bold text-start pb-5">Duyệt thông tin xe<span className=" text-primary font-4xl">({cardata?.totalElements})</span></h1> </div> 
     <div className=" flex flex-col space-y-5 w-full">
        {cardata?.content?.map((car)=> 
        {
            return  (
                <>
                  <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      style={modalIsOpen ? { ...customStyles, content: { ...customStyles.content, transform: 'translate(-50%, -50%) scale(1)', opacity: 1 } } : customStyles}
        contentLabel="Example Modal"
      >
        <div className="  mx-auto w max-h-screen ">
        <DetailCarReview onClose={closeModal} id={id}></DetailCarReview>
        </div>
        </Modal>
                <div className=" p-5 pb-10 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 flex  space-x-5 border-r-2 border-primary border-opacity-40 ">
                 <div className=" w-10/12 h-56">
                <img src={car.images[0]?.image} alt="" className=" h-56 rounded-lg" />
                </div>
                <div className=" flex flex-col space-y-2 w-full">
                    <div className=" flex space-x-2 w-full">
                    </div>
                    <h5 className=" font-manrope font-bold text-start text-lg">{car.brand} {car.model} {car.year}</h5>
                
                         <div className=" flex text-start items-end ">
                          <p className="text-gray-500 text-xs font-manrope pr-1">Địa diểm:</p>
                          <p className=" text-black text-sm font-manrope pr-2">{car.location.address}, {car.location.district}, {car.location.province}</p>
                     </div>
                     <div className=" flex text-start  items-end">
                          <p className="text-gray-500 text-xs font-manrope pr-1">Số xe:</p>
                          <p className=" text-black text-sm font-manrope pr-2">{car.licensePlates}</p>
                     </div>
                      <div className=" flex text-start  items-end">
                          <p className="text-gray-500 text-xs font-manrope pr-1">Loại xe :</p>
                          <p className=" text-black text-sm font-manrope pr-2">{car.type}</p>
                     </div>
                     <div className=" flex text-start  items-end">
                          <p className="text-gray-500 text-xs font-manrope pr-1">Số km đã đi :</p>
                          <p className=" text-black text-sm font-manrope pr-2">{car.mileage}</p>
                     </div>
                       <div className=" flex text-start  items-end">
                          <p className="text-gray-500 text-xs font-manrope pr-1">Đơn giá thuê:</p>
                          <p className=" text-black text-sm font-manrope pr-2">{formatPrice(car.cost)}</p>
                     </div>
                      <div className=" flex text-start  items-end">
                          <p className="text-gray-500 text-xs font-manrope pr-1">Màu sắc:</p>
                          <p className=" text-black text-sm font-manrope pr-2">{car.color}</p>
                     </div>
                </div>
            </div>
               <div className=" flex flex-col justify-center items-center w-1/4 space-y-2.5">

                                  <button id={car.carId} className=" p-2 px-6 border w-44 border-primary hover:bg-primary hover:text-white rounded-md font-manrope  text-sm font-medium"onClick={(e)=>{changeid(e.target.id); openModal()}}>Xem chi tiết</button> 
                                     
                                  <button id={car.carId} className=" p-2 px-8 w-44 border border-primary hover:bg-primary hover:text-white rounded-md font-manrope  text-sm font-medium"onClick={onClickOpenHandler}>Duyệt đơn</button>          
                                              <button id={car.carId} to="/calendar/12" className=" w-44 p-2 px-9 border hover:bg-primary hover:text-white border-primary rounded-md font-manrope  text-sm font-medium"onClick={onClickCloseHandler}>Huỷ đơn thuê</button> 
        </div>
                </div>
                </>
            )
})}
     </div>
    </motion.section>
  );
};
export default CheckRegisterCar;
