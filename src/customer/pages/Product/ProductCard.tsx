import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { Button } from '@mui/material'
import { Favorite, ModeComment } from '@mui/icons-material'
import { teal } from '@mui/material/colors'
const images =[
  "https://images.pexels.com/photos/26892209/pexels-photo-26892209/free-photo-of-portrait-of-a-man-wearing-a-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/30850541/pexels-photo-30850541/free-photo-of-casual-portrait-overlooking-rio-de-janeiro-coast.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/30880513/pexels-photo-30880513/free-photo-of-man-sitting-with-dog-on-city-steps-in-buenos-aires.jpeg?auto=compress&cs=tinysrgb&w=600"
]

const ProductCard = () => {
  const [currentImage,setCurrentImage]=useState(0)
  const [isHovered,setIsHovered]=useState(false);
  useEffect(()=>{
    let interval:any 
    if(isHovered){
      interval =setInterval(() => {
        setCurrentImage((prevImage)=>(prevImage+1)%images.length)
      }, 1000);
    }
    else if(interval){
      clearInterval(interval);
      interval =null;

    }
    return() => clearInterval(interval);

  },[isHovered])
  return (
    <>
    <div className='group px-4 relative'>
      <div className='card'
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
      >
        {images.map((item,index)=><img className='card-media object-top' src={item} alt=""
         style={{transform :`translateX(${(index-currentImage)*100}%)`}}/>)}
         
         {/* This div is appear ony when it over */}
         {

          isHovered &&
          <div className='indicator flex flex-col items-center space-y-2'>

            <div className='flex gap-3'>
              <Button variant='contained' color='secondary'>
                <Favorite sx={{color:teal[500]}}/>

              </Button>
              <Button variant='contained' color='secondary'>
                <ModeComment sx={{color:teal[500]}}/>

              </Button>
            </div>

          </div>


         }
       
      </div>

      <div className='details pt-3 space-y-1 group-hover-effect rounded-md '>
        <div className='name'>
          <h1>Nike</h1>
          <p>White Shirt</p>

        </div>
        <div className='price flex items-center gap-3'>
          <span  className='font-sans text-gray-800'> Rs 300</span>
          <span className='thin-line-through text-gray-400'>Rs 999</span>
          <span className='text-primary-color font-semibold'>60%</span>
        </div>

      </div>
    </div>


    </>
  )
}

export default ProductCard