import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarComponent from "./CarComponent";
import Slider from "react-slick";
import { Link } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" bg-primary flex justify-center items-center rounded-full absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-14 h-14"
    //   style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FFFFFF" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

        </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" bg-primary z-50 flex justify-center items-center rounded-full absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-14 h-14"
    //   style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FFFFFF" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>


        </div>
  );
}

function CarSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    //  dotsClass: "custom-dots"
  };
  return (
    <div className=" relative">
    <div className="slider-container ">
      <Slider {...settings}>
        <Link to="/car/234" className=" px-2">
         <CarComponent></CarComponent>
        </Link>
              <Link className=" px-2">
 <CarComponent></CarComponent>
        </Link>
        <Link to="/car/234" className=" px-2">
 <CarComponent></CarComponent>
        </Link>
           <Link className=" px-2">
      <CarComponent></CarComponent>
        </Link>
        <Link className=" px-2">
 <CarComponent></CarComponent>
        </Link>
         <Link className=" px-2">
     <CarComponent></CarComponent>
        </Link>
          <Link className=" px-2">
  <CarComponent></CarComponent>
        </Link>
        <Link className=" px-2">
       <CarComponent></CarComponent>
        </Link>
        <Link className=" px-2">
 <CarComponent></CarComponent>
        </Link>
      </Slider>
    </div>
    
    </div>
  );
}

export default CarSlick;