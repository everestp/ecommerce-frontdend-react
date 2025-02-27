import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider } from '@mui/material'

const Review = () => {
  return (
    <div className='p-5 lg:px-20 flex flex-col lg:flex-row gap-20 '>
      <section className='w-full md:w-1/2 lg:w-[30%] space-y-2'>
      <img src=  "https://images.pexels.com/photos/26892209/pexels-photo-26892209/free-photo-of-portrait-of-a-man-wearing-a-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600"
 alt="T-shirt" />
 <div>
  <div>
  <p className='font-bold'>Rest Clothing</p>
  <p className='text-lg text-gray-600'>Men T-shirt</p>


  </div>
  <div className='price flex items-center gap-3 mt-5 text-2xl'>
          <span  className='font-sans text-gray-800'> Rs 300</span>
          <span className='thin-line-through text-gray-400'>Rs 999</span>
          <span className='text-primary-color font-semibold'>60% off</span>
        </div>
 </div>

      </section>
      <section className='space-y-5 w-full'>
        {[1,1,1,1,1,1].map((items)=> <div className='space-y-3'>
          <ReviewCard/>
      <Divider/>
          </div>
      
      )}
      </section>
        
    </div>
  )
}

export default Review