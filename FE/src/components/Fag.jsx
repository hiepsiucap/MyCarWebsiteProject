/** @format */
import logo from "../assets/rentocar.svg";
import ListOfFag from "./ListOfFag";
const Fag = () => {
  return (
    <section className=" md:container mx-auto pb-24">
        <h1 className=" font-bold font-manrope text-4xl py-12 ">Câu hỏi thường gặp</h1>
        <div className=" flex flex-col space-y-4">
            <ListOfFag>
            </ListOfFag>
        </div>
    </section>
  );
};
export default Fag;
