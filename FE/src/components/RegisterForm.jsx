/** @format */
import { useEffect, useState } from "react";
import logo from "../assets/rentocar.svg";
import volang from "../assets/volang.png"
import { motion } from "framer-motion";
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authAction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { changesuccess } from "../features/auth/authSlice";
const RegisterForm = ({CloseRegister}) => {
    const [error, setError] = useState('');
    const [iserror, setisError]= useState(false);
    const dispatch = useDispatch();
    const { loading, error : registererror, success } = useSelector(
    (state) => state.auth
  )
  useEffect(()=>{
     if(registererror)
            {
               Swal.fire({
      title: "Xác thực không thành công",
      text: registererror,
      icon: "error"});
        }
             if(success)
            {
                 Swal.fire({
                title: "Đăng kí thành công!",
                 text: "Vui lòng đăng nhập vào để tiếp tục sử dụng!",
                confirmButtonColor: "#04ABFF",
                 icon: "success"}).then(async () => {
                 dispatch(changesuccess());
                 CloseRegister();
            })}
  },[registererror, success])
  const [info, changeinfo]= useState({
    email : "",
    first_name: "",
    last_name: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  })
    const checkPasswordMatch = () => {
    if (info.password !== info.confirm_password) {
      setError('mật khẩu không giống nhau');
    } else {
      setError('');
    }
  };
  const onChangeHandler =(e)=>{
     changeinfo((prev)=> {return  {...prev,[e.target.id]: e.target.value }});
  }
  console.log(info)
  const onSubmitHandler = async(e)=>{
      e.preventDefault();
       if(!info.email|| !info.first_name || !info.last_name || !info.phone_number || !info.password )
        {
        setisError(true);
        Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: "Kiểm tra bạn đã điền đủ thông tin hay chưa!",
      icon: "error"})
      ;
        }
        else
        {
           dispatch(registerUser({firstName : info.first_name,lastName : info.last_name, email : info.email,phoneNumber : info.phone_number, password : info.password}));
          
        }
  }
  return (
    <section className=" z-50 fixed  max-w-xl w-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2  left-1/2 ">
        <motion.div initial={{ opacity: 0, y:-100 }}
        whileInView={{ opacity: 1, y:0}}   transition={{ delay: 0.1, duration: 0.5 }}  className=" bg-white rounded-xl  py-3 px-8 flex flex-col justify-center relative">
        <button className="flex w-full justify-end fixed top-3 right-3" onClick={CloseRegister}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
      
        </button>
           <h1 className=" text-2xl font-bold font-manrope pb-5 pt-10">Đăng ký</h1>
           <form className=" flex flex-col space-y-2" onSubmit={onSubmitHandler}>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Email:</label>
             <input type="email" id="email" onChange={onChangeHandler}  name="email" className={!info.email&& iserror ?"px-1 py-2.5 border  w-full border-red-600 rounded-lg" : "px-1 py-2.5 border border-slate-300 w-full rounded-lg"}/>
            </div>
            <div className=" flex space-x-5 ">
                <div className=" flex flex-col space-y-1 items-start w-1/3">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Họ :</label>
             <input type="text" id="first_name" onChange={onChangeHandler} name="fname" className={!info.first_name&& iserror ?"px-1 py-2.5 border  w-full border-red-600 rounded-lg" : "px-1 py-2.5 border border-slate-300 w-full rounded-lg"}/>
            </div>
            <div className=" flex flex-col space-y-1 items-start w-2/3">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Tên :</label>
             <input type="text" id="last_name" name="fname" onChange={onChangeHandler}  className={!info.last_name&& iserror ?"px-1 py-2.5 border  w-full border-red-600 rounded-lg" : "px-1 py-2.5 border border-slate-300 w-full rounded-lg"}/>
            </div>
            </div>
          
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn"  className=" font-manrope font-medium px-1 text-gray-600 text-sm">Mật khẩu:</label>
             <input type="password" id="password"  value={info.password} onChange={onChangeHandler} name="fname" onBlur={checkPasswordMatch} className={!info.password&& iserror ?"px-1 py-2.5 border  w-full border-red-600 rounded-lg" : "px-1 py-2.5 border border-slate-300 w-full rounded-lg"}/>
            </div>
            {  error ?
              <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Nhập lại mật khẩu:</label>
             <input type="password" id="confirm_password" value={info.confirm_password} onChange={onChangeHandler}   onBlur={checkPasswordMatch} name="fname" className="px-1 py-2.5 border  w-full border-red-600 rounded-lg"/>
                <p className=" text-xs text-red-600 italic">xác nhận mật khẩu khác với mật khẩu!</p>
            </div>
            :
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Nhập lại mật khẩu:</label>
             <input type="password" id="confirm_password" value={info.confirm_password} onChange={onChangeHandler}   onBlur={checkPasswordMatch} name="fname" className={!info.confirm_password&& iserror ?"px-1 py-2.5 border  w-full border-red-600 rounded-lg" : "px-1 py-2.5 border border-slate-300 w-full rounded-lg"}/>
            </div>
}
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Số điện thoại:</label>
             <input type="text" id="phone_number" name="fname" value={info.phone_number} onChange={onChangeHandler} className={!info.phone_number&& iserror ?"px-1 py-2.5 border  w-full border-red-600 rounded-lg" : "px-1 py-2.5 border border-slate-300 w-full rounded-lg"}/>
            </div>
            <div className=" py-5">
            <button className=" py-4 px-6 w-9/12 text-white bg-primary font-manrope font-bold rounded-lg" >Đăng kí</button>
            </div>
           </form>
      </motion.div>
    </section>
  );
};
export default RegisterForm;
