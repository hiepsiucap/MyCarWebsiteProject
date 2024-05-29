import { createBrowserRouter,RouterProvider } from "react-router-dom";

import './App.css'
import { RootLayout,AllRental, HomePage,RegisterCarForm,CheckRegisterCar, HowToRent, DetailCar, ListCar, AccountDetail, SideBarAccountLayout, FavouriteCar,MyCar,Complete, MyRentCar, Revenue, ComplainCheck ,RegisterCar, Booking, UpdateCar, Calendar, LicensePage } from "./Page";
function App() {
 const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
         path: "/complete/:id",
         element: <Complete></Complete>
        },
        {
         path: "/registercarform",
         element: <RegisterCarForm></RegisterCarForm>
        },
         {
          path: "/howtorent",
          element: <HowToRent></HowToRent>,
        },
          {
          path: "/car/:id",
          element: <DetailCar></DetailCar>,
        },
        {
          path: "/car",
          element: <ListCar></ListCar>
        },
        {
          path: "/registercar",
          element: <RegisterCar></RegisterCar>,
        },
        {
          path: "/booking/:id",
          element: <Booking></Booking>
        },
        
        {
          path: "/user",
          element: <SideBarAccountLayout></SideBarAccountLayout>,
          children: [
            {
          path: "/user/account",
          element: <AccountDetail></AccountDetail>,
           },
            {
          path: "/user/allrental",
          element: <AllRental></AllRental>,
           },
            {
          path: "/user/favouritecar",
          element: <FavouriteCar></FavouriteCar>,
           },
           {
            path: "/user/checkregistercar",
            element: <CheckRegisterCar></CheckRegisterCar>
         
           },
            {
          path: "/user/license",
          element: <LicensePage></LicensePage>,
           },
            {
          path: "/user/complain",
          element: <ComplainCheck></ComplainCheck>,
           },
           
             {
          path: "/user/mycar",
          children: [
              {
          path: "/user/mycar/",
          element: <MyCar></MyCar>,
           },
          ]
           },
           
            {
          path: "/user/myrentcar",
          element: <MyRentCar></MyRentCar>,
           },
               {
          path: "/user/revenue",
          element: <Revenue></Revenue>,
           },
          ]
        },
        {
          path: "/updatecar/:id",
          element:<UpdateCar></UpdateCar>
        },
        {
          path: "/calendar/:id",
          element:<Calendar></Calendar>
        }
      ],
    },
  ]);
  return (
     <>
      <RouterProvider router={router} id="root"  />
    </>
  )
}

export default App
