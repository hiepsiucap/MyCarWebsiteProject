/** @format */
import { useState } from "react";
import logo from "../assets/rentocar.svg";
import volang from "../assets/volang.png"
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPassword from "./ForgotPassword";
const Modal = ({login,forgot,ReverseForgot,OpenForgot, register, Closelogin,CloseForgot, CloseRegister, OpenRegister,ReverseLogin}) => {
    const ReverseRegister= ()=> {
        Closelogin();
        OpenRegister();
    }
  return (
    <>
   <div className=" w-full h-full fixed bg-black bg-opacity-35 z-50 " onClick={()=> {
    if(login)
    Closelogin();
    if(register)
    CloseRegister();
    if(forgot)
    CloseForgot();
   }}/>
    {
        login && <LoginForm Closelogin={Closelogin} ReverseForgot={ReverseForgot} OpenForgot={OpenForgot} ReverseRegister={ReverseRegister}></LoginForm>
    }
     {
        forgot && <ForgotPassword CloseForgot={CloseForgot} ReverseLogin={ReverseLogin}></ForgotPassword>
    }
     {
        register && <RegisterForm CloseRegister={CloseRegister}></RegisterForm>
    }
    </>
  );
};
export default Modal;
