/** @format */
import { Link } from "react-router-dom";
import logo from "../assets/rentocar.svg";
import volang from "../assets/volang.png"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from "react";
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { postRequest } from "../Utiliz/services";
import { registerUser, userLogin } from "../features/auth/authAction";
const LoginForm = ({Closelogin, ReverseRegister, OpenForgot,ReverseForgot}) => {
    const navigate =useNavigate()
    const [data, changedata] = useState({
      email: "",
      password: "",
    })
     const dispatch = useDispatch()
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
    useEffect(() => {
    if (userInfo) {
      navigate("/");
      Closelogin(); 
    } else if (error) {
      Swal.fire({
        title: "Vui lòng điền đủ thông tin!",
        text: error,
        icon: "error"
      });
    }
  }, [userInfo, error, navigate]);
    const [emailError, ChangeEmailError]= useState("");
    const [passwordError, ChangePasswordError]= useState("");
     const onSubmitHandler =async(e)=> {
      e.preventDefault();
           if(!data.email&& !data.password)
            {
              ChangeEmailError("vui lòng nhập email");
              ChangePasswordError("vui lòng nhập mật khẩu");
                     Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: "Kiểm tra bạn đã điền đủ thông tin hay chưa!",
      icon: "error"});
            }
            else
          if(!data.email)
            {
                      ChangeEmailError("vui lòng nhập email");
                     Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: "Kiểm tra bạn đã điền đủ thông tin hay chưa!",
      icon: "error"});
            }
            else
             if(!data.password)
            {
                      ChangePasswordError("vui lòng nhập mật khẩu");
                       Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: "Kiểm tra bạn đã điền đủ thông tin hay chưa!",
      icon: "error"});
            }
            else{
              dispatch(userLogin({data}));
            }
     }
     console.log(userInfo)
  return (
    <section className=" z-50 fixed max-w-xl w-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2  left-1/2 ">
      <motion.div initial={{ opacity: 0, y:-100 }}
        whileInView={{ opacity: 1, y:0 }}   transition={{ delay: 0.1, duration: 0.5 }}  className=" bg-white rounded-xl  py-3 px-8 flex flex-col justify-center relative">
        <button className="flex w-full justify-end fixed top-3 right-3" onClick={Closelogin}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        </button>
           <h1 className="  text-3xl font-bold font-manrope pb-12 pt-12">Đăng nhập</h1>
           <form className=" flex flex-col space-y-5 " onSubmit={onSubmitHandler}>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Tên đăng nhập:</label>
             <input type="text" id="email" name="fname" value={data.email} onChange={(e)=> { changedata((prev)=>{return {...prev, email: e.target.value}})}} className={emailError ?"px-1 py-2.5 border border-red-600 w-full rounded-lg": "px-1 py-2.5 border border-slate-300 w-full rounded-lg"} />
              {emailError && <p className=" italic text-xs text-red-600">{emailError}</p>}
            </div>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Mật khẩu:</label>
             <input type="password" id="password" name="fname" value={data.password} onChange={(e)=> { changedata((prev)=>{return {...prev, password: e.target.value}})}} className={passwordError ?"px-1 py-2.5 border border-red-600 w-full rounded-lg": "px-1 py-2.5 border border-slate-300 w-full rounded-lg"} />
              {passwordError && <p className=" italic text-xs text-red-600">{passwordError}</p>}
            <div className=" flex justify-end w-full space-x-2 pt-2 pb-5">
                <button type="button" className=" font-manrope font-medium text-primary text-sm" onClick={ReverseForgot}>Quên mật khẩu ?</button>
                     <button className=" font-manrope font-medium text-primary text-sm" onClick={ReverseRegister}>Chưa có tài khoản?</button>
            </div>
            </div>
                <div className=" py-5">
                 { loading ?
                  <button disabled  className=" py-4 px-6 w-9/12 text-white bg-primary bg-opacity-25 font-manrope font-bold rounded-lg">Đăng nhập</button>
                  :
            <button  className=" py-4 px-6 w-9/12 text-white bg-primary font-manrope font-bold rounded-lg">Đăng nhập</button>
                 }
            </div>
           </form>
      </motion.div>
    </section>
  );
};
export default LoginForm;
