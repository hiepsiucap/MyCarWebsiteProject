
import detail1 from "../assets/detail1.png"
import start from "../assets/start.svg"
import discount from "../assets/discount.svg"
import diadiem from "../assets/diadiem.svg"
import { motion } from "framer-motion"
import { favouritecar, formatDate, formatPrice } from "../Utiliz/Constants"
import { useEffect, useState } from "react"
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { getRequest, postRequest } from "../Utiliz/services"
import Modal from "react-modal"
const customStyles = {
   content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
     border: '0',
     padding: '0',
     zIndex: '50',
      width: '50%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the color and opacity here
  }
};
const ComplainCheck = () => {
     const [modalIsOpen, setIsOpen] = useState(false);
  function  openModal () {
    setIsOpen(true);
  }
     function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  } 
  const [reload, changereload] =useState("");
  const onCheckHandler=async(e)=>{
    const response = await postRequest(`http://localhost:8080/users/licensecheck?id=${e.target.id}&check=true`,{});
    if(response.error)
        {
            return Swal.fire({
        title: "Xác nhận thất bại",
        text: response.message,
        icon: "error"
      });
        }
      Swal.fire({
        title: "Xác nhận thành công",
        icon: "success"
      });
      changereload("reload");
  }
    const onUnCheckHandler=async(e)=>{
    const response = await postRequest(`http://localhost:8080/users/licensecheck?id=${e.target.id}&check=false`,{});
    if(response.error)
        {
            return Swal.fire({
        title: "Huỷ Xác nhận thất bại",
        text: response.message,
        icon: "error"
      });
        }
      Swal.fire({
        title: "Xác nhận huỷ thành công",
        icon: "success"
      });
      changereload("reload");
  }
  const [data, changedata]= useState(null);
  useEffect(()=>{
    const getData=async()=>{
    const responsedata= await getRequest("http://localhost:8080/users/staff/license");
    if(responsedata.error)
      {
        console.log(responsedata.message);
      } 
      else
      {
         changedata(responsedata);
      }
    }
    getData();
  },[reload])
  const [urlimage, changeurl] = useState("");
  console.log(data);
  return (
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" w-full">
     <h1 className=" text-3xl font-manrope font-bold text-start pb-5">Khiếu nại cần xử lý</h1>
     <div className=" flex flex-col space-y-5 w-full">
       {data?.map((user)=>
       {
        return (
            <>
             <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      style={modalIsOpen ? { ...customStyles, content: { ...customStyles.content, transform: 'translate(-50%, -50%) scale(1)', opacity: 1 } } : customStyles}
        contentLabel="Example Modal"
      >
      <img src={urlimage} alt="" />
      </Modal>
        <div className=" p-5 pb-10 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 flex items-center space-x-5 border-r-2 border-primary border-opacity-40 ">
                <img src={user.avatar} alt="" className=" w-48 h-48 border-2 border-primary rounded-full" />
                <div className=" flex flex-col space-y-2 w-full">
                    <h5 className=" font-manrope font-bold text-start text-2xl pb-2">  {user.firstName} {user.lastName}</h5>
                     <div className=" flex space-x-1">
                          <p className=" text-gray-500 text-sm font-manrope pr-2"></p>
                            <p className=" text-gray-500 text-sm font-manrope pr-2">Email: {user.email}</p>
                     </div>
                      <div className=" flex space-x-1">
                          <p className=" text-gray-500 text-sm font-manrope pr-2"></p>
                            <p className=" text-gray-500 text-sm font-manrope pr-2">Điện thoại: {user.phoneNumber}</p>
                     </div>
                        <div className=" flex space-x-1">
                          <p className=" text-gray-500 text-sm font-manrope pr-2"></p>
                            <p className=" text-gray-500 text-sm font-manrope pr-2">Ngày tạo: {formatDate(user.create_date)}</p>
                     </div>
                       <div className=" flex space-x-1">
                          <p className=" text-gray-500 text-sm font-manrope pr-2"></p>
                            <p className=" text-gray-500 text-sm font-manrope pr-2 text-red-500">Trạng thái: {user.driverLicenseCheck == null && "Chưa xét duyệt"}</p>
                     </div>
                       
                </div>
            </div>
               <div className=" flex flex-col justify-center items-center w-1/4 space-y-3"> 
                 <button className=" p-2 px-5 w-40 bg-primary rounded-md font-manrope text-white text-sm font-medium" onClick={()=>{changeurl(user.driverLicense);openModal();}}>Xem bằng lái</button> 
                <button className=" p-2 px-8 border w-40 border-primary rounded-md font-manrope  text-sm font-medium" onClick={onUnCheckHandler}>Từ chối duyệt</button> 
                <button id={user.userId} className=" p-2 px-8 border w-40 border-primary rounded-md font-manrope  text-sm font-medium" onClick={onCheckHandler}>Duyệt bằng lái</button> 
        </div>
                </div>
                </>
        )})}
     </div>
    </motion.section>
  );
};
export default ComplainCheck;
