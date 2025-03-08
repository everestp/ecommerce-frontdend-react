import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../State/Store";
import { createOrder } from "../../../State/customer/orderSlice";

const AddressFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile number is required").matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  pinCode: Yup.string().required("Pin code is required").matches(/^[1-9][0-9]{5}$/, "Invalid pin code"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  locality: Yup.string().required("Locality is required"),
  GSTIN: Yup.string().required("GSTIN is required"),
});

const AddressForm = (props) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      pinCode: "",
      address: "",
      city: "",
      state: "",
      locality: "",
      GSTIN: "",  // ✅ Added GSTIN here
    },
    validationSchema: AddressFormSchema,
    onSubmit: (values) => {
      console.log("Submitting order with:", values);
      dispatch(createOrder({ address: values, jwt: localStorage.getItem("jwt") || "", paymentGateway:props.paymentMethod}));
      console.log("Order Dispatched!");
    },
  });

  return (
    <Box sx={{ maxWidth: "auto" }}>
      <p className="text-xl font-bold text-center pb-5">Contact Detail</p>
      <form onSubmit={formik.handleSubmit} className="items-center">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth name="name" label="Name" value={formik.values.name} onChange={formik.handleChange} 
              error={formik.touched.name && Boolean(formik.errors.name)} helperText={formik.touched.name && formik.errors.name} />
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth name="mobile" label="Mobile" placeholder="98XXXXXXXX" value={formik.values.mobile} onChange={formik.handleChange} 
              error={formik.touched.mobile && Boolean(formik.errors.mobile)} helperText={formik.touched.mobile && formik.errors.mobile} />
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth name="pinCode" label="Pin Code" value={formik.values.pinCode} onChange={formik.handleChange} 
              error={formik.touched.pinCode && Boolean(formik.errors.pinCode)} helperText={formik.touched.pinCode && formik.errors.pinCode} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth name="address" label="Address" placeholder="Enter full address" value={formik.values.address} onChange={formik.handleChange} 
              error={formik.touched.address && Boolean(formik.errors.address)} helperText={formik.touched.address && formik.errors.address} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth name="locality" label="Locality" value={formik.values.locality} onChange={formik.handleChange} 
              error={formik.touched.locality && Boolean(formik.errors.locality)} helperText={formik.touched.locality && formik.errors.locality} />
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth name="city" label="City" value={formik.values.city} onChange={formik.handleChange} 
              error={formik.touched.city && Boolean(formik.errors.city)} helperText={formik.touched.city && formik.errors.city} />
          </Grid>

          <Grid item xs={6}>
            <TextField fullWidth name="state" label="State" value={formik.values.state} onChange={formik.handleChange} 
              error={formik.touched.state && Boolean(formik.errors.state)} helperText={formik.touched.state && formik.errors.state} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth name="GSTIN" label="GSTIN" value={formik.values.GSTIN} onChange={formik.handleChange} 
              error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)} helperText={formik.touched.GSTIN && formik.errors.GSTIN} />
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained" sx={{ py: "14px" }}> Add Address </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddressForm;
