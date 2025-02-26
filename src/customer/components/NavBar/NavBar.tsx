import { Avatar, Box, Button, IconButton, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../../data/mainCategory';


export const NavBar = () => {
  const theme =useTheme()
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"))
  const [selectedCategory,setSelectedCategory] =useState("men");
  const [showCategorySheet,setShowCategorySheet] =  useState(false);
  return (
  <>
    <Box className='sticky top-0 left-0 right-0 bg-white' sx={{zIndex:2}}>
      <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b'>
        <div className='flex items-center gap-9'>
          <div className='flex items-center gap-2'>


{ !isLarge && <IconButton>
<MenuIcon/>

</IconButton>

}
<h1 className='logo cursor-pointer text-lg md:text-2xl text-primary-color'>
  Carten
</h1>
<div>
  <ul className='flex items-center font-medium text-gray-800 gap-2'>
    {mainCategory.map((item)=><li
    onMouseLeave={()=>{
      setShowCategorySheet(false);
    }}
    onMouseEnter={()=>{
      setShowCategorySheet(true);
      setSelectedCategory(item.categoryId);
    }}
    className='mainCategory hover:text-primary-color hover:border-b-4 h-[70px] px-4 border-primary-color flex items-center' >{item.name}</li> )}
   
  </ul>
</div>
          </div>
        </div>
        <div className='flex gap-1 lg:gap-6 items-center'>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          {
            false? <Button>
              <Avatar 
              sx={{width :29, height :29}}
              src='https://media.licdn.com/dms/image/v2/D4D03AQFzjRVkW1Q7Tg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719747759442?e=1746057600&v=beta&t=qDDaGnKLRAppjZ8602qEXfxejZ73IHHJ-ANTFO4t63s'/>
              <h1 className='font-semibold  lg:block'>Everest</h1>
            

            </Button> : <Button variant='contained'>Login</Button>
          }
          <IconButton>
            <FavoriteBorder sx={{fontSize :29}} />
          </IconButton>
          <IconButton>
            <AddShoppingCart className='text-gray-700' sx={{fontSize :29}} />
          </IconButton>
         { isLarge && <Button  startIcon ={<Storefront/>} variant='outlined'>
            Become Seller
          </Button>
}
   
        </div>
        
      </div>
  { showCategorySheet &&   <div 
      
      onMouseLeave={()=>
        setShowCategorySheet(false)
  }
      onMouseEnter={()=>
        setShowCategorySheet(true)
      
      }
      className='categorySheet absolute top-[4.41rem] left-20 right-20 '>
        <CategorySheet selectedCategory={selectedCategory}/>
      </div>

      }
    </Box>
  </>
  )
}
