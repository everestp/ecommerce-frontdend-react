import { CartItem } from "../types/cartType";

 export const sumcartItemMrpPrice = (cartItems: CartItem[]) => {
    return cartItems.reduce((acc, item) => acc + item.mrpPrice*item.quantity, 0);
}