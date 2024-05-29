
import detail1 from "../assets/detail1.png"
import start from "../assets/start.svg"
import discount from "../assets/discount.svg"
import diadiem from "../assets/diadiem.svg"
import { motion } from "framer-motion"
import { TimeNow, rentalIssues, rentcar } from "../Utiliz/Constants"
import { useNavigate } from "react-router-dom";
import Modal from "react-modal"
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useState, useEffect } from "react"
import { getRequest, patchRequest, postRequest } from "../Utiliz/services"
const customStyles = {
   content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
     border: '0',
     padding: '0',
     zIndex: '50',
      width: '50%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the color and opacity here
  }
};
Modal.setAppElement('#root');
const MyRentCar = () => {
  const [reload, changereload] = useState("");
   const [provincess, setProvinces] = useState([]);
    const [districts, setDistrict] = useState([]);
    const [error, isError] =useState( false);
    const [datasubmit, changedata]= useState(
    {
      hour: "",
      date: "",
      province: "",
      district: "",
      address: "",
      state: "",
      details: "",
      giahandate: "",
    }
    )
   const [openmodal,changeopenmodal] = useState("");
   const  onChangeHandlerr= (e)=>{
         changedata((prev)=> {
          return {...prev, [e.target.id]: e.target.value}
         })
   }
   const [rentalID, changerentalid]= useState("");
    const [cardata, changecardata]= useState(null);
  useEffect(()=>{
    const getData=async()=>{
    const responsedata= await getRequest("http://localhost:8080/users/rentals");
    if(responsedata.error)
      {
        console.log(responsedata.message);
      } 
      else
      {
         changecardata(responsedata);
      }
    }
    getData();
  },[reload])
  console.log(cardata);
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
  const onChangeHanlder=async (e)=>{
  const body = { province_id: Number(e.target.value) };
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
      const provinece= provincess.find((p)=> p.ProvinceID== Number(e.target.value));
      console.log(provinece)
      changedata((prev)=>{return {...prev,province: provinece.ProvinceName}})
      const result = await response.json();
      setDistrict(result.data);
  }

  const navigate= useNavigate();
     const [modalIsOpen, setIsOpen] = useState(false);
  function  openModal () {
    setIsOpen(true);
  }
   function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    isError(false);
  } 
   const onSubmitHandler =async(e)=>{
       e.preventDefault();
       if(openmodal==="traxe")
      {
       if(!datasubmit.address|| !datasubmit.date || !datasubmit.district || !datasubmit.hour || !datasubmit.province)
        {
          isError(true);
           Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: "Kiểm tra bạn đã điền đủ thông tin hay chưa!",
      icon: "error"})
          return;
        }
        else
        {
      const response = await patchRequest(`http://localhost:8080/rentals/${rentalID}?status=completed`,{});
    if(response.error)
        {
            return Swal.fire({
        title: "Xác nhận thất bại",
        text: response.message,
        icon: "error"
      });
        }
      Swal.fire({
        title: "Xác nhận thành công",
        icon: "success"
      });
      changereload("relaodddd");
      closeModal();
        }
   }
   if(openmodal==="khieunai")
    {
       if(!datasubmit.details|| !datasubmit.state)
        {
          isError(true);
           Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: "Kiểm tra bạn đã điền đủ thông tin hay chưa!",
      icon: "error"})
          return;
        }
        else
      {
        const details = `${datasubmit.state} - ${datasubmit.details}`
      const response = await postRequest(`http://localhost:8080/rentals/${rentalID}/reports`,{details});
    if(response.error)
        {
            return Swal.fire({
        title: "Xác nhận thất bại",
        text: response.message,
        icon: "error"
      });
        }
      Swal.fire({
        title: "khiếu nại thành công",
        icon: "success"
      });
      changereload("relaodddd");
      closeModal();
        }
    }
      if(openmodal==="giahan")
    {
       if(!datasubmit.giahandate)
        {
          isError(true);
           Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: "Kiểm tra bạn đã điền đủ thông tin hay chưa!",
      icon: "error"})
          return;
        }
        else
        {
     Swal.fire({
      title: "Khiếu nại thành công",
      text: "Nhân viên chúng tôi sẽ liên hệ và giải quyết với bạn !",
      icon: "success"}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    console.log("hello");
    navigate("/user/myrentcar")
  }}); 
        }
    }
  }
   console.log(datasubmit);
  return (
    <motion.section  initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className=" w-full">
              <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      style={modalIsOpen ? { ...customStyles, content: { ...customStyles.content, transform: 'translate(-50%, -50%) scale(1)', opacity: 1 } } : customStyles}
        contentLabel="Example Modal"
      >
      <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className="bg-white rounded-xl py-6 mx-auto w-2/3 flex space-y-2  flex-col items-center">
  {
   openmodal === "traxe" &&
  <>
  <p className=" font-bold text-2xl font-manrope">Trả xe</p>
  <div className=" border border-slate-200 w-full"></div>
   <form className=" flex flex-col space-y-2 w-full px-5 py-4 " onSubmit={onSubmitHandler}>
             <h5 className=" font-bold text-lg font-manrope  pb-4">Thời gian trả xe</h5>
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Thời gian trả xe:</label>
             <select type="text" id="hour" name="fname" value={datasubmit.hour} onChange={onChangeHandlerr} className={ !datasubmit.hour && error ?"px-1 py-2.5 border border-red-600 w-full rounded-lg": "px-1 py-2.5 border border-slate-300 w-full rounded-lg"} >
              <option value="" ></option>
              {TimeNow(new Date()).map((t)=>{
                return (<option value={t} key={t}>{t}</option>)
              })}
              </select> 
            </div>
             <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Ngày trả xe:</label>
             <input type="date" id="date" name="fname" value={datasubmit.date} onChange={onChangeHandlerr} className={ !datasubmit.date && error ?"px-1 py-2.5 border border-red-600 w-full rounded-lg": "px-1 py-2.5 border border-slate-300 w-full rounded-lg"} />
       
            </div>
               <h5 className=" font-bold text-lg font-manrope py-4 ">Địa điểm trả xe</h5>
              <div className=" flex space-x-2">
 <div className=" flex flex-col space-y-1 w-1/2">
             <label className="  font-manrope font-medium px-1 text-gray-600 text-sm ">Thành phố,tỉnh:</label>
              <select  name="provinces" id="provinces" className={ !datasubmit.province && error ?"px-1 py-2.5 border border-red-600 w-full rounded-lg": "px-1 py-2.5 border border-slate-300 w-full rounded-lg"} onChange={onChangeHanlder}>
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
          <div className=" flex flex-col space-y-1 w-1/2">
             <label  className=" font-manrope font-medium px-1 text-gray-600 text-sm ">Quận Huyện:</label>
              <select name="district" id="district" onChange={onChangeHandlerr} className={ !datasubmit.district && error ?"px-1 py-2.5 border border-red-600 w-full rounded-lg": "px-1 py-2.5 border border-slate-300 w-full rounded-lg"}>
               {districts.map((district) => {
                  return (
                    <option value={district.DistrictName} key={district.DistrictID}>
                      {district.DistrictName}
                    </option>
                  );
                })}
              </select>
        </div>
              </div>
         
             <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Mô tả:</label>
             <input type="text" id="address" name="fname" value={datasubmit.address} onChange={onChangeHandlerr} className={!datasubmit.address && error ?"px-1 py-2.5 border border-red-600 w-full rounded-lg": "px-1 py-2.5 border border-slate-300 w-full rounded-lg"} />
            <div className=" flex justify-end w-full space-x-2 pt-2 pb-5">
            </div>
            </div>
                <div className="  mx-auto w-full flex justify-center">
            <button  className=" py-4 px-6 w-9/12 mx-auto text-white bg-primary font-manrope font-bold rounded-lg">Xác nhận</button>
            </div>
           </form>
  </>
}
{openmodal === "khieunai" &&
 <>
  <p className=" font-bold text-2xl font-manrope">Khiếu nại</p>
  <div className=" border border-slate-200 w-full"></div>
   <form className=" flex flex-col space-y-5 w-full px-7 py-12 " onSubmit={onSubmitHandler}>
         
            <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Vấn đề gặp phải:</label>
             <select type="text" id="state" name="fname" value={datasubmit.state} onChange={onChangeHandlerr} className={ !datasubmit.hour && error ?"px-1 py-2.5 border border-red-600 w-full rounded-lg": "px-2 py-2.5 border border-slate-300 w-full rounded-lg"} >
              <option value="" ></option>
              {rentalIssues.map((t)=>{
                return (<option value={t} key={t}>{t}</option>)
              })}
              </select> 
            </div>
         
             <div className=" flex flex-col space-y-1 items-start">
               <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Chi tiết:</label>
             <textarea rows={6} type="text" id="details" name="fname" value={datasubmit.details} onChange={onChangeHandlerr} className={!datasubmit.address && error ?"px-2 py-2.5 border border-red-600 w-full rounded-lg": "px-1 py-2.5 border border-slate-300 w-full rounded-lg"} />
            <div className=" flex justify-end w-full space-x-2 pt-2 pb-5">
            </div>
            </div>
                <div className="  mx-auto w-full flex justify-center">
            <button  className=" py-4 px-6 w-9/12 mx-auto text-white bg-primary font-manrope font-bold rounded-lg">Xác nhận</button>
            </div>
           </form>
  </>

}
{openmodal === "giahan" &&
 <>
  <p className=" font-bold text-2xl font-manrope">Gia Hạn</p>
  <div className=" border border-slate-200 w-full"></div>
   <form className=" flex flex-col space-y-5 w-full px-7 pt-12 " onSubmit={onSubmitHandler}>
    <div>
           <label htmlFor="pn" className=" font-manrope font-medium px-1 text-gray-600 text-sm">Ngày trả xe:</label>
             <input type="date" id="giahandate" name="fname" value={datasubmit.giahandate} onChange={onChangeHandlerr} className={ !datasubmit.giahandate && error ?"px-1 py-2.5 border border-red-600 w-full rounded-lg": "px-1 py-2.5 border border-slate-300 w-full rounded-lg"} />
             </div>
                <div className="  mx-auto w-full flex justify-between pt-12">
                  <div className=" flex flex-col">
                      <p className=" font-manrope text-gray-500 text-sm">Số tiền phải trả thêm:</p>
                      <p className=" font-manrope text-lg font-bold text-primary"> 500.000Đ</p>
                  </div>
            <button  className=" py-4 px-6   text-white bg-primary font-manrope font-bold rounded-lg">Xác nhận</button>
            </div>
           </form>
  </>

}
          </motion.div>
      </Modal>
     <h1 className=" text-3xl font-manrope font-bold text-start pb-5">Xe đang thuê <span className=" text-primary font-4xl">({cardata?.length})</span></h1>
     <div className=" flex flex-col space-y-5 w-full">
       { cardata?.map((car)=> { return (
        <>
        <div className=" p-5 pb-10 flex bg-white w-full rounded-lg shadow-sm">
            <div className=" w-3/4 flex items-center space-x-5 border-r-2 border-primary border-opacity-40 ">
              <div className=" w-10/12 h-56">
                <img src={car.thumbnail} alt="" className=" h-56  rounded-lg" />
                </div>
                <div className=" flex flex-col space-y-2 w-full">
                    <div className=" flex space-x-2 w-full">
                        <div className=" rounded-2xl px-2 py-1 bg-background font-manrope text-sm"> {car.gear === "Tu dong" ? "Tự động" : "Số sàn"}</div>
                         <div className=" rounded-2xl px-2 py-1 bg-background font-manrope text-sm">Giao xe tận nơi</div>
                    </div>
                    <h5 className=" font-manrope font-bold text-start text-lg">{car.name}</h5>
                     <div className=" flex space-x-1">
                          <img src={start} alt="" />
                          <p className=" text-gray-500 text-sm font-manrope pr-2">{car.review}</p>
                          <img src={discount} className=" w-4" alt="" />
                            <p className=" text-gray-500 text-sm font-manrope pr-2">{car.rentCount} chuyến</p>
                     </div>
                         <div className=" flex space-x-1">
                          <img src={diadiem} alt="" />
                          <p className=" text-gray-500 text-sm font-manrope pr-2">{car.location}</p>
                     </div>
                </div>
            </div>
               <div className=" flex flex-col justify-center items-center w-1/4 space-y-2">
                {car.hoursLeft <=0 ?
                <h5 className=" text-2xl font-manrope text-red-500 font-bold">Đã quá hạn </h5> 
                :
            <div className=" flex space-x-2  items-end"> <p className=" pb-1 font-manrope text-gray-500 text-sm">Thời gian còn lại:</p>  <h5 className=" text-2xl font-manrope text-primary font-bold">{car.hoursLeft} giờ</h5> </div>}
                    <p className="font-manrope text-gray-500 text-sm">Ngày trả: {car.dropOffDate}</p>
                 <button id={car.rentalId} className=" p-2 px-5 bg-primary rounded-md font-manrope text-white text-sm font-medium w-3/4" onClick={(e)=>{openModal();changerentalid(e.target.id); changeopenmodal("traxe")}}>Trả xe</button> 
                                  <button id={car.rentalId} className=" p-2 px-8 border border-primary rounded-md font-manrope  text-sm font-medium w-3/4" onClick={(e)=>{openModal();changerentalid(e.target.id); changeopenmodal("khieunai")}}>Khiếu nại</button> 
                                              <button className=" p-2 px-9 border border-primary rounded-md font-manrope  text-sm font-medium w-3/4"  onClick={()=>{openModal(); changeopenmodal("giahan")}}>Gia hạn thuê</button> 
        </div>
                </div>
                </>
  )
}
       )}
     </div>
    </motion.section>
  );
};
export default MyRentCar;
