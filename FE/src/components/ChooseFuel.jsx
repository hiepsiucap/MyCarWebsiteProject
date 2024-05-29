import { motion, } from "framer-motion"
import { useDispatch } from "react-redux"
import { changefuel } from "../features/listcar/CarSlice"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const ChooseFuels =({close})=>
{

     // Initialize state to store the selected values
   const dispatch =useDispatch();
     const [selectedFuel, setSelectedFuel] = useState({
    xexang: false,
    xedau: false,
    xedien: false,
  });
    const { fuel } = useSelector(state => state.listcar);
useEffect(()=>{
    if(fuel.includes("Xang")) setSelectedFuel((prev)=>{
        return { ...prev, xexang: true}
    })
      if(fuel.includes("Dau")) setSelectedFuel((prev)=>{
        return { ...prev, xedau: true}
    })
      if(fuel.includes("Dien")) setSelectedFuel((prev)=>{
        return { ...prev, xedien: true}
    })
},[])
useEffect(()=>{
  const selectfuel=[];
  if(selectedFuel.xexang)
  {
  selectfuel.push("Xang")
  }
  if(selectedFuel.xedau)
  selectfuel.push("Dau")
  if(selectedFuel.xedien)
  selectfuel.push("Dien")
    dispatch(changefuel(selectfuel))
},[selectedFuel])
console.log(fuel);
  // Handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if(checked)
    setSelectedFuel((prevSelectedFuel) => ({
      ...prevSelectedFuel,
      [id]: checked,
    }));
    else
    {
       setSelectedFuel((prevSelectedFuel) => ({
      ...prevSelectedFuel,
      [id]: false,
    }));
    }
  };

  // Handle button click
  const handleButtonClick = () => {
    const selectedValues = Object.keys(selectedFuel).filter((key) => selectedFuel[key]);
    console.log('Selected fuels:', selectedValues);
    close(); // Close the modal or perform any other action
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl py-6 mx-auto w-2/3 flex space-y-2 pb-12 flex-col items-center"
    >
      <p className="font-bold text-2xl font-manrope">Nhiên liệu</p>
      <div className="border border-slate-200 w-full"></div>
      <ul className="py-6 flex w-3/4 mx-auto flex-col px-6 space-y-5">
        <li>
          <input
            type="checkbox"
            id="xexang"
            className="hidden peer"
            onChange={handleCheckboxChange}
            checked={selectedFuel.xexang}
          />
          <label
            htmlFor="xexang"
            className="flex-col flex items-center justify-center w-full px-5 py-2 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <p className="text-center text-xl font-manrope w-full font-medium text-gray-800">Xe xăng</p>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="xedau"
            className="hidden peer"
            onChange={handleCheckboxChange}
            checked={selectedFuel.xedau}
          />
          <label
            htmlFor="xedau"
            className="flex-col flex items-center justify-center w-full px-5 py-2 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <p className="text-center text-xl font-manrope w-full font-medium text-gray-800">Xe dầu</p>
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="xedien"
            className="hidden peer"
            onChange={handleCheckboxChange}
            checked={selectedFuel.xedien}
          />
          <label
            htmlFor="xedien"
            className="flex-col flex items-center justify-center w-full px-5 py-2 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <p className="text-center text-xl font-manrope w-full font-medium text-gray-800">Xe điện</p>
          </label>
        </li>
      </ul>
      <button
        className="font-bold w-1/2 font-manrope text-lg py-3 px-4 bg-primary text-white rounded-md"
        onClick={handleButtonClick}
      >
        Xác nhận
      </button>
    </motion.div>
  );
};
export default ChooseFuels