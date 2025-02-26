import React from 'react'
 import  './ShopByCategory.css'

const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
        <div className=' custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color'>
        <img className=' rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full' src="https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Iphone"  />
        </div>
        <h1> Iphone</h1>

    </div>
  
  )
}

export default ShopByCategoryCard