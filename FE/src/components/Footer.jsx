/** @format */
import { Link } from "react-router-dom";
import logo from "../assets/rentocar.svg";
const Footer = () => {
  return (
    <section className=" pt-16 p-16 border border-slate-300 shadow-lg p-x-0  w-full">
      <div className=" flex justify-between ">
      <div className=" flex justify-start items-center space-x-10">
       <div>
        <img src={logo} alt="" className=" w-64" />
       </div>
       <div className=" text-start text-gray-800 leading-relaxed flex flex-col space-y-2">
        <p className="  leading-relaxed text-primary font-bold text-base">CÔNG TY TNHH CHO THUÊ XE TỰ LÁI MY CAR</p>
         <p className="  leading-relaxed">Mã số thuế: 0123457890. Cấp ngày: 11/12/2023</p>
          <p className="   leading-relaxed">45 Tân Lập, </p>
           <p className=" leading-relaxed">Thành phố Dĩ An, Tỉnh Bình Dương</p>
       </div>
      </div>
      <div className=" flex justify-end w-1/2 items-start space-x-24">
              <div className="text-start flex flex-col space-y-2">
                <h5 className=" font-bold ">My Car</h5>
                <h5 className="">Danh sách xe cho thuê</h5>
                     <h5 className="">Về MyCar</h5>
                     <h5 className="">Hỗ trợ</h5>
              </div>
               <div className="text-start flex flex-col space-y-2">
                <p className=" font-bold">Hỗ trợ</p>
                <p className=" ">Quy định dịch vụ</p>
                <div className=" flex space-x-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04ABFF" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
<p className=" text-primary ">0328225930</p>
</div>
<div className=" flex space-x-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04ABFF" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
</svg>

<p className=" text-primary">billhiepnguyen@gmail.com</p>
</div>
<div className=" flex space-x-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04ABFF" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>


<Link to="https://t.me/siunhandienquang" className=" text-primary ">@siunhandienquang</Link>
</div>

              </div>
      </div>
      </div>
      
    </section>
  );
};
export default Footer;
