import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { Button } from '@mui/material'
import { Favorite, ModeComment } from '@mui/icons-material'
import { teal } from '@mui/material/colors'
import { Products } from '../../../types/ProductTypes'


const ProductCard = ({item}:{item:Products}) => {
  console.log("Itwm fro Prodfuxct",item)
  const [currentImage,setCurrentImage]=useState(0)
  const [isHovered,setIsHovered]=useState(false);
  useEffect(()=>{
   
    let interval:any 
    if(isHovered){
      interval =setInterval(() => {
        setCurrentImage((prevImage)=>(prevImage+1)%item.images.length)
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
        {item.images.map((item,index)=><img className='card-media object-top' src={item} alt=""
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
          <h1>{item.seller?.businessDetails.businessName}</h1>
          <p>{item.title}</p>

        </div>
        <div className='price flex items-center gap-3'>
          <span  className='font-sans text-gray-800'> Rs {item.sellingPrice}</span>
          <span className='thin-line-through text-gray-400'>Rs {item.mrpPrice}</span>
          <span className='text-primary-color font-semibold'>{item.discountPrice}%</span>
        </div>

      </div>
    </div>


    </>
  )
}

export default ProductCard