/** @format */
import logo from "../assets/rentocar.svg";
import caricon from "../assets/car.svg"
import cayxang from "../assets/cayxang.svg"
import giamgia from "../assets/giamgia.svg"
import tien from "../assets/tien.svg"
import Modal from 'react-modal';
import { motion } from "framer-motion";
import company from "../assets/company.svg"
import ChooseCompany from "./CarCompany";
import FilterPrice from "./FilterPrice";
import ChooseModel from "./ModelCar";
import ChooseFuels from "./ChooseFuel";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetfilter } from "../features/listcar/CarSlice";
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
const FindCar = () => {
  const dispatch = useDispatch();
   const [modalIsOpen, setIsOpen] = useState(false);
   const [filtername, setfilter ]= useState("");
  function  openModal ({name} ) {
    setfilter(name);
    setIsOpen(true);

  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

const {     
        rangeprice,
        brand,
        fuel ,
        error,
        province,
        district,
        type } = useSelector(state => state.listcar);

  return (
    <section className="md:container mx-auto pt-5 flex flex-col items-center space-y-5">
          <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      style={modalIsOpen ? { ...customStyles, content: { ...customStyles.content, transform: 'translate(-50%, -50%) scale(1)', opacity: 1 } } : customStyles}
        contentLabel="Example Modal"
      >
      { filtername==="company" &&  <ChooseCompany close={closeModal}></ChooseCompany>}
      { filtername==="model" &&  <ChooseModel close={closeModal}></ChooseModel>}
      { filtername==="price" &&  <FilterPrice close={closeModal}></FilterPrice>}
      { filtername==="fuel" &&  <ChooseFuels close={closeModal}></ChooseFuels>}
      </Modal>
           <motion.h1  initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} className=" text-4xl font-bold font-manrope">Chọn xe phù hợp với bạn</motion.h1> 
           <div className=" flex bg-slate-200 justify-between rounded-full px-5 items-center "> 
            <input type="text" className="bg-slate-200 px-5 py-2" placeholder="Tìm kiếm bằng AI" >
                </input>
                <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
</svg>
</button>
                </div> 
                <div className=" flex space-x-5">
                    <motion.button initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}   transition={{ delay: 0.2, duration: 0.5 }}    whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 },
  }}
  whileTap={{ scale: 0.9 }} onClick={()=>{dispatch(resetfilter())}}   className={brand || type.length>0 || rangeprice[0] !=0 || rangeprice[1]!=100 || fuel.length>0 ? "px-5 py-2  text-black  text-sm rounded-3xl font-medium font-manrope border" : "px-5 py-2 bg-primary text-white text-sm rounded-3xl font-medium font-manrope border"}>Tất cả</motion.button>
                          <motion.button initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}  transition={{ delay: 0.2, duration: 0.5 }}     whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 },
  }}
  whileTap={{ scale: 0.9 }} onClick={()=>{openModal({name:"company"})}} className={brand ? "flex space-x-1 items-center px-5 py-2 bg-white border-primary rounded-3xl border " : "flex space-x-1 items-center px-5 py-2 bg-white rounded-3xl border "}><img src={company} className=" w-6 h-6" alt="" /><p>Hãng xe</p></motion.button>
                        <motion.button initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}  transition={{ delay: 0.2, duration: 0.5 }}     whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 },
  }}
  whileTap={{ scale: 0.9 }} onClick={()=>{openModal({name:"model"})}} className={type.length>0 ? "flex space-x-1 items-center px-5 py-2 bg-white border-primary rounded-3xl border " : "flex space-x-1 items-center px-5 py-2 bg-white rounded-3xl border "}><img src={caricon} alt="" /><p>Loại xe</p></motion.button>
   <motion.button onClick={()=>{openModal({name:"price"})}}  initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}   transition={{ delay: 0.2, duration: 0.5 }}  whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 },
  }}
  whileTap={{ scale: 0.9 }} className={rangeprice[0]!==0 || rangeprice[1]!=100 ? "flex space-x-1 items-center px-5 py-2 bg-white border-primary rounded-3xl border " : "flex space-x-1 items-center px-5 py-2 bg-white rounded-3xl border "}><img src={giamgia} alt="" /><p>Giá tiền</p></motion.button>
                        <motion.button initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}   transition={{ delay: 0.2, duration: 0.5 }}    whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 },
  }}
  whileTap={{ scale: 0.9 }} onClick={()=>{openModal({name:"fuel"})}} className={fuel.length>0? "flex space-x-1 items-center px-5 py-2 bg-white border-primary rounded-3xl border " : "flex space-x-1 items-center px-5 py-2 bg-white rounded-3xl border "}><img src={cayxang} alt="" /><p>Nhiên liệu</p></motion.button>
                        <motion.button  initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}  transition={{ delay: 0.2, duration: 0.5 }}   whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 },
  }}
  whileTap={{ scale: 0.9 }} className="flex space-x-1 items-center px-5 py-2 bg-white rounded-3xl border"><img src={giamgia} alt="" /><p>Giảm giá</p></motion.button>
                </div>
    </section>
  );
};
export default FindCar;
