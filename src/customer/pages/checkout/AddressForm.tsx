import { Box, Button, formControlClasses, Grid2, TextField } from "@mui/material";
import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup"

const AddressFormSchema =Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile number is required").matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  pinCode: Yup.string().required("Pin code is required").matches(/^[1-9][0-9]{5}$/, "Invalid pin code"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  locality: Yup.string().required("Locality is required"),
  
})

const AddressForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      pinCode: "",
      address: "",
      city: "",
      state: "",
      locality: "",
    },
    validationSchema: AddressFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
console.log("formik eroor ",formik.touched.name)
  return (
    <Box sx={{ max: "auto" }}>
      <p className="text-xl font-bold text-center pb-5">Contact Detail</p>
      <form  className=" items-center" onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
          {/* gird-1 */}

          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid2>

          {/* grid-2 Mobile */}
          <Grid2 size={{ xs: 6 }}>
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

          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="pinCode"
              label="pinCode"
              value={formik.values.pinCode}
              onChange={formik.handleChange}
              error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
              helperText={formik.touched.pinCode && formik.errors.pinCode}
            />
          </Grid2>

          {/* grid-4 Adress adress */}
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="address"
              label="Address"
              placeholder="Kantipath (inside 1905 Kantipath restaurant)"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid2>
            {/* grid-5 Locality */}

            <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="locality"
              label="Locality"
              value={formik.values.locality}
              onChange={formik.handleChange}
              error={formik.touched.locality && Boolean(formik.errors.locality)}
              helperText={formik.touched.locality && formik.errors.locality}
            />
          </Grid2>

          {/* grid-5 City */}

          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid2>

          {/* grid-6 State */}

          <Grid2 size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="state"
              label="State"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid2>
          <Grid2 size={{xs:12}}>

            <Button fullWidth type="submit" variant="contained" sx={{py :"14px"}}>
              Add Address

            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};

export default AddressForm;
