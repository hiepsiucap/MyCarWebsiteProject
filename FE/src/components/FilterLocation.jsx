import { motion, } from "framer-motion"
import { useEffect ,useState } from "react";
import { useDispatch } from "react-redux";
import { changedistrictlocation ,changeprovincelocation } from "../features/listcar/CarSlice";
import { useSelector } from "react-redux";
const FilterLocation =({close})=>
{
   const { province, district} = useSelector(state => state.listcar);
   const dispatch = useDispatch();  
  const [provincess, setProvinces] = useState([]);
  const [districts, setDistrict] = useState([]);
    useEffect(() => {
    const FetchProvinces = async () => {
      const response = await fetch(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
        {
          method: "GET",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
            token: "202b54d4-afda-11ee-b38e-f6f098158c7e",
          },
        }
      );
      const result = await response.json();
      setProvinces(result.data);
      
    };
    FetchProvinces();
  }, []);
  console.log(province,district)
  const onChangeHanlder=async (e)=>{
    if(e.target.value !=="")
    {
  const body = { province_id: Number(e.target.value) };
  const provinceName= provincess.find(province=> province.ProvinceID ===  Number(e.target.value))
      dispatch(changeprovincelocation(provinceName.ProvinceName))
      const response = await fetch(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
        {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
            token: "202b54d4-afda-11ee-b38e-f6f098158c7e",
          },
          body: JSON.stringify(body),
        }
      );
      const result = await response.json();
      console.log(result);
      setDistrict(result.data);
  } else
  {
    dispatch(changeprovincelocation(""))
  }
}

    return (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className="bg-white rounded-xl py-6 mx-auto w-3/4 flex space-y-2 pb-12 flex-col items-center">
  <p className=" font-bold text-2xl text-center font-manrope">Địa điểm nhận xe</p>
      <form className=" flex-col space-y-3 w-3/4 items-start py-8">
        <div className=" flex flex-col space-y-1">
             <label for="city" className=" text-sm font-manrope text-gray-500 ">Thành phố,tỉnh:</label>
              <select  name="provinces" id="provinces"  className=" p-3 border border-gray-400 rounded-md" onChange={onChangeHanlder}>
                 <option id="" key="" value=""></option>
           {provincess.map((province) => {
                  return (
                    <option id={province.ProvinceID} key={province.ProvinceID} value={province.ProvinceID}>
                      {province.ProvinceName}
                    </option>
                  );
                })}
              </select>
        </div>
          <div className=" flex flex-col space-y-1">
             <label  className=" text-sm font-manrope text-gray-500 ">Quận Huyện:</label>
              <select name="district" id="district"  onChange={(e)=>{dispatch(changedistrictlocation(e.target.value))}}  className=" p-3 border border-gray-400 rounded-md">
                 <option value="" key={"s"}>
                      
                    </option>
               {districts.map((district) => {
                  return (
                    <option value={district.DistrictName} key={district.DistrictID}>
                      {district.DistrictName}
                    </option>
                  );
                })}
              </select>
        </div>
         
</form>
      <button className=" font-bold w-1/2 font-manrope font-lg py-3 px-4 mx-auto bg-primary text-white rounded-md" onClick={close}>Xác nhận</button>
          </motion.div>
    )
}
export default FilterLocation