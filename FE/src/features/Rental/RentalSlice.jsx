import { createSlice } from '@reduxjs/toolkit';
const listcarSlice = createSlice({
    name: 'listcar',
    initialState: {
      rentalinfo: null,
      carinfo: null,
    },
    reducers: {
        createarental: (state, {payload})=>{
            state.rentalinfo= payload.rentalinfo;
            state.carinfo= payload.carinfo;
            

        },
    },
});
export const { createarental} = listcarSlice.actions;
export default listcarSlice.reducer