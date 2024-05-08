import { motion, } from "framer-motion"
const FilterLocation =({close})=>
{
    return (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className="bg-white rounded-xl py-6 mx-auto w-3/4 flex space-y-2 pb-12 flex-col items-center">
  <p className=" font-bold text-2xl text-center font-manrope">Địa điểm nhận xe</p>
      <form className=" flex-col space-y-3 w-3/4 items-start py-8">
        <div className=" flex flex-col space-y-1">
             <label for="city" className=" text-sm font-manrope text-gray-500 ">Thành phố,tỉnh:</label>
              <select name="cars" id="cars" className=" p-3 border border-gray-400 rounded-md">
              <option value="volvo">Hồ Chí Minh</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
              </select>
        </div>
          <div className=" flex flex-col space-y-1">
             <label for="city" className=" text-sm font-manrope text-gray-500 ">Quận Huyện:</label>
              <select name="cars" id="cars" className=" p-3 border border-gray-400 rounded-md">
              <option value="volvo">Quận 1</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
              </select>
        </div>
          <div className=" flex flex-col space-y-1">
             <label for="city" className=" text-sm font-manrope text-gray-500 ">Tên đường:</label>
              <select name="cars" id="cars" className=" p-3 border border-gray-400 rounded-md">
              <option value="volvo">Trần Hưng Đạo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
              </select>
        </div>
</form>
      <button className=" font-bold w-1/2 font-manrope font-lg py-3 px-4 mx-auto bg-primary text-white rounded-md" onClick={close}>Xác nhận</button>
          </motion.div>
    )
}
export default FilterLocation