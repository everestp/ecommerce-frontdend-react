import { Divider } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import Order from './Order';
import OrderDetails from './OrderDetails';


const menu = [
  { name: "orders", path: "/account/orders" },
  { name: "profile", path: "/account/profile" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" }
];

const Account = () => {
  const navigate =useNavigate();
  const location= useLocation();
  const handleClick=(item:any)=>navigate(item.path)
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
<OrderDetails/>
</section>
</div>


    </div>
  )
}

export default Account