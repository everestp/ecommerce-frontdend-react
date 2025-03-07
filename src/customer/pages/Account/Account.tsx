import { Divider } from '@mui/material'
import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import Order from './Order';
import OrderDetails from './OrderDetails';
import UseDetail from './UserDetail';
import UserDetail from './UserDetail';
import Address from './Address';
import { logout } from '../../../State/seller/AuthSlice';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../State/Store';


const menu = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" }
];

const Account = () => {
  const navigate =useNavigate();
  const location= useLocation();
  const dispatch = useAppDispatch();
  const handleClick=(item:any)=>{
    if(item.path==="/"){
      // dispatch(logout(navigate))
      dispatch(logout(navigate))
    }
    
    navigate(item.path)
  }
  return (
    <div className='px-5 lg:px-52 min-h-screen mt-10 '>
      <div>
        <h1 className='text-xl font-bold '>
          Rest
        </h1>
      </div>
<Divider/>
<div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vhh]">
<section className='cols-span-1 lg:border-r lg:pr-5 py-5 h-full '>
{/* left */}
{menu.map((item)=> (
   <div onClick={()=>handleClick(item)} key={item.name} className={` ${item.path==location.pathname?"bg-primary-color text-white":""}
   
   py-3 cursor-pointer hover:text-white hover:bg-primary-color px-5 rounded-md `}>
    <p>{item.name}</p>
  </div>
))
}

</section>
<section className='left lg:col-span-2 lg:pl-5 py-5 '>
  <Routes>
    <Route path='/' element={<UserDetail/>}/>
    <Route path='/orders' element={<Order/>}/>
    <Route path='/order/:orderItemId' element={<OrderDetails/>}/>
    <Route path='/addresses' element={<Address/>}/>
  </Routes>
{/* <OrderDetails/> */}
{/* <UserDetail/> */}
{/* <Address/> */}
</section>
</div>


    </div>
  )
}

export default Account