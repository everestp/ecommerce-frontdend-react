import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useAppDispatch } from '../../../State/Store'
import { paymentSuccess } from '../../../State/customer/orderSlice'

const PaymentSucess = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {orderId} =useParams();

    useEffect(()=>{
dispatch(paymentSuccess({jwt:localStorage.getItem('jwt') || "",paymentId:"",paymentLinkId:localStorage.getItem('paymentLinkId') || ""}))
    },[orderId])
  return (
    <div className='"min-h-[90vh] flex justify-center items-center'>
        <div className='bg-primary-color text-white p-8 w-[90%] lg:w-[25%]  border rounded-md h-[40vh] flex flex-col gap-7 justify-center items-center'>
            <h1 className='text-3xl font-semibold'>Payment Sucess</h1>
            <h1 className='text-center'>Your payment has been sucessfully completed</h1>


            <div>
            <button onClick={()=>navigate("/")} className='bg-white text-primary-color px-5 py-2 rounded-md'>Shope More</button>
            </div>
          
        </div>

    </div>
  )
}

export default PaymentSucess