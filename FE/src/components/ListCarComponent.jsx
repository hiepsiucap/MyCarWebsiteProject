/** @format */
import CarComponent from "./CarComponent";
import { Link } from "react-router-dom";
const ListCarComponent = () => {
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
        </div> 
         <Link to="/car" className=" bg-primary text-white rounded-md px-4 py-2  ">Xem thêm</Link>
    </section>
     
    </>
  );
};
export default ListCarComponent;
