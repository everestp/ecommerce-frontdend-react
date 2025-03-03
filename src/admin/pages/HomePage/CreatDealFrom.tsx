import { Box, Button, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const CreatDealFrom = () => {
     const formik =useFormik({
            initialValues :{
                discount :0,
                category:""
            },
            onSubmit :(values)=>{
                console.log("submit",values)
            }
        })
  return (
    <Box component={"form"} onSubmit={formik.handleSubmit} className='space-y-6'>
      <Typography className='text-center' variant='h4'>
    Create Deal
</Typography>
<div className='mt-5 bg-teal-30'>
<Grid2 container spacing={2}>
<Grid2  size={{ xs: 12 }} >

<TextField

fullWidth
name="discount"
label="discount"
value={formik.values.discount}
onChange={formik.handleChange}
error={formik.touched.discount && Boolean(formik.errors.discount)}
helperText={formik.touched.discount && formik.errors.discount}
/>
</Grid2>


<Grid2  size={{ xs: 12 }} >
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Age"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
</Grid2>


<Grid2  size={{ xs: 12 }} >
<Button  fullWidth  sx={{ py :"1rem"}} variant='contained'>
  Create Deal
</Button>
</Grid2>
        </Grid2 >
</div>
       

    </Box>
  )
}

export default CreatDealFrom