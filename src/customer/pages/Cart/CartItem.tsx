import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React from "react";
import PricingCard from "./PricingCard";

const CartItem = () => {
  const handleUpdateQuantity = () => {
    //update cart quantity
  };

  return (
    <div className=" border rounded-md relative">
      <div className="p-5 flex gap-5">
        <div>
          <img
            className="w-[90px] rounded-md"
            src="https://images.pexels.com/photos/30835527/pexels-photo-30835527/free-photo-of-majestic-lion-roaring-in-natural-habitat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load "
            alt="leopard"
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg "> Rest Cloting</h1>
          <p className="text-gray-600 font-medium text-sm">
            This is the best clothing made with natural silk fiber and the best
            part it is good
          </p>
          <p className="text-gray-400 text-sm">
            {" "}
            <strong>Sold by:</strong> Carten Clothing Private Limited
          </p>
          <p className="text-sm">7 days Replacement available</p>
          <p className="text-sm text-gray-900">
            <strong>Quantity : </strong>28
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
      <div className="px-5 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2 w-[140px] justify-between">
          <Button disabled={true} onClick={handleUpdateQuantity}>
            <Remove />
          </Button>
          <p>5</p>

          <Button onClick={handleUpdateQuantity}>
            <Add />
          </Button>
        </div>
      </div>


      {/* total price */}
      <div className="pr-5">
        <p className="text-gray-700 font-medium"> Rs 99</p>
      </div>
      </div>
{/* button  */}
<div className="absolute top-1 right-1">
<IconButton color="primary">
<Close/>
</IconButton>
</div>
      
    </div>
  );
};

export default CartItem;
