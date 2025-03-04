import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

 export const sendLoginSignupOtp = createAsyncThunk("/auth/sendLoginSignupOtp",
    async({email}:{email:string},{rejectWithValue})=>{
        try {
            const response = await api.post("/auth/sent/login-signup-otp",{email})
           
              
              console.log("Login Otp",response)
        
        } catch (error) {
            console.log("DEBUG: Auth Slice with error :-",error)
        }
    }
 )

    export const signin = createAsyncThunk<any,any>("/auth/signin",
        async(loginReqest,{rejectWithValue})=>{
            try {
                const response = await api.post("/auth/signin",loginReqest)
               
                  
                  console.log("Login Otp",response)
            
            } catch (error) {
                console.log("DEBUG: Sign requrst  with error :-",error)
            }
        
        }
    


)