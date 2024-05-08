import { createBrowserRouter,RouterProvider } from "react-router-dom";

import './App.css'
import { RootLayout, HomePage, HowToRent, DetailCar, ListCar, AccountDetail, SideBarAccountLayout, FavouriteCar,MyCar, MyRentCar, Revenue ,RegisterCar } from "./Page";
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
          path: "/user",
          element: <SideBarAccountLayout></SideBarAccountLayout>,
          children: [
            {
          path: "/user/account",
          element: <AccountDetail></AccountDetail>,
           },
            {
          path: "/user/favouritecar",
          element: <FavouriteCar></FavouriteCar>,
           },
             {
          path: "/user/mycar",
          element: <MyCar></MyCar>,
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
