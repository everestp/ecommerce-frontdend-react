import { Box, Button, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../State/Store";
import { sendLoginSignupOtp} from "../../../State/seller/AuthSlice";
import { sellerLogin } from "../../../State/seller/sellerAuthSlice";

const SellerLoginForm = () => {
const dispatch =useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
      
      dispatch(sellerLogin({email:values.email,otp:values.otp}))
    },
  });

  const handleSentOtp= ()=>{
dispatch(sendLoginSignupOtp({email:formik.values.email}))
  }
  return (
    <Box sx={{ max: "auto" }}>
      <p className="text-xl font-bold text-center pb-5 text-primary-color">Login As Seller</p>
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
  <Button onClick={handleSentOtp}fullWidth variant="contained" sx={{py:"11px"}}>
Sent OTP
  </Button>
 </Grid2>

 <Grid2 size={{ xs: 12 }} >
  <Button onClick={()=>formik.handleSubmit() }  fullWidth variant="contained" sx={{py:"11px"}}>
Login
  </Button>
 </Grid2>


        </Grid2>
      </form>
    </Box>
  );
};

export default SellerLoginForm;
