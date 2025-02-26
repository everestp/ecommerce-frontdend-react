import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'

const ShopByCategory = () => {
  return (
    <div className='flex flex-wrap justify-between gap-7' >
        {[1,1,1,1,1,1,1,1,1,1,].map((items)=><ShopByCategoryCard/>)}
    
    </div>
  )
}

export default ShopByCategory