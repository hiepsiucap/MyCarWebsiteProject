import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:8080'

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ firstName,lastName, email,phoneNumber, password }, { rejectWithValue }) => {
    try {
    const response = await fetch(`${backendURL}/register`, {
    method: "POST",
    credentials: "include", 
    headers: {
        Accept: "application/json",  // Đặt Accept header thành application/json
        "Content-Type": "application/json",
      },
    body: JSON.stringify({firstName,lastName,email,phoneNumber,password}),
  });
   if(response.status== 400) {
          return rejectWithValue(response.message ||"Tài khoản đã tồn tại vui lòng thử email khác");
   }
   if(!response.ok)
    {
      return rejectWithValue(response.message ||"Xác thực không thành công")
    }
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
export const userLogin = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
       const response = await fetch(`${backendURL}/login`, {
    method: "POST",
    credentials: "include", 
    headers: {
        Accept: "application/json",  // Đặt Accept header thành application/json
        "Content-Type": "application/json",
      },
    body: JSON.stringify(body.data),
  });
  if(!response.ok)
    {
      return rejectWithValue(response.message ||"Xác thực không thành công")
    }
  const data = await response.json();
  return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)