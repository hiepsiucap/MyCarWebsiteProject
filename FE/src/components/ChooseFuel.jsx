import { motion, } from "framer-motion"
const ChooseFuels =({close})=>
{
    return (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className="bg-white rounded-xl py-6 mx-auto w-2/3 flex space-y-2 pb-12 flex-col items-center">
  <p className=" font-bold text-2xl font-manrope">Nhiên liệu</p>

  <div className=" border border-slate-200 w-full"></div>
<ul className=" py-6 flex  w-3/4 mx-auto flex-col px-6 space-y-5">
    <li>
        <input type="checkbox" id="xexang" value="" className="hidden peer" required=""/>
        <label for="xexang" className=" flex-col flex items-center justify-center items-center w-full p-x-5 py-2 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                       <p className=" text-center text-xl font-manrope w-full font-medium text-gray-800">Xe xăng</p>
        </label>
    </li>
   <li>
        <input type="checkbox" id="xedau" value="" className="hidden peer" required=""/>
        <label for="xedau" className=" flex-col flex items-center justify-center items-center w-full p-x-5 py-2 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                       <p className=" text-center text-xl font-manrope w-full font-medium text-gray-800">Xe dầu</p>
        </label>
    </li>
    <li>
        <input type="checkbox" id="xedien" value="" className="hidden peer" required=""/>
        <label for="xedien" className=" flex-col flex items-center justify-center items-center w-full p-x-5 py-2 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                       <p className=" text-center text-xl font-manrope w-full font-medium text-gray-800">Xe điện</p>
        </label>
    </li>
   
</ul>
      <button className=" font-bold w-1/2 font-manrope font-lg py-3 px-4 bg-primary text-white rounded-md" onClick={close}>Xác nhận</button>
          </motion.div>
    )
}
export default ChooseFuels