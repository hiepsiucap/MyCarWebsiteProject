/** @format */
import logo from "../assets/rentocar.svg";
import volang from "../assets/volang.png"
const HeroRentCar = () => {
  return (
    <section className=" md:container mx-auto">
     <div className="flex space-x-10 bg-background">
      <div className="w-1/2">
        <img src={volang} alt="" />
      </div>
     </div>
    </section>
  );
};
export default HeroRentCar;
