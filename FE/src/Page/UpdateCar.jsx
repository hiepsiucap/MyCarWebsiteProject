/** @format */
import { useEffect } from "react"
import { year } from "../Utiliz/Constants"
import { motion } from "framer-motion"
import { useState , useRef } from "react"
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom"
import { carbrands } from "../Utiliz/Constants"
import { useParams } from "react-router-dom"
import { getRequest } from "../Utiliz/services"
const UpdateCar = () => {
  const navigate= useNavigate();
    const [step, changestep] =useState(1);
       const [provincess, setProvinces] = useState([]);
       const {id}= useParams();
    const [districts, setDistrict] = useState([]);
    const inputRef1= useRef();
    const [datasubmit1,ChangeDatasubmit1] =useState(
      {
           licensePlates:"",
           model: "",
           brand: "",
           year: "",
           color: "",
           consumption: "",
           description: "",
           seat: "", 
           type: "",
           gear: "",
           fuel : "",

      }
    )
       const [datasubmit2,ChangeDatasubmit2] =useState(
      {
           address: "",
           province: "",
           district: "",
           cost : 0,
           date: "",

      }
    )
    // useEffect(()=>{
    //   const getData=async()=> {
    //     const response = await getRequest(`http://localhost:8080/api/cars/${id}`);
    //     if(response.error) return;
    //     console.log(response)
    //     ChangeDatasubmit1({
    //       licensePlates:"",
    //        model: ,
    //        brand: "",
    //        year: "",
    //        color: "",
    //        consumption: "",
    //        description: "",
    //        seat: "",
    //        type: "",
    //        gear: "",
    //        fuel : "",
    //     })
    //   }
    //   getData();
    // },[])
    const NextStep=()=> {
        if(step==1)
          {
            if(!datasubmit1.licensePlates ||! datasubmit1.brand ||! datasubmit1.color || !datasubmit1.consumption || !datasubmit1.description || !datasubmit1.fuel || !datasubmit1.gear || !datasubmit1.model || !datasubmit1.seat || !datasubmit1.type || !datasubmit1.year)
              {
                setError1(true);
                 Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: "Kiểm tra bạn đã điền đủ thông tin hay chưa!",
      icon: "error"});
              }
              else
              {
                changestep((prev)=> prev+1)
              }
          }
          if(step==2)
          {
            if(!datasubmit2.address|| !datasubmit2.date || !datasubmit2.district || !datasubmit2.province || !datasubmit2.cost)
              {
                setError2(true);
                 Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: "Kiểm tra bạn đã điền đủ thông tin hay chưa!",
      icon: "error"});
              }
              else
              {
                changestep((prev)=> prev+1)
              }
          }
    }
    useEffect(()=>{
       const data1={
           licensePlates:"75A-09140",
           model: "Camry 2.0",
           brand: "Toyota",
           year: "2023",
           color: "Đen",
           consumption: "7",
           description: "Là một xe xịn xò",
           seat: "7",
           type: "CUV",
           gear: "Số tự động",
           fuel : "Xăng",

      }
      ChangeDatasubmit1(data1);
    },[])
    const onChangeSumbit1 =(e)=> {
            ChangeDatasubmit1((prev)=> {
              return {...prev,[e.target.id]: e.target.value}
            })
    }
    const onChangeSumbit2 =(e)=> {
            ChangeDatasubmit2((prev)=> {
              return {...prev,[e.target.id]: e.target.value}
            })
    }
    const [error1, setError1]= useState(false);
     const [error2, setError2]= useState(false);
    const inputRef2= useRef();
    const inputRef3= useRef();
    const inputRef4= useRef();
    const inputRef5= useRef();
    const inputRef6= useRef();
  const [selectedFile, setselectedFile] =useState({
     image1: "",
     image2: "",
     image3: "",
     image4: "",
     imagethumnail: "",
     mainimage: "",
  });

     console.log(datasubmit2);
  const handleOnChange = (e)=> {
      e.preventDefault()
      console.log(e.target.files);
      const id= e.target.id;
    if(e.target.files && e.target.files.length> 0)
      {
         
        setselectedFile((prev)=> {return {...prev, [id]: e.target.files[0]}});
      }
  }
  console.log(selectedFile)
  const onChooseFile1 =(e)=> {
    e.preventDefault()
    inputRef1.current.click();
  }
    const onChooseFile2 =(e)=> {
    e.preventDefault()
    inputRef2.current.click();
  }
    const onChooseFile5 =(e)=> {
    e.preventDefault()
    inputRef5.current.click();
  }
    const onChooseFile3 =(e)=> {
    e.preventDefault()
    inputRef3.current.click();
  }
    const onChooseFile4 =(e)=> {
    e.preventDefault()
    inputRef4.current.click();
  }
    const onChooseFile6 =(e)=> {
    e.preventDefault()
    inputRef6.current.click();
  }
  const SubmitHanlder =()=>{
    if(!selectedFile.image1 || !selectedFile.image2 || !selectedFile.image3 || !selectedFile.image4 || !selectedFile.imagethumnail || !selectedFile.mainimage)
      {
         Swal.fire({
      title: "Vui lòng điền đủ thông tin!",
      text: "Kiểm tra bạn đã điền đủ thông tin hay chưa!",
      icon: "error"})
              }
      else
      {
        const data={...datasubmit1,...datasubmit2,...selectedFile};
        console.log(data);
     Swal.fire({
      title: "Đơn hàng thành công!",
      text: "Nhân viên của chúng tôi sẽ xét duyện sau 24h!",
      icon: "success"}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    console.log("hello");
    navigate("/user/mycar")
  }}); 
  }
}
  const removeFile =() => {
    setselectedFile(null);
  }
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
   useEffect(() => {
  // Scroll to the top when the component mounts
  window.scrollTo(0, 0);
}, [step]);
  const onChangeHanlder=async (e)=>{
      ChangeDatasubmit2((prev)=> {return {...prev,province: e.target.value}});
  const body = { province_id: Number(e.target.value) };
      console.log(body);
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
  }
  return (
    <motion.section   initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }} className="bg-slate-50 py-6 ">
        <h1 className=" text-3xl font-manrope font-bold py-6">Cập nhật thông tin xe</h1>
         <div className=" w-1/2 mx-auto bg-white rounded-md  shadow-md p-8">
                <div className=" flex w-2/3 mx-auto justify-between items-center py-4 ">
                    <div className=" flex flex-col justify-center items-center space-y-2">
                        {step===1 ?<div className=" py-5 px-7 rounded-full border bg-primary font-bold text-white w-min">1</div> : <div className=" py-5 px-7 border rounded-full  font-bold  w-min">1</div> }
                        <p className=" font-manrope text-gray-600 ">Thông tin xe</p>
                        
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
 <div className=" flex flex-col justify-center items-center space-y-2">
                                              {step===2 ?<div className=" py-5 px-7 rounded-full border bg-primary font-bold text-white w-min">2</div> : <div className=" py-5 px-7 border rounded-full  font-bold  w-min">2</div> }
                        <p className=" font-manrope text-gray-600 ">Thông tin thuê xe</p>
                        
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
 <div className=" flex flex-col justify-center items-center space-y-2">
                                           {step===3 ?<div className=" py-5 px-7 rounded-full border bg-primary font-bold text-white w-min">3</div> : <div className=" py-5 px-7 border rounded-full  font-bold  w-min">3</div> }
                        <p className=" font-manrope text-gray-600 ">Hình ảnh xe</p>
                        
                    </div>
     </div>
     <div className=" border border-gray-200"></div>
     <form className=" py-6 flex flex-col space-y-6 h-full" >
      { step ===1 && 
      <>
        <div className=" flex flex-col space-y-3 items-start ">
            <label className=" font-bold font-manrope text-lg">Biển số xe</label>
            <p className=" text-red-600 text-sm font-manrope">Lưu ý: Biển số sẽ không thể thay đổi sau khi đăng kí.
</p>
            <input disabled id="licensePlates" required type="text" value={datasubmit1.licensePlates} onChange={onChangeSumbit1} className={!datasubmit1.licensePlates && error1 ?" px-2 border border-red-500 py-2.5  w-1/2 rounded-md" : " px-2 border py-2.5 border-slate-300 w-1/2 rounded-md"} />
        </div>
         <div className=" flex flex-col space-y-3 items-start ">
            <label className=" font-bold font-manrope text-lg">Thông tin cơ bản</label>
            <p className=" text-red-500 text-sm font-manrope">Lưu ý: Các thông tin cơ bản sẽ không thể thay đổi sau khi đăng kí.

</p>        
           <div className=" grid grid-cols-2 gap-x-8 gap-y-4 w-full py-6">
            <div className=" flex flex-col space-y-2 items-start w-full">
            <label  className=" font-manrope ">Hãng xe</label>
            <input disabled onChange={onChangeSumbit1} id="brand" type="text" value={datasubmit1.brand} className={!datasubmit1.brand && error1 ?" px-2 border border-red-500 py-2.5  w-full rounded-md" : " px-2 border py-2.5 border-slate-300 w-full rounded-md"} >
              
              </input>
            </div>
             <div className=" flex flex-col space-y-2 items-start w-full">
            <label className=" font-manrope">Mẫu xe</label>
            <input disabled type="text" id="model" onChange={onChangeSumbit1} value={datasubmit1.model} className={!datasubmit1.model && error1 ?" px-2 border border-red-500 py-2.5  w-full rounded-md" : " px-2 border py-2.5 border-slate-300 w-full rounded-md"} />
            </div>
             <div className=" flex flex-col space-y-2 items-start w-full">
            <label className=" font-manrope">Loại nhiên liệu</label>
            <input disabled onChange={onChangeSumbit1} type="text" id="fuel" value={datasubmit1.fuel} className={!datasubmit1.fuel && error1 ?" px-2 border border-red-500 py-2.5 w-full  rounded-md" : " px-2 border py-2.5 border-slate-300 w-full  rounded-md"} >
        
              </input>
            </div>
             <div className=" flex flex-col space-y-2 items-start w-full">
            <label className="font-manrope">Số ghế</label>
            <input disabled onChange={onChangeSumbit1} type="text" id="seat" value={datasubmit1.seat} className={!datasubmit1.seat && error1 ?" px-2 border border-red-500 py-2.5  w-full rounded-md" : " px-2 border py-2.5 border-slate-300 w-full rounded-md"} >
               
              </input>
            </div>
               <div className=" flex flex-col space-y-2 items-start w-full">
            <label className="font-manrope">Năm sản xuất</label>
            <input disabled onChange={onChangeSumbit1} type="text" id="year" value={datasubmit1.year} className={!datasubmit1.year && error1 ?" px-2 border border-red-500 py-2.5 w-full   rounded-md" : " px-2 border py-2.5 w-full border-slate-300  rounded-md"} >
                   
              </input>
            </div>
               <div className=" flex flex-col space-y-2 items-start w-full">
            <label className="font-manrope">Truyền động</label>
            <input disabled onChange={onChangeSumbit1} type="text" id="gear" value={datasubmit1.gear} className={!datasubmit1.gear && error1 ?" px-2 border border-red-500 py-2.5 w-full  rounded-md" : " px-2 border py-2.5 w-full border-slate-300 rounded-md"} />
               
            </div>
             <div className=" flex flex-col space-y-2 items-start w-full">
            <label className="font-manrope">Loại xe</label>
            <input disabled  onChange={onChangeSumbit1} type="text" id="type" value={datasubmit1.type} className={!datasubmit1.type && error1 ?" px-2 border border-red-500 py-2.5  w-full  rounded-md" : " px-2 border w-full py-2.5 border-slate-300 rounded-md"} >
          
              </input>
            </div>
             <div className=" flex flex-col space-y-2 items-start w-full">
            <label className=" font-manrope">Màu sắc</label>
            <input disabled onChange={onChangeSumbit1} type="text" id="color" value={datasubmit1.color} className={!datasubmit1.color && error1 ?" px-2 border border-red-500 py-2.5  w-full rounded-md" : " px-2 border py-2.5 w-full border-slate-300 rounded-md"}/>
            </div>
           </div>
              <div className=" flex flex-col space-y-3 items-start w-full ">
            <label className=" font-bold font-manrope text-lg">Tiêu thụ nhiên liệu</label>
            <p className=" text-gray-500 text-sm font-manrope">Số lít nhiên liệu cho quãng đường 100km
</p>
            <input onChange={onChangeSumbit1} required type="text" id="consumption"  value={datasubmit1.consumption} className={!datasubmit1.consumption && error1 ?" px-2 border border-red-500 py-2.5  w-1/2 rounded-md" : " px-2 border py-2.5 border-slate-300 w-1/2 rounded-md"} />
        </div>
        </div>
          <div className=" flex flex-col space-y-3 items-start w-full ">
            <label className=" font-bold font-manrope text-lg">Mô tả</label>
            <textarea  type="text" id="description" rows={6} onChange={onChangeSumbit1} value={datasubmit1.description} className={!datasubmit1.licensePlates && error1 ?" px-2 border border-red-500 py-2.5 w-full rounded-md" : " px-2 border w-full py-2.5 border-slate-300  rounded-md"} />
        </div>
        </>
     }
     
       { step ===2 && 
      <>
        <div className=" flex flex-col space-y-3 items-start ">
            <label className=" font-bold font-manrope text-lg">Giá cho thuê đề xuất</label>
            <p className=" text-gray-400 text-sm font-manrope  text-start">Đơn giá áp dụng cho tất cả các ngày. Bạn có thuể tuỳ chỉnh giá khác cho các ngày đặc biệt (cuối tuần, lễ, tết...) trong mục quản lý xe sau khi đăng kí.
</p>
            <input type="number" id="cost" value={datasubmit2.cost} onChange={onChangeSumbit2} className={!datasubmit2.cost && error2 ?"px-2 border py-2.5 border-red-500 w-1/2 rounded-md" : "px-2 border py-2.5 border-slate-300 w-1/2 rounded-md"} placeholder="1000k" />
        </div>
         <div className=" flex flex-col space-y-3 items-start ">
            <label className=" font-bold font-manrope text-lg">Địa điểm nhận xe</label>
            <p className=" text-red-500 text-sm font-manrope">Lưu ý: Đây là địa điểm mà khách nhận xe.

</p>        
             <form className=" flex-col space-y-3 w-3/4 items-start py-8 text-start">
        <div className=" flex flex-col space-y-1">
             <label for="city" className=" text-sm font-manrope text-gray-500 ">Thành phố,tỉnh:</label>
              <select  name="provinces" id="province" value={datasubmit2.province} className={!datasubmit2.province && error2 ?" p-3 border border-red-500 rounded-md" : " p-3 border border-slate-300 rounded-md" } onChange={onChangeHanlder}>
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
              <select name="district" id="district" value={datasubmit2.district} onChange={onChangeSumbit2}  className={!datasubmit2.province && error2 ?" p-3 border border-red-500 rounded-md" : " p-3 border border-slate-300 rounded-md" }>
               {districts.map((district) => {
                  return (
                    <option value={district.DistrictName} key={district.DistrictID}>
                      {district.DistrictName}
                    </option>
                  );
                })}
              </select>
        </div>
          <div className=" flex flex-col space-y-1">
             <label for="city" className=" text-sm font-manrope text-gray-500 ">Tên đường:</label>
              <input name="cars" id="address" value={datasubmit2.address} onChange={onChangeSumbit2} className={!datasubmit2.address && error2 ?" p-3 border border-red-500 rounded-md" : " p-3 border border-slate-300 rounded-md" }>

              </input>
        </div>
</form>
              <div className=" flex flex-col space-y-3 items-start w-full ">
            <label className=" font-bold font-manrope text-lg">Thời gian giao xe</label>
            <input type="date" id="date" value={datasubmit2.date} onChange={onChangeSumbit2} className={!datasubmit2.date && error2 ?" border py-2.5 px-4 border-red w-1/2 rounded-md" :" border py-2.5 px-4 border-slate-300 w-1/2 rounded-md"}  />
        </div>
        </div>
       
        </>
     }
   
     { step ===3 && 
      <>
         <p className=" font-bold font-manrope text-start text-lg">Ảnh Thumnail(600*600)</p>
 <div className=" w-1/2 h-72 flex-col ">
            <input id="imagethumnail" type="file" ref={inputRef6} accept="image/png, image/gif, image/jpeg" onChange={handleOnChange} className=" hidden"></input>
           <button className=" relative w-full flex flex-col h-full px-24 py-32 border border-dashed border-primary rounded-lg justify-center items-center" onClick={onChooseFile6}>
            { selectedFile.imagethumnail &&  <img className=" absolute w-full h-full scale-95 rounded-md" src={selectedFile.imagethumnail !==null && URL.createObjectURL(selectedFile.imagethumnail)} alt="" />}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#04ABFF" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>
            <p className=" font-manrope font-bold text-primary text-sm pt-2">Chọn hình ảnh từ máy</p>
           </button>
           <div className="pt-6"></div>
        
        </div>
          <p className=" font-bold font-manrope text-start text-lg">Ảnh Chính(1260*720)</p>
          <div className=" w-full h-72 flex-col ">
            <input id="mainimage" type="file" ref={inputRef1} accept="image/png, image/gif, image/jpeg" onChange={handleOnChange} className=" hidden"></input>
           <button className=" relative w-full flex flex-col h-full px-24 py-40 border border-dashed border-primary rounded-lg justify-center items-center" onClick={onChooseFile1}>
            { selectedFile.mainimage &&  <img className=" absolute w-full h-full scale-95 rounded-md" src={selectedFile.mainimage !==null && URL.createObjectURL(selectedFile.mainimage)} alt="" />}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#04ABFF" className="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>
            <p className=" font-manrope font-bold text-primary text-sm pt-2">Chọn hình ảnh từ máy</p>
           </button>
           <div className="pt-6"></div>
        
        </div>
   <p className=" font-bold font-manrope text-start text-lg pt-12">Ảnh khác(600*600)</p>
        <div className=" grid grid-cols-2 gap-5 py-6 pb-12 gap-y-16">
        <div className=" w-full h-72 flex-col ">
            <input id="image1" type="file" ref={inputRef2} accept="image/png, image/gif, image/jpeg" onChange={handleOnChange} className=" hidden"></input>
            <h5 className=" font-manrope text-lg text-start pb-5">Hình Ảnh 1</h5>
           <button className=" relative w-full flex flex-col h-full px-24 py-32 border border-dashed border-primary rounded-lg justify-center items-center" onClick={onChooseFile2}>
            { selectedFile.image1 &&  <img className=" absolute w-full h-full scale-95 rounded-md" src={selectedFile.image1 !==null && URL.createObjectURL(selectedFile.image1)} alt="" />}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#04ABFF" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>
            <p className=" font-manrope font-bold text-primary text-sm pt-2">Chọn hình ảnh từ máy</p>
           </button>
           <div className="pt-6"></div>
      
        </div>
         <div className=" w-full h-72 flex-col ">
            <input id="image2" type="file" ref={inputRef3} accept="image/png, image/gif, image/jpeg" onChange={handleOnChange} className=" hidden"></input>
            <h5 className=" font-manrope text-lg text-start pb-5">Hình Ảnh 2</h5>
           <button className=" relative w-full flex flex-col h-full px-24 py-32 border border-dashed border-primary rounded-lg justify-center items-center" onClick={onChooseFile3}>
            { selectedFile.image2 &&  <img className=" absolute w-full h-full scale-95 rounded-md" src={selectedFile.image2 !==null && URL.createObjectURL(selectedFile.image2)} alt="" />}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#04ABFF" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>
            <p className=" font-manrope font-bold text-primary text-sm pt-2">Chọn hình ảnh từ máy</p>
           </button>
           <div className="pt-6"></div>
        
        </div>
         <div className=" w-full h-72 flex-col ">
            <input type="file" id="image3" ref={inputRef4} accept="image/png, image/gif, image/jpeg" onChange={handleOnChange} className=" hidden"></input>
            <h5 className=" font-manrope text-lg text-start pb-5">Hình Ảnh 3</h5>
           <button className=" relative w-full flex flex-col h-full px-24 py-32 border border-dashed border-primary rounded-lg justify-center items-center" onClick={onChooseFile4}>
            { selectedFile.image3 &&  <img className=" absolute w-full h-full scale-95 rounded-md" src={selectedFile.image3 !==null && URL.createObjectURL(selectedFile.image3)} alt="" />}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#04ABFF" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>
            <p className=" font-manrope font-bold text-primary text-sm pt-2">Chọn hình ảnh từ máy</p>
           </button>
          
        </div>
         <div className=" w-full h-72 flex-col ">
            <input type="file" id="image4" ref={inputRef5} accept="image/png, image/gif, image/jpeg" onChange={handleOnChange} className=" hidden"></input>
            <h5 className=" font-manrope text-lg text-start pb-5">Hình Ảnh 4</h5>
           <button className=" relative w-full flex flex-col h-full px-24 py-32 border border-dashed border-primary rounded-lg justify-center items-center" onClick={onChooseFile5}>
            { selectedFile.image4 &&  <img className=" absolute w-full h-full scale-95 rounded-md" src={selectedFile.image4 !==null && URL.createObjectURL(selectedFile.image4)} alt="" />}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#04ABFF" class="w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>
            <p className=" font-manrope font-bold text-primary text-sm pt-2">Chọn hình ảnh từ máy</p>
           </button>
           <div className="pt-6"></div>
          
        </div>
    </div>
        </>
     }
   
     </form>
         </div>
         <div className=" py-3"></div>
         <div className=" w-1/2 mx-auto flex space-x-6  ">
            {step ===1 ?
             <button  disabled className= "bg-white rounded-lg py-3 w-full shadow-sm border font-manrope">Quay lại</button>
             :
            <button onClick={()=> {changestep((step)=> step-1)}} className= "bg-white rounded-lg py-3 w-full shadow-sm border font-manrope">Quay lại</button>}
                        {step ===3 ?
               <button  className=" rounded-lg py-4 w-full shadow-sm font-bold font-manrope  text-white bg-primary border" onClick={SubmitHanlder}>Hoàn tất</button>
             :
              <button onClick={()=> {NextStep()} }className=" rounded-lg py-4 w-full shadow-sm font-bold font-manrope  text-white bg-primary border" >Chuyển tiếp</button>}
                
         </div>
    </motion.section>
  );
};
export default UpdateCar;
