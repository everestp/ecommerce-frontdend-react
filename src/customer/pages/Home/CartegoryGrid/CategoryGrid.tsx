import React from 'react'

const CategoryGrid = () => {
  return (
    <div className=' grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
<div className='col-span-3 row-span-12 bg-red-300'>
  <img className='w-full h-full object-cover object-center' src="https://images.pexels.com/photos/30868230/pexels-photo-30868230/free-photo-of-woman-in-traditional-attire-at-train-station.jpeg?auto=compress&cs=tinysrgb&w=300" alt=""  />
  </div>   

  {/* image-2 */}
<div className='col-span-2 row-span-6 bg-red-300'>
<img className='w-full h-full object-cover object-center' src="https://images.pexels.com/photos/30858403/pexels-photo-30858403/free-photo-of-elegant-indian-woman-in-traditional-sari.jpeg?auto=compress&cs=tinysrgb&w=300" alt=""  />
  </div> 

  {/* image -3 */}
<div className='col-span-4 row-span-6 bg-red-300 '>
<img className='w-full h-full object-cover object-center rounded-md ' src="https://images.pexels.com/photos/29368877/pexels-photo-29368877/free-photo-of-elegant-indian-bride-in-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=300" alt=""  />
  </div> 

  {/* image -4 */}
<div className='col-span-3 row-span-12 bg-red-300'>
  <img  className='w-full h-full object-cover object-center' src="https://images.pexels.com/photos/11586420/pexels-photo-11586420.jpeg?auto=compress&cs=tinysrgb&w=300" alt=""  />
  </div> 

  {/* image-5 */}
<div className='col-span-4 row-span-6 bg-red-300'>
<img className='w-full h-full object-cover object-center'  src="https://images.pexels.com/photos/9317208/pexels-photo-9317208.jpeg?auto=compress&cs=tinysrgb&w=300" alt=""  />
  </div> 

  {/* image-6 */}
<div className='col-span-2 row-span-6 bg-red-300'>
<img  className='w-full h-full object-cover object-center rounded-md' src="https://images.pexels.com/photos/29368868/pexels-photo-29368868/free-photo-of-elegant-indian-bridal-portrait-with-traditional-jewelry.jpeg?auto=compress&cs=tinysrgb&w=300" alt=""  />
  
  </div> 

    </div>
  )
}

export default CategoryGrid