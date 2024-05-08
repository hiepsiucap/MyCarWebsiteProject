/** @format */
import { MainDetail, ChooseDate } from "../components";
import Modal from 'react-modal';
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
Modal.setAppElement('#root');
const DetailCar = () => {
  useEffect(() => {
  // Scroll to the top when the component mounts
  window.scrollTo(0, 0);
}, []);
  return (
    <motion.div initial={{ opacity: 0, x:-50 }}
        animate={{ opacity: 1, x:0}}   transition={{ delay: 0.1, duration: 0.5 }} className="z-0">
      <MainDetail></MainDetail>
      <ChooseDate></ChooseDate>
    </motion.div>
  );
};
export default DetailCar;
