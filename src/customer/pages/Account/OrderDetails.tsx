import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import OrderStepper from './OrderStepper'
import { LocationOn, Shop } from '@mui/icons-material'
import PaymentIcon from '@mui/icons-material/Payment';

const OrderDetails = () => {
    const navigate =useNavigate()
  return (
    <Box className='space-y-5'>

    <section className='flex flex-col gap-5 justify-center items-center'>
      <img className='w-[100px]' src= "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className='text-sm space-y-1 text-center'>
        <h1 className='font-bold'>Apple Watch</h1>
        <p>Black Color 1.43"  amoled display (Back Strap)</p>
        <p><strong>Size:</strong> M</p>
      </div>
      <div className='text-primary-color'>
        <Button  title='t' onClick={() => navigate(`/reviews/create-review`)} />
      </div>
    </section>
    <section className='border p-5'>
        {/* //order stepper */}
<OrderStepper orderStatus={"SHIPPED"}/>
    </section>

    <div className='border p-5'>
  <h1 className='font-bold pb-3'>Delivery Address</h1>
  <div className='text-sm space-y-2'>
    <div className='flex gap-5 font-medium'>
      <p>{"Rest"}</p>
      <Divider flexItem orientation='vertical' />
      <p>{"9838373837"}</p>
    </div>
    <p>
        <LocationOn/>
      {" Banglor 13411 Telegraph Rd"}
    </p>
  </div>
</div>













<div className='border space-y-4'>
  <div className='flex justify-between text-sm pt-5 px-5'>
    <div className='space-y-1'>
      <p className='font-bold'>Total Item Price</p>
      <p>You saved <span className='text-green-500 font-medium text-xs'>Rs{"499"}.00</span> on this item</p>
    </div>
    <p className='font-medium'>Rs {"5,999"}.00</p>
  </div>
  <div className='px-5'>
    <div className='bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3'>
      <PaymentIcon />
      <p>Pay On Delivery</p>
    </div>
  </div>







  <Divider/>
  <div className="px-5 pb-5">
        <p className="text-xs">
          Sold by : {"Apple Inc"}
        </p>
      </div>
      <div className="p-10">
        <Button
        
        //   onClick={handleCancelOrder}
          disabled={false}
          color="error"
          sx={{ py: "0.7rem" }}
          variant="contained"
        >
          {false ? 'Order Cancelled' : 'Cancel Order'}
        </Button>
      </div>
    </div>






 
    </Box>
    
  )
}

export default OrderDetails