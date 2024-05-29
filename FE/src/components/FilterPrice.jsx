import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Slider from "react-slider";
   import styled from 'styled-components';
   import { useDispatch, useSelector } from "react-redux";
   import { changerangeprices } from "../features/listcar/CarSlice";
import { formatPrice } from "../Utiliz/Constants";
const FilterPrice =({close})=>
{
    const { rangeprice} = useSelector(state => state.listcar);
    const [rangeprices, setRangePrice] = useState([1,50]);
    const dispatch =useDispatch();
  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => (props.index === 2 ? '#ddd' : props.index === 1 ? '#04ABFF' : null)};
    border-radius: 999px;
`;
   useEffect(()=>{
    setRangePrice(rangeprice);
   },[])
    useEffect(()=>{
       dispatch(changerangeprices(rangeprices))
   },[rangeprices])
//   const StyledTrack = styled.div`
//     top: 0;
//     bottom: 0;
//     background: ${(props) => (props.index === 1 ? "hsl(22, 28%, 45%)" : null)};
//     border-radius: 999px;
//   `;
 const Track = (props, state) => (
    <StyledTrack {...props} index={state.index} />
  );
         console.log( rangeprice);
    return (
  <div
    // initial={{ opacity: 0, scale: 0 }}
    // whileInView={{ opacity: 1, scale: 1 }}
    // transition={{ duration: 0.5 }}  
    className="bg-white rounded-xl w-4/5 py-6 mx-auto flex space-y-2 pb-12 flex-col items-center">
  <p className=" font-bold text-2xl font-manrope">Khoảng giá</p>
  <div className=" w-3/4 py-12">
    <Slider
              value={rangeprices}
              className="w-full h-2 bg-gray-200 rounded-full"
              thumbClassName="bg-white border border-gray-900 h-5 w-5 cursor-pointer rounded-full -top-1.5"
              onChange={setRangePrice}
              markClassName="bg-gray-900"
              renderTrack={Track}
              min={0}
              max={50}
            />
        <div className="flex justify-between text-gray-600 text-sm pt-2">
            <p>0K</p>
            <p>5000K</p>
            </div>    
         <div className=" flex space-x-2 pt-12">
            <div className=" py-2 px-5 w-1/2 border rounded-md border-gray-400">
                <p className=" text-sm font-manrope text-gray-600">Giá thấp nhất:</p>
                <p className=" font-medium font-manrope">{formatPrice(rangeprice[0]*100000)}</p>
            </div>
            <div className=" py-2 px-5 w-1/2 border rounded-md border-gray-400">
                <p className=" text-sm font-manrope text-gray-600">Giá cao nhất:</p>
                <p className=" font-medium font-manrope">{formatPrice(rangeprice[1]*100000)}</p>
            </div>
         </div>
    </div>

      <button className=" font-bold w-2/3 font-manrope font-lg py-2 px-4 bg-primary text-white rounded-md" onClick={close}>Xác nhận</button>
          </div>
    )
}
export default FilterPrice