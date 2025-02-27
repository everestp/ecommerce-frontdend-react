import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
        <div className='gridd grid-cols-1 lg:grid-cols-3 gap-5 '>
            {/* Cartitem left side */}
            <div className='cartItemSection lg:col-span-2 space-y-3'>
                {[1,1,1,1].map((item)=> <CartItem/>)}


            </div>

             {/* pricig part right side */}
            <div className='col-span-1 text-sm space-y-3'>
                <div className='coupanSection'>

                </div>

            </div>

        </div>
    </div>
    
  )
}

export default Cart