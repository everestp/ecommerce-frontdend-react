import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <>
    <div className="space-y-3 p-5">
    
        <div className="flex justify-between items-center">
            <span>Subtotal</span>
            <span>Rs 899</span>
           
        </div>
        
        <div className="flex justify-between items-center">
            <span>Discout</span>
            <span>Rs 699</span>
           
        </div>
        
        <div className="flex justify-between items-center">
            <span>Shipping</span>
            <span>Rs 69</span>
           
        </div>
        
        <div className="flex justify-between items-center">
           
            <span>PlatForm</span>
            <span className='text-primary-color '>Free</span>
           
        </div>
        
           
        </div>
        <Divider/>
        <div className="flex justify-between items-center p-5 text-primary-color ">
        <span>Total</span>
        <span ><p className='text'>Rs 768</p></span>

    </div>
    </>
  )
}

export default PricingCard