/** @format */
import { motion , AnimatePresence } from "framer-motion"
import { useSpring, animated } from "react-spring";

import FilterLocation from "./FilterLocation"
import { useState } from "react"
import Modal from "react-modal"
import DateFilter from "./DateFilter"
import { Link } from "react-router-dom";
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
const Hero = () => {
   const Number = ({n})=> {
      const {number} = useSpring({
        from: {number: 0},
        number: n,
        delay: 100,
        config: {mass:1, tension:20, friction:10}
      })
      return < animated.span className=" text-primary">{number.to((n)=> n.toFixed(0))}</animated.span>
  }
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
  return (
   <section className=" relative z-0 pt-12 pb-20 md:container mx-auto">
     <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      style={modalIsOpen ? { ...customStyles, content: { ...customStyles.content, transform: 'translate(-50%, -50%) scale(1)', opacity: 1 } } : customStyles}
        contentLabel="Example Modal"
      >
      { filtername==="date" &&  <DateFilter close={closeModal}></DateFilter>}
    { filtername==="location" &&  <FilterLocation close={closeModal}></FilterLocation>}
      </Modal>
    <motion.div
   initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }} className="flex flex-col space-y-6 -z-9 -z-10  items-center relative bg-my-image h-auto bg-no-repeat rounded-lg py-36">
     <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="title"
        >
          <h1 className="w-3/4 mx-auto text-6xl font-bold font-manrope text-white leading-relaxed">
          Mycar - Đồng hành cùng bạn trên mọi nẻo đường
          </h1>
        </motion.div>
      </AnimatePresence>
      <div className=" border bottom-2 border-white w-1/2"></div>
     <p className=" text-white text-xl font-manrope flex items-end"> Được sự tin tưởng đặt biệt với hơn <div className=" w-20 font-manrope text-2xl"> <Number n={10000}></Number> </div> khách hàng khắp thế giới</p>
       <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className="flex space-x-5 justify-start absolute z-10 -bottom-11 shadow-lg rounded-xl w-8/12 bg-white p-5">
         <div className="flex flex-col w-1/3 pr-5 pl-5 border-r border-gray-300">
             <div className="flex space-x-2 items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                </div>
                <p className=" text-sm text-slate-400">Địa điểm</p>
             </div>
             <button onClick={()=>{openModal({name:"location"})}} className=" px-6 flex justify-between items-center space-x-2">
                <p>Hồ Chí Minh</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

             </button>
         </div>
           <div className="flex flex-col w-5/12 ">
             <div className="flex space-x-2 items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>


                </div>
                <p className=" text-sm text-slate-400">Thời gian thuê</p>
             </div>
             <button onClick={()=>{openModal({name:"date"})}} className=" flex justify-between items-center space-x-2">
                <p>8:00, 30/05/2024 - 20:00, 31/05/2024</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

             </button>
         </div>
         <div className="pl-10">
          <div className=" pb-3"></div>
         <Link to="/car" className=" bg-primary text-white px-8 py-3 rounded-lg" >Tìm xe</Link>
         </div>
      </motion.div>
</motion.div>
    
    </section>
  );
};
export default Hero;
