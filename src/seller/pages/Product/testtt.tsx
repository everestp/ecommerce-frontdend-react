
import React from 'react'

const testtt = () => {
  return (
    <div>testtt</div>
  )
}

export default testtt





//  
// 
// 
// 
// 
// 
// 
//    {/*<============ Category 3==========> */}
// <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
//   <FormControl
//     fullWidth
//     error={formik.touched.category3 && Boolean(formik.errors.category3)}
//     required
//   >
//     <InputLabel id="category-label">Third Category</InputLabel>
//     <Select
//       labelId="category-label"
//       id="category"
//       name="category3"
//       value={formik.values.category3}
//       onChange={formik.handleChange}
//       label="Third Category"
//     >
// <MenuItem value="">
//   <em>None</em>
// </MenuItem>
// {formik.values.category2 &&
//   childCategory(
//     categoryTwo[formik.values.category],
//     formik.values.category2
//   )?.map((item: any) => (
//     <MenuItem value={item.categoryId}>{item.name}</MenuItem>
//   ))}
// </Select>
// {formik.touched.category && formik.errors.category && (
//   <FormHelperText>{formik.errors.category}</FormHelperText>
// )}
// </FormControl>

// </Grid2>

// {/*<============ Category 1==========> */}
// <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
//   <FormControl
//     fullWidth
//     error={formik.touched.category && Boolean(formik.errors.category)}
//     required
//   >
//     <InputLabel id="category-label">First Category</InputLabel>
//     <Select
//       labelId="category-label"
//       id="category"
//       name="category"
//       value={formik.values.category}
//       onChange={formik.handleChange}
//       label="First Category"
//     >
// {/* <MenuItem value="">
//   <em>None</em>
// </MenuItem> */}

// { mainCategory.map((item: any) => (
//     <MenuItem value={item.categoryId}>{item.name}</MenuItem>
//   ))}
// </Select>
// {formik.touched.category && formik.errors.category && (
//   <FormHelperText>{formik.errors.category}</FormHelperText>
// )}
// </FormControl>

// </Grid2>


      
// {/*<============ Category 2==========> */}
{/* <Grid2 size={{ xs: 12, md: 4, lg: 4 }}>
  <FormControl
    fullWidth
    error={formik.touched.category && Boolean(formik.errors.category)}
    required
  >
    <InputLabel id="category2-label">Second Category</InputLabel>
    <Select
      labelId="category2-label"
      id="category2"
      name="category2"
      value={formik.values.category2}
      onChange={formik.handleChange}
      label="Second Category"
    >
<MenuItem value="">
  <em>None</em>
</MenuItem>
{formik.values.category &&

    categoryTwo[formik.values.category]?.map((item: any) => (
    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
  ))}
</Select>
{formik.touched.category && formik.errors.category && (
  <FormHelperText>{formik.errors.category}</FormHelperText>
)}
</FormControl>

</Grid2> */}
