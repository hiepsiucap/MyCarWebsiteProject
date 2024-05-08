/** @format */
import { useEffect } from "react";
import { FilterTag ,AllCar} from "../components";
const ListCar = () => {
  useEffect(() => {
  // Scroll to the top when the component mounts
  window.scrollTo(0, 0);
}, []);
  return (
    <>
       <FilterTag></FilterTag>
       <AllCar></AllCar>
    </>
  );
};
export default ListCar;
