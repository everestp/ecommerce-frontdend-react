import React, { useEffect, useState } from 'react';
import { Close, LocalOffer } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import { Button, IconButton, TextField } from '@mui/material';
import PricingCard from './PricingCard';
import { useNavigate } from 'react-router';
import { fetchUserCart } from '../../../State/customer/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import CartItemCard from './CartItemCard';
import ProductCard from '../Product/ProductCard';

const Cart = () => {
  const navigate = useNavigate();
  const [Applied, setApplied] = useState(false);
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(store=>store.cart);
 
  const [couponCode, setCouponCode] = useState('');
  
  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      console.log("Dispatching fetchUserCart with JWT:", jwt);
      dispatch(fetchUserCart(jwt));
    } else {
      console.error("JWT is missing");
    }
  }, [dispatch]);
 

  // Ensure cart is loaded before rendering

  return (
    <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {/* Cartitem left side */}
        <div className='cartItemSection lg:col-span-2 space-y-3'>
          {cart?.cartItems?.map((item) => (
          <h2>f</h2>
          ))}
          
        </div>

        {/* Pricing part right side */}
        <div className='col-span-1 text-sm space-y-3'>
           
          <div className='border-1 rounded-md px-5 py-5 space-y-5'>
            <div className='flex gap-3 text-sm items-center'>
              <LocalOffer sx={{ color: teal[600], fontSize: "17px" }} />
            
              <span></span>
            </div>

            {true ? (
              <div className='flex justify-items-start items-center'>
                <TextField id="outlined-basic" label="Coupon Code" variant="outlined" value={couponCode} onChange={handleChange} />
                <Button size='small' onClick={() => setApplied(false)}>
                  Apply
                </Button>
              </div>
            ) : (
              <div className='flex'>
                <div className='p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center'>
                  <span className=''>REST30 Applied</span>
                  <IconButton onClick={() => { setApplied(true); }} size='small'>
                    <Close className="text-red-600" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
          <div className='border rounded-md'>
            <PricingCard />
            <div className='p-5'>
              <Button onClick={() => navigate("/checkout")} fullWidth variant='contained' sx={{ py: "11px" }}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
