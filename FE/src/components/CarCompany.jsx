import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { carbrands } from '../Utiliz/Constants';
import { changebrand } from '../features/listcar/CarSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const CarSelection = ({close }) => {
    const dispatch =useDispatch();
    const [selectedCarBrand, setSelectedCarBrand] = useState("");
     useEffect(()=>{
        if(selectedCarBrand !=="")
         dispatch(changebrand(selectedCarBrand));
     },[selectedCarBrand])
    const handleSelection = (cb ) => {
        if(cb.name == selectedCarBrand) setSelectedCarBrand(null);
        else
        setSelectedCarBrand(cb.name);
    };
       const { brand } = useSelector(state => state.listcar);
    useEffect(()=>{
      setSelectedCarBrand(brand)
    },[])
    console.log(selectedCarBrand);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl py-6 w-9/12 mx-auto flex space-y-2 pb-12 flex-col items-center"
        >
            <p className="font-bold text-2xl font-manrope">Hãng Xe</p>
            <div className="border border-slate-200 w-full"></div>
            <div className="grid grid-cols-2 gap-y-3 gap-x-44 justify-start px-12 pt-6 pb-12">
                <div className="flex items-center space-x-4" >
                        <input
                            id={`radio-null`}
                            type="radio"
                            name="carbrand"
                            checked={selectedCarBrand === null}
                            onChange={()=>setSelectedCarBrand(null)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor={`radio-null`}
                            className="font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex h-8"
                        >
                            <img src="" alt={""} className="w-7" />
                            <p>Tất cả</p>
                        </label>
                    </div>

                {carbrands.map((cb) => (
                    <div className="flex items-center space-x-4" key={cb.name}>
                        <input
                            id={`radio-${cb.name}`}
                            type="radio"
                            name="carbrand"
                            checked={selectedCarBrand === cb.name}
                            onChange={() => handleSelection(cb)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor={`radio-${cb.name}`}
                            className="font-medium justify-center items-center space-x-2 text-gray-900 dark:text-gray-300 font-manrope flex h-8"
                        >
                            <img src={cb.image.source} alt={cb.name} className="w-7" />
                            <p>{cb.name}</p>
                        </label>
                    </div>
                ))}
            </div>
            <button
                className="font-bold w-2/3 font-manrope text-lg py-2 px-4 bg-primary text-white rounded-md"
                onClick={close}
            >
                Xác nhận
            </button>
        </motion.div>
    );
};

export default CarSelection;
