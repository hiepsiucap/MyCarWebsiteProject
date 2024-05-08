import { motion, } from "framer-motion"
import Toyota from "../assets/Toyota.png"
import Isuzu from "../assets/Isuzu.png"
import Honda from "../assets/Honda.png"
const ChooseCompany =({close})=>
{
    return (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className="bg-white rounded-xl py-6 w-9/12 mx-auto flex space-y-2 pb-12 flex-col items-center">
  <p className=" font-bold text-2xl font-manrope">Hãng Xe</p>
  <div className=" border border-slate-200 w-full"></div>
 <div className=" grid grid-cols-2 gap-y-3 gap-x-44 justify-start px-12 pt-6 pb-12">

<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Honda} alt="" className=" w-7" />
        <p>Honda</p>
    </label>
</div>    

<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 

<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 

<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 
<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 
<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 
<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 

<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 

<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 

<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 

<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 

<div className="flex items-center space-x-4">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className=" font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex ">
        <img src={Toyota} alt="" className=" w-7" />
        <p>Toyota</p>
    </label>
</div> 
    </div>    


      <button className=" font-bold w-2/3 font-manrope font-lg py-2 px-4 bg-primary text-white rounded-md" onClick={close}>Xác nhận</button>
          </motion.div>
    )
}
export default ChooseCompany