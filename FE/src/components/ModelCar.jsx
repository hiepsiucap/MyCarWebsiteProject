import { motion, } from "framer-motion"
import xe7minivan from "../assets/xe7minivan.png"
import xe7mpv from "../assets/xe7mpv.png"
import xe7suv from "../assets/xe7suv.png"
import xe5suv from "../assets/xe5suv.png"
import xe4sedan from "../assets/xe4sedan.png"
import xe4mini from "../assets/xe4mini.png"
const ChooseModel =({close})=>
{
    return (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className="bg-white rounded-xl py-6 mx-auto flex space-y-2 pb-12 flex-col items-center">
  <p className=" font-bold text-2xl font-manrope">Loại xe</p>

  <div className=" border border-slate-200 w-full"></div>
<ul className="grid  gap-x-3 gap-y-6 py-6 md:grid-cols-4 px-6">
    <li>
        <input type="checkbox" id="4chomini" value="" className="hidden peer" required=""/>
        <label for="4chomini" className=" flex-col flex items-center justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <img src={xe4mini} alt=" " className=" w-1/2" />
                <div className="w-full text-lg font-medium  font-manrope text-center">4 chỗ</div>
                <div className="w-full text-lg font-medium  font-manrope text-center">(Mini)</div>
        </label>
    </li>
    <li>
        <input type="checkbox" id="4chosedan" value="" className="hidden peer"/>
         <label for="4chosedan" className=" flex-col flex items-center justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <img src={xe4sedan} alt=" " className=" w-1/2" />
                <div className="w-full text-lg font-medium  font-manrope text-center">4 chỗ</div>
                <div className="w-full text-lg font-medium text-sm font-manrope text-center">(Sedan)</div>
        </label>
    </li>
    <li>
        <input type="checkbox" id="5chocuv" value="" className="hidden peer"/>
        <label for="5chocuv" className=" flex-col flex items-center justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <img src={xe5suv} alt=" " className=" w-1/2" />
                <div className="w-full text-lg font-medium text-xl font-manrope text-center">5 chỗ</div>
                <div className="w-full text-lg font-medium text-sm font-manrope text-center">(CUV Gầm cao)</div>
        </label>
    </li>
     <li>
        <input type="checkbox" id="7chosuv" value="" className="hidden peer"/>
        <label for="7chosuv" className=" flex-col flex items-center justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <img src={xe7suv} alt=" " className=" w-1/2" />
                <div className="w-full text-lg font-medium text-xl font-manrope text-center">7 chỗ</div>
                <div className="w-full text-lg font-medium text-sm font-manrope text-center">(SUV Gầm cao)</div>
        </label>
    </li>
     <li>
        <input type="checkbox" id="7chompv" value="" className="hidden peer"/>
        <label for="7chompv" className=" flex-col flex items-center justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <img src={xe7mpv} alt=" " className=" w-1/2" />
                <div className="w-full text-lg font-medium text-xl font-manrope text-center">7 chỗ</div>
                <div className="w-full text-lg font-medium text-sm font-manrope text-center">(MPV Gầm thấp)</div>
        </label>
    </li>
     <li>
        <input type="checkbox" id="minivan" value="" className="hidden peer"/>
        <label for="minivan" className=" flex-col flex items-center justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                <img src={xe7minivan} alt=" " className=" w-1/2" />
                <div className="w-full text-lg font-medium text-xl font-manrope text-center">Minivan</div>
                <div className="w-full text-lg font-medium text-sm font-manrope text-center">(Xe 9 chỗ)</div>
        </label>
    </li>
</ul>
      <button className=" font-bold w-1/2 font-manrope font-lg py-3 px-4 bg-primary text-white rounded-md" onClick={close}>Xác nhận</button>
          </motion.div>
    )
}
export default ChooseModel