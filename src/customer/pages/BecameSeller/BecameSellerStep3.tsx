import { Box, Grid2, TextField } from "@mui/material";


const BecameSellerFormStep3 = ( {formik}:any) => {
 

  return (
    <Box sx={{ max: "auto" }}>
      <p className="text-xl font-bold text-center pb-5">Account Detail</p>
      <form  className=" items-center" onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
      

           {/* aCCOUNT Number */}
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="bankDetails.accountNumber"
              label="Account Number"
              placeholder="98XXXXXXXX"
              value={formik.values.bankDetails.accountNumber}
              onChange={formik.handleChange}
              error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
              helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
            />
          </Grid2>

          {/* ISFC-Code */}
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="bankDetails.ifscCode"
              label="IFSC Code"
              placeholder="98XXXXXXXX"
              value={formik.values.bankDetails.ifscCode}
              onChange={formik.handleChange}
              error={formik.touched.bankDetails?.ifscCode && Boolean(formik.errors.bankDetails?.ifscCode)}
              helperText={formik.touched.bankDetails?.ifscCode && formik.errors.bankDetails?.ifscCode}
            />
          </Grid2>



    {/* Account HoderName */}
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="bankDetails.accountHolderName"
              label="Account HolderName"
              placeholder="98XXXXXXXX"
              value={formik.values.bankDetails.accountHolderName}
              onChange={formik.handleChange}
              error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
              helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName}
            />
          </Grid2>
        </Grid2>
      </form>
    </Box>
  );
};

export default BecameSellerFormStep3;
