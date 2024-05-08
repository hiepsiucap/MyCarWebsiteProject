/** @format */
import CarComponent from "./CarComponent";
import { Link } from "react-router-dom";
const AllCar = () => {
  return (
    <>
    <section className="md:container mx-auto ">
        <div className=" pt-16 pb-8 grid grid-cols-4 gap-5 gap-y-10">
              <CarComponent></CarComponent>
               <CarComponent></CarComponent>
                <CarComponent></CarComponent>
                 <CarComponent></CarComponent>
                  <CarComponent></CarComponent>
                   <CarComponent></CarComponent>
                    <CarComponent></CarComponent>
                     <CarComponent></CarComponent>
                      <CarComponent></CarComponent>
                   <CarComponent></CarComponent>
                    <CarComponent></CarComponent>
                     <CarComponent></CarComponent>
        </div>
         <div className=" flex space-x-4 justify-center pt-6 pb-12">
            <button className=" font-manrope text-sm border border-primary py-1 px-3 rounded-lg text-white bg-primary">1</button>
            <button className=" font-manrope text-sm border border-primary py-1 px-3 rounded-lg hover:border-gray-300 text-gray-600 ">2</button>
            <button className=" font-manrope text-sm border border-primary py-1 px-3 rounded-lg hover:border-gray-300 text-gray-600 ">3</button>
            <button className=" font-manrope text-sm border border-primary py-1 px-3 rounded-lg hover:border-gray-300 text-gray-600">4</button>
                <button className=" font-manrope text-sm border border-primary py-1 px-3 rounded-lg text-gray-600 hover:border-gray-300">5</button>
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
