import { CartItem } from "../types/cartType";

export const sumcartItemSellingPrice =(cartItems:CartItem[])=>{
return cartItems.reduce((acc, item) => acc + item.sellingPrice *item.quantity, 0);
}