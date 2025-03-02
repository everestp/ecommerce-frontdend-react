import { useFormik } from 'formik'
import React from 'react'
import { Dayjs} from 'dayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Box from '@mui/material/Box';
import { Button, Grid2, TextField } from '@mui/material';


interface CouponFromValues {
  code: string,
  discountPercentage:number,
  validityStartDate :Dayjs|null,
  validityEndDate: Dayjs|null,
  minimumOrderValue:number,
}
const AddNewCouponForm = () => {

  const formik= useFormik<CouponFromValues>({
    initialValues :{
      code:"",
      discountPercentage:0,
      validityStartDate :null,
      validityEndDate:null,
      minimumOrderValue:0
    },
    onSubmit:(values)=>{
      console.log("form submitted",values)
      const formattedValues = {
        ...values,

        validityStartDate: values.validityStartDate?.toISOString(),
        validityEndDate:values.validityEndDate?.toISOString(),
    };
    console.log("forate sumiited",values ,formattedValues)
    }
  })
  return (
    <div>
      <h1 className=" text-2xl font-bold  text-primary-color pb-5 text-center"> Create New Coupon</h1>
 <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component={"form"} onSubmit={formik.handleSubmit} sx={{mt:3}}>
        <Grid2 container spacing={2}>


{/* code */}
<Grid2 size={{xs:12,sm:4}}> 
 <TextField
               fullWidth
               name="code"
               label="code"
               placeholder="98XXXXXXXX"
               value={formik.values.code}
               onChange={formik.handleChange}
               error={formik.touched.code && Boolean(formik.errors.code)}
               helperText={formik.touched.code && formik.errors.code}
             />
</Grid2>

{/* discount percentage */}
<Grid2 size={{xs:12,sm:4}}> 
 <TextField
               fullWidth
               name="discountPercentage"
               label="discountPercentage"
               placeholder="98XXXXXXXX"
               value={formik.values.discountPercentage}
               onChange={formik.handleChange}
               error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
               helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
             />
</Grid2>
{/* Minimu
<Grid2 size={{xs:12,sm:4}}> 
 <TextField
               fullWidth
               name="minimumOrderValue"
               label="Minimum Order"
               placeholder="98XXXXXXXX"
               value={formik.values.minimumOrderValue}
               onChange={formik.handleChange}
               error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
               helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
             />
</Grid2>
 {/* validity Start date */}
<Grid2 size={{xs:12,sm:6}}> 
 <DatePicker
  label="Start Date"

 sx={{width:"100%"}}
 name='validityStartDate'
 onChange={formik.handleChange}
 value={formik.values.validityStartDate}
 
 
 />
</Grid2>

 {/* validiity End date */}
 <Grid2 size={{xs:12,sm:6}}> 
 <DatePicker
 label="End Date"
 sx={{width:"100%"}}
 name='validityEndDate'
 onChange={formik.handleChange}
 value={formik.values.validityEndDate}
 
 
 />
</Grid2>

<Grid2 size={{xs:12}}>

            <Button fullWidth type="submit" variant="contained" sx={{py :"14px"}}>
               Create Coupon

            </Button>
          </Grid2>

        </Grid2>



      </Box>
    </LocalizationProvider>


    </div>
  )
}

export default AddNewCouponForm