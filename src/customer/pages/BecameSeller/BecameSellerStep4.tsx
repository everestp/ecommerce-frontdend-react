import { Box, Grid2, TextField } from "@mui/material";


const BecameSellerFormStep4 = ( {formik}:any) => {
 

  return (
    <Box sx={{ max: "auto" }}>
      <p className="text-xl font-bold text-center pb-5">Account Detail</p>
      <form  className=" items-center" onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={3}>
      


 {/*Business Name */}
 <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="businessDetails.businessName"
              label="Business Name"
             
              value={formik.values.businessDetails.businessName}
              onChange={formik.handleChange}
              error={formik.touched.businessDetails?.businessName && Boolean(formik.errors.businessDetails?.businessName)}
              helperText={formik.touched.businessDetails?.businessName && formik.errors.businessDetails?.businessName}
            />
          </Grid2>


           {/*Seller Name */}
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="bankDetails.sellerName"
              label="Seller Name"
              placeholder="Account Number"
              value={formik.values.bankDetails.sellerName}
              onChange={formik.handleChange}
              error={formik.touched.bankDetails?.sellerName && Boolean(formik.errors.bankDetails?.sellerName)}
              helperText={formik.touched.bankDetails?.sellerName && formik.errors.bankDetails?.sellerName}
            />
          </Grid2>

         



    {/* Email */}
          <Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="businessDetails.businessEmail"
              label="Email"
            placeholder="abc@example.com"
              value={formik.values.businessDetails.businessEmail}
              onChange={formik.handleChange}
              error={formik.touched.businessDetails?.businessEmail && Boolean(formik.errors.businessDetails?.businessEmail)}
              helperText={formik.touched.businessDetails?.businessEmail && formik.errors.businessDetails?.businessEmail}
            />
          </Grid2>

{/* password */}
<Grid2 size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="password"
              label="Password"
              placeholder=""
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid2>



        </Grid2>
      </form>
    </Box>
  );
};

export default BecameSellerFormStep4;
