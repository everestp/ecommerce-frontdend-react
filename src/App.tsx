import 'tailwindcss'
import './App.css'
import '@mui/icons-material'
import { Button } from '@mui/material'
import { NavBar } from './customer/components/NavBar/NavBar'
import { ThemeProvider } from '@emotion/react'
import customTheme from '../Theme/customTheme'
import Home from './customer/pages/Home/Home'
import Product from './customer/pages/Product/Product'
import ProductDetails from './customer/pages/Page Details/ProductDetails'
function App() {
 


  return (
    
<ThemeProvider theme={customTheme} >

<NavBar/>
{/* <Home/> */}
{/* <Product/> */}
<ProductDetails/>
</ThemeProvider>

   
   
    
  )
}

export default App
