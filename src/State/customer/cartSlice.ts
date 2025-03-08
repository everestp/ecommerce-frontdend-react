import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Cart, CartItem } from "../../types/cartType";
import { RootState } from "../Store";
import { sumcartItemSellingPrice } from "../../Util/sumcartItemSellingPrice";
import { sumcartItemMrpPrice } from "../../Util/sumcartItemMrpPrice";
import { applyCoupon } from "./couponSlice";

interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: CartState = {
  cart: null,
  loading: false,
  error:  null,
};

// Define the base URL for the API
const API_URL = "/api/cart";

export const fetchUserCart = createAsyncThunk<any,any>(
  "cart/fetchUserCart",
  async (jwt: string | null, { rejectWithValue }) => {
    try {
      const response = await api.get(API_URL, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Cart fetched  just above retu", response.data);
      return response.data;
    } catch (error: any) {
  
    
      console.error("DEBUG : Failed to fetch user cart", error.response.data);
      return rejectWithValue("DEBUG : Failed to fetch user cart");
    }
  }
);

// Define the interface for AddItemRequest
interface AddItemRequest {
  productId: number | undefined;
  size: string;
  quantity: number;
}

// Define the asynchronous thunk for adding an item to the cart
export const addItemToCart = createAsyncThunk<CartItem, { jwt: string | null; request: AddItemRequest }>(
  'cart/addItemToCart',
  async ({ jwt, request }, { rejectWithValue }) => {
    try {
      const response = await api.put(`${API_URL}/add`, request, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log('Item added to cart', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Error adding item to cart:', error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCartItem = createAsyncThunk<any, { jwt: string; cartItemId: number }>(
  'cart/deleteCartItem',
  async ({ jwt, cartItemId }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${API_URL}/item/${cartItemId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || 'Failed to delete cart item'
      );
    }
  }
);

// Define the asynchronous thunk for updating a cart item
export const updateCartItem = createAsyncThunk<any, { jwt: string |null, cartItemId: number, cartItem: any }>(
  'cart/updateCartItem',
  async ({ cartItemId, cartItem, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `${API_URL}/item/${cartItemId}`,
        cartItem,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      console.log("Cart item updated", response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response.data.message || 'Failed to update cart item'
      );
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCartState: (state) => {
      state.cart = null;
      state.loading = false;
      state.error = null;
    },
    // Add other reducers if necessary
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCart.pending, (state) => {
        state.loading = true;
       
      })
      .addCase(fetchUserCart.fulfilled, (state, action:PayloadAction<Cart>) => {
        console.log("Redux: Updating state with fetched cart:", action.payload);
        state.cart = action.payload;
     
        console.log("Redux: New state:", state.cart);
        console.log("Intial SD=tate ",initialState.cart)


        
      })
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addItemToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        if (state.cart) {
          state.cart.cartItems.push(action.payload);
        }
        state.loading = false;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        if (state.cart) {
          state.cart.cartItems = state.cart.cartItems.filter((item) => item.id !== action.meta.arg.cartItemId);
          const mrpPrice = sumcartItemMrpPrice(state.cart.cartItems || []);
          const sellingPrice = sumcartItemSellingPrice(state.cart.cartItems || []);
          state.cart.totalMrpPrice = mrpPrice;
          state.cart.totalSellingPrice = sellingPrice;
        }
        state.loading = false;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {  
        state.cart = action.payload;
        state.loading = false;
       
      });
  }
});

export default cartSlice.reducer;
export const { resetCartState } = cartSlice.actions;
