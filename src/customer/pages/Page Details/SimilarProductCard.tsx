import React from 'react'


const images =[
    "https://images.pexels.com/photos/26892209/pexels-photo-26892209/free-photo-of-portrait-of-a-man-wearing-a-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/30850541/pexels-photo-30850541/free-photo-of-casual-portrait-overlooking-rio-de-janeiro-coast.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/30880513/pexels-photo-30880513/free-photo-of-man-sitting-with-dog-on-city-steps-in-buenos-aires.jpeg?auto=compress&cs=tinysrgb&w=600"
  ]
const SimilarProductCard = () => {
   
  return (
    <div>
      <div className='group px-4 relative'>
      <div className='card'
      
      >
        <img className='card-media object-top' src="https://images.pexels.com/photos/26892209/pexels-photo-26892209/free-photo-of-portrait-of-a-man-wearing-a-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
         
       
        
       
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
    </div>
  )
}

export default SimilarProductCard