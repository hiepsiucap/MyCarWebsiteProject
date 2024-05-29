import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { getRequest, postRequest } from "../Utiliz/services";
import 'sweetalert2/src/sweetalert2.scss'
import { formatDate } from "../Utiliz/Constants";
import { changeinfo } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { patchRequest } from "../Utiliz/services";
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
Modal.setAppElement('#root');
const AccountDetail = () => {
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
  const inputRef= useRef();
  const dispatch= useDispatch();
  const inputRef2= useRef();
  const [selectedFile, setselectedFile] =useState(null);
    const [selectedFile1, setselectedFile1] =useState(null);
        const [imageloading, setimageloading]= useState(false);
          const [imageloading1, setimageloading1]= useState(false);
  const [userInfo,ChangeUserInfo]=useState({
    user_id : "",
    first_name : "",
    last_name: "",
    ava: "",
    email: "",
    phone_number: "",
    create_date: "",
    driverLicenseCheck: "",
    driverLicense: "",

  })
  const [totalrent, changtotalrent]= useState(0);
  useEffect(()=>{
    const getData=async()=> {
   const responedt=await getRequest("http://localhost:8080/users/numofrentals");
   changtotalrent(Number(responedt.message));
    }
    getData();
  },[])
  console.log(userInfo)
  useEffect(()=>{
    const ChangeAva=async()=>{
      setimageloading(true);
    const data = new FormData();
    console.log(selectedFile1)
    data.append('image', selectedFile1);
    try {
      const response = await fetch('http://localhost:8080/users/avatar', {
        method: 'POST',
         withCredntials: true,
    credentials: "include",
    headers: {
          Accept: "application/json",  // Đặt Accept header thành application/json
        },
        body: data,
      });
      if (!response.ok) {
         setimageloading(false);
       return Swal.fire({
      title: "Thay đổi ảnh đại diện không thành công",
      text: "Vui lòng kiểm tra lại kết nối!",
      icon: "error"
    }
  )
 
      }
      else
      {

      Swal.fire({
      title: "Thay đổi ảnh đại diện thành công!",
      icon: "success"
    })
    const dataresponse= await response.json();
    dispatch(changeinfo(dataresponse));
    ChangeUserInfo((prev)=>{
          return{...prev, ava: dataresponse?.avatar }
    })
        setimageloading(false);
  }
    } catch (error) {
          setimageloading(false);
      return Swal.fire({
      title: "Thay đổi ảnh đại diện không thành công",
      text: "Vui lòng kiểm tra lại mạng và dung lượng của ảnh!",
      icon: "error"
    })
    }
    };
        if(!selectedFile1) return;
    else
    ChangeAva();
  },[selectedFile1])
  useEffect(()=>{
      const GetData=async()=>
        {
      const data= await getRequest("http://localhost:8080/users/current");
      console.log(data);
        
        ChangeUserInfo({
          user_id : data?.userId,
       first_name : data?.firstName,
      last_name: data?.lastName,
      ava: data?.avatar,
     email: data?.email,
     phone_number: data?.phoneNumber,
     address: data?.address,
     create_date: data?.create_date,
     driverLicense: data?.driverLicense,
     driverLicenseCheck: data?.driverLicenseCheck,
        })
      }
      GetData();
  },[])
  const handleOnChange = (event)=> {
    if(event.target.files && event.target.files.length> 0)
      {
          console.log(URL.createObjectURL(event.target.files[0]))
        setselectedFile(event.target.files[0]);
      }
  }
    const handleOnChange1 = (event)=> {
    if(event.target.files && event.target.files.length> 0)
      {
          console.log(URL.createObjectURL(event.target.files[0]))
        setselectedFile1(event.target.files[0]);
      }
  }
  const handleOnChangeInfo =(event)=>{
    ChangeUserInfo((prev)=>{
      return {...prev, [event.target.id]: event.target.value}
    })
  }
  const onChooseFile =()=> {
    inputRef.current.click();
  }
  const onChooseFile2 =()=>{
      inputRef2.current.click();
  }
  const removeFile =() => {
    setselectedFile(null);
  }
  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    if(!userInfo.first_name|| !userInfo.last_name || !userInfo.phone_number)
      {
         Swal.fire({
      title: "Cập nhật thông tin thất bại!",
      text: "Vui lòng điền đầy đủ thông tin",
      icon: "error"
    });
      }
    const response=  await patchRequest("http://localhost:8080/users",{ firstName:userInfo.first_name ,
    lastName:userInfo.last_name, phoneNumber: userInfo.phone_number})
    if(response.error)
      {
         Swal.fire({
      title: "Cập nhật thông tin thất bại!",
      text: "Bạn vui lòng thử lại!",
      icon: "error"
    });
      }
      else{
        Swal.fire({
      title: "Cập nhật thông tin thành công!",
      icon: "success"
    });
       dispatch(changeinfo(response)); 
         
  }
}
const [password, changepassword] = useState({
  currentPassword: "",
  newPassword: "",

})
const ChangePasswordSubmit =async(e)=>{
  e.preventDefault();
  if(!password.currentPassword|| !password.newPassword)
    {
      return  Swal.fire({
      title: "Vui lòng điền đầy đủ thông tin!",
      icon: "error"
    });
    }
    const response= await patchRequest("http://localhost:8080/users/changepassword",password);
    if(response.error)
      {
         return  Swal.fire({
      title: "Sai thông tin!",
      text: response.message,
      icon: "error"
    });
      }
      else{
         Swal.fire({
      title: "Thay đổi mật khẩu thành công!",
      icon: "success"
    });
      }
}
  const ConfirmHandler =()=>{
    Swal.fire({
  title: "Bạn có muốn thay đổi?",
  text: "Thông tin trước đó của bạn sẽ bị xoá",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  cancelButtonText: "Huỷ bỏ",
  confirmButtonText: "Xác nhận"
}).then(async (result) => {
  if (result.isConfirmed) {
     setimageloading1(true);
    const data = new FormData();
    console.log(selectedFile)
    data.append('image', selectedFile);
    try {
      const response = await fetch('http://localhost:8080/users/license', {
        method: 'POST',
         withCredntials: true,
    credentials: "include",
    headers: {
          Accept: "application/json",  // Đặt Accept header thành application/json
        },
        body: data,
      });
      if (!response.ok) {
         setimageloading1(false);
       return Swal.fire({
      title: "Thay đổi ảnh giấy phép không thành công",
      text: "Vui lòng kiểm tra lại kết nối!",
      icon: "error"
    }
  )
 
      }
      else
      {

      Swal.fire({
      title: "Thay đổi GPLX thành công!",
      icon: "success"
    })
    const dataresponse= await response.json();
    ChangeUserInfo((prev)=>{
          return{...prev, driverLicense: dataresponse?.driverLicense }
    })
        setimageloading1(false);
  }
    } catch (error) {
          setimageloading1(false);
      return Swal.fire({
      title: "Thay đổi ảnh giấy phép thành công",
      text: "Vui lòng kiểm tra lại mạng và dung lượng của ảnh!",
      icon: "error"
    })
    
  }
}});
  }
  return (
    <div className=" flex flex-col space-y-5 w-full">
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
    transition={{ duration: 0.5 }}  className="bg-white rounded-xl py-6 mx-auto w-3/4 flex space-y-2 pb-12 flex-col items-center">
  <p className=" font-bold text-2xl text-center font-manrope">Đổi mật khẩu</p>
     <form onSubmit={ChangePasswordSubmit} className=" flex-col space-y-3 w-3/4 items-start py-8">
          <div className=" flex flex-col space-y-1">
             <label for="city" className=" text-sm font-manrope text-gray-500 ">Mật khẩu cũ:</label>
              <input type="password" name="currentPassword" id="currentPassword" value={password.currentPassword} onChange={(e)=>{ changepassword((prev)=>{return {...prev,currentPassword: e.target.value}})}} className=" p-3 border border-gray-400 rounded-md">
        
              </input>
        </div>
          <div className=" flex flex-col space-y-1">
             <label for="city" className=" text-sm font-manrope text-gray-500 ">Mật khẩu mới:</label>
              <input type="password" name="newPassword" id="currentPassword" value={password.newPassword} onChange={(e)=>{ changepassword((prev)=>{return {...prev,newPassword: e.target.value}})}} className=" p-3 border border-gray-400 rounded-md">
        
              </input>
        </div>
</form>
      <button className=" font-bold w-1/2 font-manrope font-lg py-3 px-4 mx-auto bg-primary text-white rounded-md" onClick={ChangePasswordSubmit}>Xác nhận</button>
  </motion.div>
      </Modal>
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" bg-white rounded-lg px-8 py-6 w-full">
      <div className=" flex justify-between items-center">
        <h1 className=" text-2xl font-bold font-manrope"> Thông tin tài khoản</h1>
        <div className=" flex items-end space-x-1 p-4 border-2 border-primary rounded-lg "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04ABFF" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
</svg>
       <h1 className="  text-2xl font-manrope font-bold text-primary">{totalrent}</h1>
       <h1 className=" pb-1  font-manrope text-sm text-gray-500">chuyến</h1>
</div>
      </div>
      <div className=" flex space-x-16 pt-12 items-center">
        <div className=" flex flex-col space-y-5 items-center  w-1/3">
          <div className="">
             <img src={userInfo.ava} alt="" className=" w-44 h-44 rounded-full" />
             </div>
              <h5 className=" text-xl font-manrope font-medium">{userInfo.first_name} {userInfo.last_name}</h5>
              <h5 className=" text-sm text-gray-400  font-manrope font-medium">Tham gia: {formatDate(userInfo.create_date)}</h5>
              { imageloading
              ?
              <button disabled className=" w-28 h-10 bg-primary font-manrope text-white text-sm  rounded-lg flex justify-center items-center bg-opacity-80" onClick={onChooseFile2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" animate-spin w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
</button>
              :
              <button className=" w-28 h-10 bg-primary font-manrope text-white text-sm  rounded-lg" onClick={onChooseFile2}>Thay đổi ảnh</button>
}
        </div>
          <form className=" flex flex-col space-y-2 w-2/3" onSubmit={onSubmitHandler}>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Số điện thoại:</label>
             <input type="text" id="phone_number" value={userInfo.phone_number} onChange={handleOnChangeInfo} name="fname" className="px-1 py-2.5 border border-slate-300 w-5/6 rounded-lg"/>
            </div>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Họ :</label>
             <input type="text" id="first_name" value={userInfo.first_name} name="fname" onChange={handleOnChangeInfo} className="px-1 py-2.5 border border-slate-300 w-5/6 rounded-lg"/>
            </div>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn"  className=" font-manrope font-medium px-1 text-gray-600 text-sm">Tên:</label>
             <input type="text" id="last_name" name="fname" value={userInfo.last_name} onChange={handleOnChangeInfo} className="px-1 py-2.5 border border-slate-300 w-5/6 rounded-lg"/>
            </div>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Email</label>
             <input disabled type="text" id="email" value={userInfo.email} name="fname" className="px-1 py-2.5 border border-slate-300 w-5/6 rounded-lg"/>
            </div>
            <div type="button" className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Mật khẩu</label>
               <div className=" flex  w-full space-x-3 items-center">
             <input  disabled type="password" id="email" value={userInfo.email} name="fname" className="px-1 py-2.5 border border-slate-300 w-5/6 rounded-lg"/>
<div onClick={openModal}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-5 h-5">
  
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</div>

             </div>
            </div>
            <div className=" py-5">
            <input type="file" ref={inputRef2} accept="image/png, image/gif, image/jpeg" onChange={handleOnChange1} className=" hidden"></input>
            <button className=" py-4 px-6 w-1/3 text-white bg-primary font-manrope font-bold rounded-lg" >Thay đổi</button>
            </div>
           </form>
      </div>
    </motion.section>
     <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" bg-white rounded-lg px-8 py-6 w-full">
      <div className=" flex justify-between items-center">
        <div className=" flex items-end space-x-2">
        <h1 className=" text-2xl font-bold font-manrope"> Giấy phép lái xe</h1>
         {userInfo.driverLicenseCheck == null &&
         <>
        <p className="px-2 py-1 rounded-full space-x-1 flex bg-red-200  -translate-y-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF0000" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 <p className=" text-xs text-gray-800 font-manrope ">Chưa xác thực</p>
  </p>
 </>
}
{userInfo.driverLicenseCheck == 'N' &&
         <>
        <p className="px-2 py-1 rounded-full space-x-1 flex bg-red-200  -translate-y-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF0000" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 <p className=" text-xs text-gray-800 font-manrope ">Xác thực thất bại</p>
  </p>
 </>
}
{userInfo.driverLicenseCheck == 'Y' &&
         <>
        <p className="px-2 py-1 rounded-full space-x-1 flex  bg-green-200  -translate-y-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 <p className=" text-xs text-gray-800 font-manrope ">Xác thực thành công</p>
  </p>
 </>
}
       
        </div>
        <div>
          <button className=" font-manrope text-sm px-4 py-2">Huỷ</button>
          <button className=" font-manrope text-sm px-4 py-2 bg-primary rounded-lg text-white" onClick={ConfirmHandler}>Xác nhận</button>
        </div>
      </div>
      <div className=" flex space-x-10 pt-8 justify-center ">
    
          
           <div className=" w-2/3 h-full flex-col py-6">
            <input type="file" ref={inputRef} accept="image/png, image/gif, image/jpeg" onChange={handleOnChange} className=" hidden"></input>
           { !imageloading1
           ?
           <button className=" relative w-full flex flex-col h-full px-24 py-36 border border-dashed border-primary rounded-lg justify-center items-center" onClick={onChooseFile}>
            { selectedFile &&  <img className=" absolute w-full h-full scale-95 rounded-md" src={selectedFile !==null && URL.createObjectURL(selectedFile)} alt="" />}
             { !selectedFile &&userInfo.driverLicense &&  <img className=" absolute w-full h-full scale-95 rounded-md" src={userInfo.driverLicense} alt="" />}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#04ABFF" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>      
            <p className=" font-manrope font-bold text-primary text-sm pt-2">Chọn hình ảnh giấy phép</p>
           </button>
           :
             <button disabled className=" relative w-full flex flex-col h-full px-24 py-36 border border-dashed border-primary rounded-lg justify-center items-center" onClick={onChooseFile}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" animate-spin w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
         
           </button>
}
           <div className="pt-6"></div>
           <div  className={selectedFile?.name ?" p-2 rounded-full bg-blue-300 text-sm text-black font-bold font-manrope w-2/3 mx-auto overflow-hidden" : " p-2 rounded-full bg-blue-300 text-sm text-white font-manrope w-2/3 mx-auto"}>
                    {selectedFile?.name || 'Vui lòng thêm file vào ô trống'}
           </div>
           </div>
      </div>
    </motion.section>
    </div>
  );
};
export default AccountDetail;
