import { motion, } from "framer-motion"
import xe7minivan from "../assets/xe7minivan.png"
import xe7mpv from "../assets/xe7mpv.png"
import xe7suv from "../assets/xe7suv.png"
import xe5suv from "../assets/xe5suv.png"
import xe4sedan from "../assets/xe4sedan.png"
import xe4mini from "../assets/xe4mini.png"
import { useDispatch } from "react-redux"
import { changetype } from "../features/listcar/CarSlice"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
const ChooseModel =({close})=>
{
    const dispatch =useDispatch();
    const { type } = useSelector(state => state.listcar);
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
       dispatch(changetype([...type,id]))
    } else {
        
      dispatch(changetype((type.filter((model) => model !== id))));
    }
  };
  console.log(type)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl py-6 mx-auto flex space-y-2 pb-12 flex-col items-center"
    >
      <p className="font-bold text-2xl font-manrope">Loại xe</p>
      <div className="border border-slate-200 w-full"></div>
      <ul className="grid gap-x-3 gap-y-6 py-6 md:grid-cols-3 px-6">
        <li>
          <input
            type="checkbox"
            id="suv"
            checked={type.length >0 && type.includes('suv')||false}
        
            className="hidden peer"
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="suv"
            className="flex-col flex items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img src={xe4mini} alt="4 chỗ (Mini)" className="w-1/2" />
            <div className="w-full text-lg font-medium font-manrope text-center">SUV</div>
            <div className="w-full text-lg font-medium font-manrope text-center">(4 chỗ)</div>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="sedan"
             checked={type.length >0 && type.includes('sedan')}
            className="hidden peer"
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="sedan"
            className="flex-col flex items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img src={xe4sedan} alt="4 chỗ (Sedan)" className="w-1/2" />
            <div className="w-full text-lg font-medium font-manrope text-center">SEDAN</div>
            <div className="w-full text-lg font-medium  font-manrope text-center">(5 chỗ)</div>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="cuv"
            className="hidden peer"
             checked={type.length >0 &&type.includes('cuv')}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="cuv"
            className="flex-col flex items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img src={xe5suv} alt="5 chỗ (CUV Gầm cao)" className="w-1/2" />
            <div className="w-full text-lg font-medium text-xl font-manrope text-center">CUV</div>
            <div className="w-full text-lg font-medium  font-manrope text-center">(6 chỗ)</div>
          </label>
        </li>
         <li>
          <input
            type="checkbox"
            id="semi_truck"
            className="hidden peer"
             checked={type.length >0 &&type.includes('semi_truck')}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="semi_truck"
            className="flex-col flex items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img src={xe7minivan} alt="5 chỗ (CUV Gầm cao)" className="w-1/2" />
            <div className="w-full text-lg font-medium text-xl font-manrope text-center">Bán tải</div>
            <div className="w-full text-lg font-medium  font-manrope text-center">(4 chỗ)</div>
          </label>
        </li>
      </ul>
      <button
        className="font-bold w-1/2 font-manrope font-lg py-3 px-4 bg-primary text-white rounded-md" onClick={close}
      >
        Xác nhận
      </button>
    </motion.div>
  );
};
export default ChooseModel