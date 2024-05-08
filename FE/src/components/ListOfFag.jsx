/** @format */
import logo from "../assets/rentocar.svg";
import EachFaq from "./EachFaq";
import { faq } from "../Utiliz/Constants";
const ListOfFag = () => {
  return (
    faq.map(f=>{
        return (
        <EachFaq key={f.id} f={f}></EachFaq>
        )
    })
  );
};
export default ListOfFag;
