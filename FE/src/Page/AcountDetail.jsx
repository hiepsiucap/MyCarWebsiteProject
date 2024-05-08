import { motion } from "framer-motion";
const AccountDetail = () => {
  return (
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" bg-white rounded-lg px-8 py-6 w-full">
      <div className=" flex justify-between items-center">
        <h1 className=" text-2xl font-bold font-manrope"> Thông tin tài khoản</h1>
        <div className=" flex items-end space-x-1 p-4 border-2 border-primary rounded-lg "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#04ABFF" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
</svg>
       <h1 className="  text-2xl font-manrope font-bold text-primary">10</h1>
       <h1 className=" pb-1  font-manrope text-sm text-gray-500">chuyến</h1>
</div>
      </div>
      <div className=" flex space-x-5 pt-12 items-center">
        <div className=" flex flex-col space-y-5 items-center  w-1/3">
          <div className="">
             <img src="https://res.cloudinary.com/dhhuv7n0h/image/upload/v1710901348/rfb0bgnjivk8cujez1ft.jpg" alt="" className=" w-44 h-44 rounded-full" />
             </div>
              <h5 className=" text-xl font-manrope font-medium">Nguyễn Hiệp</h5>
              <h5 className=" text-sm text-gray-400  font-manrope font-medium">Tham gia: 30/04/2024</h5>
              <button className=" px-4 py-2 bg-primary font-manrope text-white text-sm  rounded-lg">Thay đổi ảnh</button>
        </div>
          <form className=" flex flex-col space-y-2 w-2/3">
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Số điện thoại:</label>
             <input type="text" id="pn" name="fname" className="px-1 py-2.5 border border-slate-300 w-full rounded-lg"/>
            </div>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Họ và tên:</label>
             <input type="text" id="pn" name="fname" className="px-1 py-2.5 border border-slate-300 w-full rounded-lg"/>
            </div>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn"  className=" font-manrope font-medium px-1 text-gray-600 text-sm">Mật khẩu:</label>
             <input type="password" id="pn" name="fname" className="px-1 py-2.5 border border-slate-300 w-full rounded-lg"/>
            </div>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Ngày sinh:</label>
             <input type="text" id="pn" name="fname" className="px-1 py-2.5 border border-slate-300 w-full rounded-lg"/>
            </div>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Địa chỉ:</label>
             <input type="text" id="pn" name="fname" className="px-1 py-2.5 border border-slate-300 w-full rounded-lg"/>
            </div>
            <div className=" py-5">
            <button className=" py-4 px-6 w-1/3 text-white bg-primary font-manrope font-bold rounded-lg">Thay đổi</button>
            </div>
           </form>
      </div>
    </motion.section>
  );
};
export default AccountDetail;
