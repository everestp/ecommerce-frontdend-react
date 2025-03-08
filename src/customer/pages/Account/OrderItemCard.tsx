import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'
import { OrderItem } from '../../../types/orderType'

const OrderItemCard = ({item}:{item:OrderItem}) => {
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
  <img className='w-[70px]' src={item.product.images[0]} alt="Smart Watc" />
</div>
<div>
  <h1 className='font-bold'>{item.product.seller?.businessDetails.businessName}</h1>
  <p>{item.product.title}</p>
  <p><strong>size :</strong>FREE</p>
  
</div>
</div>
    </div>
  )
}

export default OrderItemCard