import { Box, Button, formControlClasses, Grid2, TextField } from "@mui/material";
import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup"
import BecameSellerStep2 from "./BecameSellerStep2";


const BecameSellerFormStep1 = ( {formik}:any) => {
 

  return (
    <Box sx={{ max: "auto" }}>
      <p className="text-xl font-bold text-center pb-5">Contact Detail</p>
      <form  className=" items-center" onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
      

          {/* grid-2 Mobile */}
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="mobile"
              label="Mobile"
              placeholder="98XXXXXXXX"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid2>

          {/* grid-3 Pin-Code */}

          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="GSTIN"
              label="GSTIN"
              value={formik.values.GSTIN}
              onChange={formik.handleChange}
              error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
              helperText={formik.touched.GSTIN && formik.errors.GSTIN}
            />
          </Grid2>

        </Grid2>
      </form>
    </Box>
  );
};

export default BecameSellerFormStep1;
