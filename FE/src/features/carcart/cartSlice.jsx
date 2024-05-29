import { createSlice } from '@reduxjs/toolkit';
const cartcarSlice = createSlice({
    name: 'listcar',
    initialState: {
      carId: "",
      pickUpDate: "",
      pickUpHours: "",
      dropOffDate: "",
      dropOffHours: "",
      totalCost: "",
      location: "",
    },
    reducers: {
        createacart: (state, {payload})=>{
            state.carId= payload.carId;
             state.pickUpDate= payload.pickUpDate;
              state.pickUpHours= payload.pickUpHours;
               state.dropOffDate= payload.dropOffDate;
                state.dropOffHours= payload.dropOffHours;
                state.totalCost= payload.totalCost;
                state.location= payload.location
        },
    },
});
export const { createacart} = cartcarSlice.actions;
export default cartcarSlice.reducer