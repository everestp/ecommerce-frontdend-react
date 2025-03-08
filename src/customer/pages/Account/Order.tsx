import React, { useEffect } from 'react'

import { fetchUserOrderHistory } from '../../../State/customer/orderSlice'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../State/Store'
import OrderItemCard from './OrderItemCard'

const Order = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()  
const order = useAppSelector(store => store.order)
  useEffect(()=>{
    dispatch(fetchUserOrderHistory(localStorage.getItem('jwt') || ""))
  },[dispatch])

  return (
    <div className='text-sm min-h- screen'>
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
      </div>
      <div className="space-y-2">
        {order.orders.map((order)=> order.orderItems.map((item)=><OrderItemCard item={item}/>))}
      </div>

    </div>
  )
}
export default Order


