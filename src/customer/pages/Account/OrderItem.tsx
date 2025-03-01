import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
<div className="flex item-center gap-5">
  <div>
    <Avatar sizes='small' sx={{bgcolor:teal[500]}}>
<ElectricBolt/>

    </Avatar>
  </div>
  <div>
<h1 className='font-bold text-primary-color'>PENDING</h1>
<p>Arriving by Mon,15 Jul</p>

  </div>
</div>
<div className="p-5 bg-teal-50 flex-gap-3 ">
<div>
  <img className='w-[70px]' src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Smart Watc" />
</div>
<div>
  <h1 className='font-bold'>Apple Watch</h1>
  <p>Black Color 1.43"  amoled display (Back Strap)</p>
  <p><strong>size :</strong>FREE</p>
  
</div>
</div>
    </div>
  )
}

export default OrderItem