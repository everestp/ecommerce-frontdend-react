import { Products } from "./ProductTypes";
import { User } from "./userType";

  // Interface for Cart
 export   interface CartItem {
    id: number;
    cart?: Cart;
    product: Products;
    size: string;
    quantity: number;
    mrpPrice: number;
    sellingPrice: number;
    userId: number;
  }





   export interface Cart {
    id: number;
    user: User;
    cartItems: CartItem[];
    totalSellingPrice: number;
    totalItem: number;
    totalMrpPrice: number;
    discount: number;
    couponCode: string | null;
  }
  
  // Example usage of Cart
 