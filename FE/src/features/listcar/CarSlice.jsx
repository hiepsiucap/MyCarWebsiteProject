import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk('listcar/fetchCars', async ({ rangeprice, brand, fuel, province, district, type ,page }) => {
    let params = {};
    console.log(params);

    if (brand) params = { ...params, brand };
        console.log(params);

    if (type?.length) params = { ...params, type: type.join(',') };
    if (rangeprice.length == 2) {
        if (rangeprice[0] !== null) params = { ...params, minprice: rangeprice[0] * 100000 };
        if (rangeprice[1] !== null) params = { ...params, maxprice: rangeprice[1] * 100000 };
    }
    if(page!=0) {
         params = { ...params, page: page}
    }
    if (fuel?.length) params = { ...params, fuel: fuel.join(',') };
    if (province) params = { ...params, province: province };
    if (district) params = { ...params, district: district };

    console.log(params);

    const response = await axios.get('http://localhost:8080/api/cars/conditions', { params });
    console.log(response);

    return response.data;
});
const inital ={
        cars: [],
        rangeprice: [0,100],
        brand: "",
        fuel : [],
        loading: false,
        province: "",
        district: "",
        error: null,
        type: [],
        page: 0,
    }
const listcarSlice = createSlice({
    name: 'listcar',
    initialState: inital,
    reducers: {
        changepage: (state,{payload}) =>{
           state.page= payload;
        },
       resetfilter: (state )=>{
          state.brand =null;
          state.cars= [];
        state.rangeprice= [0,100];
        state.brand= null,
        state.fuel = [],
        state.province = null
        state.district =null,
        state.type= [],
        state.page=0
       },
       changerangeprices: (state,{payload})=> {
            state.rangeprice=payload;
       },
       changebrand : (state, {payload})=>{
             state.brand= payload
       },
       changefuel : (state,{payload})=>{
              state.fuel= payload
       },
       changeprovincelocation: (state, {payload}) =>{
            state.province= payload;
       },
       changedistrictlocation: (state, {payload}) =>{
            state.district= payload;
       },
       changetype: (state, {payload}) =>{
        state.type= payload;
       }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.loading = false;
                state.cars = action.payload;
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { changebrand, changefuel,changetype,changedistrictlocation,changeprovincelocation, changelocation,resetfilter, changerangeprices, changepage} = listcarSlice.actions;
export default listcarSlice.reducer;