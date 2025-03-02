import React from 'react'
import { Route, Routes } from 'react-router'
import SellerTable from '../admin/pages/Sellers/SellerTable'
import AddNewCouponForm from '../admin/pages/Coupon/AddNewCouponForm'
import GridTable from '../admin/pages/HomePage/GridTable'
import ElectronicTable from '../admin/pages/HomePage/ElectronicTable'
import Deal from '../admin/pages/HomePage/Deal'
import Coupon from '../admin/pages/Coupon/Coupon'
import ShopByCategory from '../admin/pages/HomePage/ShopByCategory'
import AdminAccount from '../admin/pages/Account/AdminAccount'

const AdminRoutes = () => {
  return (
    <div>
<Routes>
<Route path='/' element={<SellerTable/>}/>
<Route path='/coupon' element={<Coupon/>}/>
<Route path='/add-coupon' element={<AddNewCouponForm/>}/>
<Route path='/home-grid' element={<GridTable/>}/>
<Route path='/electronics-category' element={<ElectronicTable/>}/>
<Route path='/shop-by-category' element={<ShopByCategory/>}/>
<Route path='/deals' element={<Deal/>}/>
<Route path='/account' element={<AdminAccount/>}/>


</Routes>

    </div>
  )
}

export default AdminRoutes