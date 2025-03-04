import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../config/Api"

export const sellerLogin = createAsyncThunk<any,any>("/sellerAuth/selleraLogin",
    async(loginReqest,{rejectWithValue})=>{
        try {
            const response = await api.post("/sellers/login",loginReqest)
           
              console.log("Login Successful Otp",response.data)
              const jwt = response.data.jwt;
              localStorage.setItem("jwt",jwt)
        
        } catch (error) {
            console.log("DEBUG: Seller SignIn Request :-",error)
        }
    
    }



)