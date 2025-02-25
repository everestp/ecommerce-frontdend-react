import 'tailwindcss'
import './App.css'
import '@mui/icons-material'
import { Button } from '@mui/material'
import { NavBar } from './customer/components/NavBar/NavBar'
import { ThemeProvider } from '@emotion/react'
import customTheme from '../Theme/customTheme'
import Home from './customer/pages/Home/Home'
function App() {
 


  return (
    
<ThemeProvider theme={customTheme} >

<NavBar/>
<Home/>
</ThemeProvider>

   
   
    
  )
}

export default App
