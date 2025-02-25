import { Avatar, Box, Button, IconButton, useMediaQuery } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import { useTheme } from '@mui/material';


export const NavBar = () => {
  const theme =useTheme()
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"))
  return (
  <>
    <Box>
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
    {["Men","Woman","Home and Funiture","Electronic"].map((item)=><li className='mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center' >{item}</li> )}
   
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
    </Box>
  </>
  )
}
