import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { teal } from '@mui/material/colors'
import React, { useState } from 'react'
import { colors } from '../../../data/Filter/color'
import { price } from '../../../data/Filter/price'
import {useSearchParams} from 'react-router-dom'
import { discount } from '../../../data/Filter/discount'

const FilterSection = () => {
  const [expandColor,setExpandColor] = useState(false);

  const [searchParams,setSearchParams] = useSearchParams();
  const handleColorToggle =()=>{
    setExpandColor(!expandColor);
  }



  const updateFilterParams =(e:any)=>{
    const {value, name} = e.target;
    if(value){
      searchParams.set(name,value);

    }
    else{
     searchParams.delete(name)
    }
    setSearchParams(searchParams)
  };

  const clearAllFilters =()=>{
    searchParams.forEach((value:any,key:any)=>{
      searchParams.delete(key);
    })
      setSearchParams(searchParams);
    
  };
  
  return (
    <div className='-z-50 space-y-5 bg-white'>
      <div className='flex item-center justify-between h-[40px] px-9 lg:border-r'>
        <p  className='text-lg font-semibold'>Filters</p>
        
        <Button onClick={clearAllFilters} size='small' className='text-teal-600 cursor-pointer font-semibold'>
          clear all
        </Button>

      </div>
      <Divider/>
      <div className='px-9 space-y-6'>

         {/* color */}

      <section>


<FormControl>
<FormLabel 
sx={{fontSize :"16px",
fontWeight :"bold",
color :teal[500],
pb:"14px"

}}

className='text-2xl font-semibold ' id='color'>Color</FormLabel>
<RadioGroup
aria-labelledby="color"
onChange={updateFilterParams}
defaultValue=""
name="color"


>

{ colors.slice(0,expandColor? colors.length :5).map((item)=>
<FormControlLabel value= {item.name} control={<Radio />} label={
<div className='flex items-center gap-2'>
  <p>{item.name}</p>
  <p style={{backgroundColor :item.hex}} className={`h-5 w-5 rounded-full`}></p>

</div>
} />
)}

</RadioGroup>
</FormControl>
<div>
  <button className='text-primary-color cursor-pointer hover:text-teal-900 flex items-center'
  onClick={handleColorToggle}>
    {expandColor?"Hide":`+${colors.length-5} more`}
  </button>
</div>


</section>

{/* price */}
<section>


<FormControl>
<FormLabel 
sx={{fontSize :"16px",
fontWeight :"bold",
color :teal[600],
pb:"14px"

}}

className='text-2xl font-semibold ' id='price'>Price</FormLabel>
<RadioGroup
aria-labelledby="price"
onChange={updateFilterParams}
defaultValue=""
name="price"

>

{ price.map((item,index)=> (
<FormControlLabel 
key={item.name}
value={item.value}
control={<Radio size='small' />}
label ={item.name}

/>
))}

</RadioGroup>
</FormControl>


</section>


 {/* discount */}
 <section>


<FormControl>
<FormLabel 
sx={{fontSize :"16px",
fontWeight :"bold",
color :teal[600],
pb:"14px"

}}

className='text-2xl font-semibold ' id='brand'>Discount</FormLabel>
<RadioGroup
aria-labelledby="brand"
onChange={updateFilterParams}
defaultValue=""
name="color"

>

{ discount.map((item)=> (
<FormControlLabel 
key={item.name}
value={item.value}
control={<Radio size='small' />}
label ={item.name}

/>
))}

</RadioGroup>
</FormControl>


</section>

      </div>
     

    </div>
  )
}

export default FilterSection

function value(value: string, key: string, parent: URLSearchParams): void {
  throw new Error('Function not implemented.')
}
