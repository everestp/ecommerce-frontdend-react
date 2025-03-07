import React from "react";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useFormik } from "formik";
import { Button, CircularProgress, Grid2, TextField } from "@mui/material";
import { fetchUserProfile, sendLoginSignupOtp, signin } from "../../../State/seller/AuthSlice";

const LoginForm = () => {
  const dispatch =useAppDispatch()
  const {auth}=useAppSelector(store=>store)
    const handleSentOtp= ()=>{
  dispatch(sendLoginSignupOtp({email:formik.values.email}))
    }
    const formik = useFormik({
      initialValues: {
        email: "",
        otp: "",
      },
      onSubmit: (values) => {
        console.log("form data", values);
        dispatch(signin(values))
        dispatch(fetchUserProfile( localStorage.getItem("jwt") || ""))
    
        
        // dispatch(sellerLogin({email:values.email,otp:values.otp}))
      },
    });
  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary-color">
        Login
      </h1>
      <div>
      <form className=" items-center" >
        <Grid2 container spacing={3}>
          {/* grid-2 Mobile */}
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              placeholder="abc@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid2>

          {/* grid-3 otp */}

          {auth.otpSent && (
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="otp"
                label="otp"
                placeholder="Verification Code from Email"
                value={formik.values.otp}
                onChange={formik.handleChange}
                error={formik.touched.otp && Boolean(formik.errors.otp)}
                helperText={formik.touched.otp && formik.errors.otp}
              />
            </Grid2>
          )}
{/* sent otp Button */}
<Grid2 size={{ xs: 12 }} >
 {auth.otpSent ? <Button onClick={()=>formik.handleSubmit() } fullWidth variant="contained" sx={{py:"11px"}}>
Login
  </Button>: <Button onClick={handleSentOtp}fullWidth variant="contained" sx={{py:"11px"}}>
    {auth.loading? <CircularProgress color="primary"/>:"Send OTP"}

  </Button> }
 </Grid2>



        </Grid2>
      </form>
      </div>
    </div>
  );
};

export default LoginForm;
