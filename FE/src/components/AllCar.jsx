/** @format */
import CarComponent from "./CarComponent";
import { Link } from "react-router-dom";
import { ListOfCar } from "../Utiliz/Constants";
import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from "../features/listcar/CarSlice";
import { resetfilter } from "../features/listcar/CarSlice";
import { changepage } from "../features/listcar/CarSlice";
const AllCar = () => {
    const dispatch = useDispatch();
    const {     
        cars,
        rangeprice,
        brand,
        fuel ,
        error,
        province,
        district,
        type , page} = useSelector(state => state.listcar);
    useEffect(() => {
        dispatch(fetchCars({ rangeprice, brand, fuel, province, district, type, page }));
    }, [page]);
       useEffect(() => {
        dispatch(fetchCars({ rangeprice, brand, fuel, province, district, type, page: 0 }));
    }, [rangeprice, brand,fuel, province, district, type]);
    useEffect(()=>{
     dispatch(resetfilter())
    },[]) 
    useEffect(()=> {
     window.scrollTo(0, 0);
    },[page])
     const pagess = [];
    for (let i = 0; i <cars.totalPages; i++) {
    pagess.push(<button id={i} onClick={(e)=>{
          dispatch(changepage(Number(e.target.id)))
    }} className=  {page == i ?" font-manrope text-sm border border-primary py-1 px-3 rounded-lg text-white bg-primary" : "font-manrope text-sm border border-primary py-1 px-3 rounded-lg text-black bg-white"}>{i+1}</button>);
  }
  return (
    <>
    <section className="md:container mx-auto ">
        <div className=" pt-16 pb-8 grid grid-cols-4 gap-5 gap-y-10">
          { !error && cars?.content && cars.content.map((c)=>
          {
            return(
              <CarComponent key={c.car_id} c={c}> </CarComponent>
            )
          })}
          
              
        </div>
         <div className=" flex space-x-4 justify-center pt-6 pb-12">
            
            {pagess}
            <button className=" font-manrope text-sm border border-primary py-1 px-1 rounded-lg text-gray-600 bg-primary hover:border-gray-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#FFFFFF" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button>
         </div>
    </section>
     
    </>
  );
};
export default AllCar;
