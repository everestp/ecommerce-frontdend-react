import { Box, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const SellerLoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
  });
  return (
    <Box sx={{ max: "auto" }}>
      <p className="text-xl font-bold text-center pb-5 text-primary-color">Login As Seller</p>
      <form className=" items-center" onSubmit={formik.handleSubmit}>
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
        </Grid2>
      </form>
    </Box>
  );
};

export default SellerLoginForm;
