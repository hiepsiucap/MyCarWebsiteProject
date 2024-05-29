/** @format */
import CarComponent from "./CarComponent";
import { Link } from "react-router-dom";
import { ListOfCar } from "../Utiliz/Constants";
import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from "../features/listcar/CarSlice";
import { resetfilter } from "../features/listcar/CarSlice";
const ListCarComponent = () => {
        const dispatch = useDispatch();
    const {     
        cars,
        rangeprice,
        brand,
        fuel ,
        error,
        province,
        district,
        type } = useSelector(state => state.listcar);
     console.log(rangeprice, brand, fuel, province, district, type);
    useEffect(() => {
        dispatch(fetchCars({ rangeprice, brand, fuel, province, district, type }));
    }, [rangeprice, brand,fuel, province, district, type]);
    useEffect(()=>{
     dispatch(resetfilter())
    },[])
  return (
    <>
    <section className="md:container mx-auto ">
        <div className=" pt-16 pb-8 grid grid-cols-4 gap-5 gap-y-10">
             {cars.content && cars.content.map((c, index)=>{
                   if(index<8)
                   return(
                    <CarComponent c={c}></CarComponent>
                   )
                   else return <></>;
             })}
               {/* {cars.content && cars.content.map((c)=>{
                   return(
                    <CarComponent c={c}></CarComponent>
                   )
             })} */}
             
        </div> 
        {
              cars.content?.length ==0 && <p className=" text-primary text-2xl py-10 font-bold font-manrope text-center ">Không tìm thấy xe phù hợp</p>
             }
         <Link to="/car" className=" bg-primary text-white rounded-md px-4 py-2  ">Xem thêm</Link>
    </section>
     
    </>
  );
};
export default ListCarComponent;
