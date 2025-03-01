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
import Review from './customer/pages/Review/Review'
import Cart from './customer/pages/Cart/Cart'
import Checkout from './customer/pages/checkout/Checkout'
import AddressForm from './customer/pages/checkout/AddressForm'
import Account from './customer/pages/Account/Account'
import { Route, Routes } from 'react-router'
function App() {
 


  return (
    
<ThemeProvider theme={customTheme} >

<NavBar/>
{/* <Home/>
<Product/>
<ProductDetails/> 
 <Review/>
<Cart/>
<Checkout/>
<AddressForm/> */}
{/* <Account/> */}

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/products/:category' element={<Product/>}/>
<Route path='/review/:productId' element={<Review/>}/>
<Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/checkout' element={<Checkout/>}/>
<Route path='/account/*' element={<Account/>}/>

</Routes>
</ThemeProvider>

   
   
    
  )
}

export default App
