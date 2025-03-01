import React, { useState } from 'react'
import SellerAccountForm from './SellerAccountForm'
import SellerLoginForm from './SellerLoginForm'
import { Button } from '@mui/material'

const BecameSeller = () => {
    const [isLogin ,setIsLogin]=useState(false)
    const handleShowPage =()=>{
        setIsLogin(!isLogin)
    }
  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
        <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md'>
            {
                isLogin? <SellerAccountForm/> :<SellerLoginForm/>
            }
            <div className='mt-10 space-y-2 '>
                <h1 className='text-center text-sm font-medium'>{!isLogin? "Register Here":"Have Account"}</h1>
<Button onClick={handleShowPage} fullWidth sx={{py :"11px"}} variant='outlined'>
    {!isLogin? "Register":"Login"}
</Button>
            </div>

        </section>
        <section className='hidden md:col-span-1 g:col-span-2 md:flex justify-between items-center'>
            <div className='lg: w-[70%] px-5 space-y-5' >
                <div className='space-y-2 font-bold text-center'>
                    <p className='text-2xl'>Join the MarketPlace Revolution</p>
                    <p className='text-lg text-primary-color'>Boost your Sales Today</p>


                </div>
                <img  className="w-full"src="https://cdn.pixabay.com/photo/2016/11/18/12/08/white-male-1834125_1280.jpg" alt="" />

            </div>

        </section>

    </div>
  )
}

export default BecameSeller