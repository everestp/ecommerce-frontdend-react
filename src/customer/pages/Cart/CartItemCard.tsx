import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React from "react";
import PricingCard from "./PricingCard";
import { Cart, CartItem } from "../../../types/cartType";
import { useAppDispatch } from "../../../State/Store";
import { updateCartItem } from "../../../State/customer/cartSlice";

const CartItemCard = ({item}:{item:CartItem}) => {

  const dispatch = useAppDispatch();
  
  const handleUpdateQuantity = (value:number)=> () => {
    //update cart quantity
    dispatch(updateCartItem({
      jwt: localStorage.getItem("jwt") || "",
      cartItemId: item.id,
      cartItem: {quantity :item.quantity + value}
    }));
  };

  return (
    <div className=" border rounded-md relative">
      <div className="p-5 flex gap-5">
        <div>
          <img
            className="w-[90px] rounded-md"
            src={item.product.images[0]}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg ">{item.product.seller?.businessDetails.businessName}</h1>
          <p className="text-gray-600 font-medium text-sm">
           {item.product.title}
          </p>
          <p className="text-gray-400 text-sm">
            {" "}
            <strong>Sold by:</strong> {item.product.seller?.businessDetails.businessName}
          </p>
          <p className="text-sm">7 days Replacement available</p>
          <p className="text-sm text-gray-900">
            <strong>Quantity :{item.product.quantity} </strong>{item.product.quantity}
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
      <div className="px-5 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2 w-[140px] justify-between">
          <Button disabled={false} onClick={handleUpdateQuantity(-1)}>
            <Remove />
          </Button>
          <p>{item.product?.numRating}</p>

          <Button onClick={handleUpdateQuantity(+1)}>
            <Add />
          </Button>
        </div>
      </div>


      {/* total price */}
      <div className="pr-5">
        <p className="text-gray-700 font-medium"> Rs {item.sellingPrice}</p>
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

export default CartItemCard;
