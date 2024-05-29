/** @format */

import { useState } from "react";
import { NavBar, Footer, Modal , ChooseDate, Modals} from "../components";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
    const {userInfo} = useSelector(
    (state) => state.auth
  )
  const [login, openlogin]= useState(false);
    const [register, openregister]= useState(false);
    const [forgot, changeforgot]=useState(false);
    const CloseForgot= ()=> {
       changeforgot(false);
    }
     const OpenForgot= ()=> {
       changeforgot(true);
    }
    const ReverseForgot =async()=> {
      OpenForgot(); 
      Closelogin();
    }
    const ReverseLogin = ()=> {
      CloseForgot();
      Openlogin();
    }
    const Openlogin =()=>
    {
        openlogin(true);
    }
    const OpenRegister =()=>
    {
        openregister(true);
    }
    const Closelogin =()=>
    {
        openlogin(false);
    }
    const CloseRegister =()=>
    {
        openregister(false);
    }
  return (
    <section className=" relative">
          
     {login && <Modal OpenForgot={OpenForgot} Closelogin={Closelogin} ReverseForgot={ReverseForgot} OpenRegister={OpenRegister} login={login}></Modal>}
          {forgot && <Modal CloseForgot={CloseForgot} forgot={forgot} ReverseLogin={ReverseLogin} ></Modal>}
          {register && <Modal CloseRegister={CloseRegister} register={register}></Modal>}
      <NavBar Openlogin={Openlogin} OpenRegister={OpenRegister}></NavBar>
      {/* <NavBar></NavBar> */}
      <main className="">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </section>
  );
};
export default RootLayout;
