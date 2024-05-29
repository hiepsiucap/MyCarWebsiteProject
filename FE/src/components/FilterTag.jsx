import location from "../assets/location.svg"
import calendar from "../assets/calendar.svg"
import caricon from "../assets/car.svg"
import cayxang from "../assets/cayxang.svg"
import car from "../assets/car.svg"
import giamgia from "../assets/giamgia.svg"
import FilterLocation from "./FilterLocation"
import tien from "../assets/tien.svg"
import soghe from "../assets/soghe.svg"
import cuasotroi from "../assets/cuasotroi.svg"
import { motion } from "framer-motion"
import { useState } from "react"
import Modal from "react-modal"
import ChooseCompany from "./CarCompany"
import ChooseFuels from "./ChooseFuel"
import company from "../assets/company.svg"
import ChooseModel from "./ModelCar"
import FilterPrice from "./FilterPrice"
import DateFilter from "./DateFilter"
import { resetfilter } from "../features/listcar/CarSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
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
const FilterTag = () => {
      const {     
        rangeprice,
        brand,
        fuel ,
        error,
        province,
        district,
        type } = useSelector(state => state.listcar);
    const [active, setactive] = useState(false);
    window.addEventListener("scroll", function ()
{
    if(this.window.scrollY >100)
    {
        setactive(true)
    }
    else
    {
        setactive(false)
    }
})
console.log(rangeprice,
        brand,
        fuel ,
        error,
        province,
        district,
        type );
   const [modalIsOpen, setIsOpen] = useState(false);
   const dispatch =useDispatch();
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
  return (
    <>
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
      { filtername==="date" &&  <DateFilter close={closeModal}></DateFilter>}
    { filtername==="location" &&  <FilterLocation close={closeModal}></FilterLocation>}
      </Modal>
    <div className=" border-t"></div>
    <section className={active ?"w-full fixed top-0 shadow-xl py-4 bg-slate-200" :"w-full  shadow-xl py-4 transition-colors "}>
        <div className=" flex space-x-6 justify-center pb-4">
            <button onClick={()=>{openModal({name:"location"})}}  className=" flex space-x-2">
                <img src={location} alt="" />
                <p className=" font-manrope">{province ? `${district || ""},${province}`: "Chọn địa điểm nhận xe"}</p>
            </button>
             <button className=" flex space-x-2" onClick={()=>{openModal({name:"date"})}}>
                <img src={calendar} alt="" />
                <p className=" font-manrope">21:00, 30/04/2024 - 20:00, 01/05/2024</p>
            </button>
        </div>
            <div className=" flex space-x-5 justify-center">
                    
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
    </>
  );
};
export default FilterTag;
