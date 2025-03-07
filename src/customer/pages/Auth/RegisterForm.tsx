import { Box, Button, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../State/Store";
import { sendLoginSignupOtp, signin, signup} from "../../../State/seller/AuthSlice";
import { sellerLogin } from "../../../State/seller/sellerAuthSlice";

const RegisterForm = () => {
const dispatch =useAppDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      fullName:"",
    },
    onSubmit: (values) => {
      console.log("form data", values);
      
      dispatch(signup(values))
    },
  });

  const handleSentOtp= ()=>{
dispatch(sendLoginSignupOtp({email:formik.values.email}))
console.log("otp send")
  }
  return (
    <Box sx={{ max: "auto" }}>
      <p className="text-xl font-bold text-center pb-5 text-primary-color">SignUp</p>
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

          {true && (
             <Grid2 container spacing={3}>
                
 <Grid2 size={{ xs: 12 }}>
  
              <TextField
                fullWidth
                name="otp"
                label="OTP"
                placeholder="Verification Code from Email"
                value={formik.values.otp}
                onChange={formik.handleChange}
                error={formik.touched.otp && Boolean(formik.errors.otp)}
                helperText={formik.touched.otp && formik.errors.otp}
              />
            </Grid2>

            {/* Name of the customer */}
            <Grid2 size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="fullName"
                label="Name"
                placeholder="Enter Your Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} >
  <Button onClick={()=>formik.handleSubmit() }  fullWidth variant="contained" sx={{py:"11px"}}>
Register
  </Button>
 </Grid2>

             </Grid2>
           





            
          )}


{/* sent otp Button */}
<Grid2 size={{ xs: 12 }} >
  <Button onClick={handleSentOtp} fullWidth  variant="contained" sx={{py:"11px"}}>
Send OTP
  </Button>
 </Grid2>


        </Grid2>
      </form>
    </Box>
  );
};

export default RegisterForm;
