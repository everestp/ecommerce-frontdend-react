import React, { useState } from 'react'
import CartItem from './CartItem'
import { Close, LocalOffer } from '@mui/icons-material'
import { teal } from '@mui/material/colors'
import { Button, IconButton, Input, TextField } from '@mui/material'
import PricingCard from './PricingCard'

const Cart = () => {
    const[Applied,setApplied]=useState(false)
 
const [couponCode,setCouponCode]=useState("")
    const handleChange=(e:any)=>{
        setCouponCode(e.target.value)
        setApplied(!Applied)

    }
  return (
    <div className='  pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            {/* Cartitem left side */}
            <div className='cartItemSection lg:col-span-2 space-y-3'>
                {[1,1,1,1].map((item)=> <CartItem/>)}


            </div>

             {/* pricig part right side */}
            <div className='col-span-1 text-sm space-y-3 '>
                <div className=' border-1 rounded-md px-5 py-5 space-y-5'>
                    
                        <div className='flex gap-3 text-sm items-center'>
                        <div className="flex gap-3 text-sm items-center">
                            <LocalOffer  sx={{color:teal[600],fontSize :"17px"}}/>
                        </div>
                        <span>Appy Coupons</span>
                        </div>

             { Applied?   <div className='flex justify-items-start  items-center' >
                <TextField id="outlined-basic" label=" Coupon Code" variant="outlined" />
                <Button onClick={handleChange} size='small'>
                   Apply
                </Button>
                </div> : <div className='flex'>
                    <div className='p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center'>
                        <span className=''>REST30 Appiled</span>
                        <IconButton onClick={()=>{setApplied(true)}} size='small'>
                            <Close className=" text-red-600"/>
                        </IconButton>

                    </div>


                </div> }


                </div>
                <div className='border rounded-md'>
                <PricingCard/>
                <div className='p-5'>
                    <Button fullWidth variant='contained' sx={{py:"11px"}}>
                        Buy Now

                    </Button>
                </div>
                </div>

            </div>

        </div>
    </div>
    
  )
}

export default Cart