import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { api } from "../../config/Api";
import { OrderState, Order, OrderItem } from "../../types/orderType";
import { Address } from "../../types/userType";

const initialState: OrderState = {
    orders: [],
    orderItem: null,
    currentOrder: null,
    paymentOrder: null,
    loading: false,
    error: null,
    orderCanceled: false
};
const API_URL = "/api/orders";

// Fetch user order history
export const fetchUserOrderHistory = createAsyncThunk<Order[], string>(
  "orders/fetchUserOrderHistory",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("order history fetched ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response.data.error || "Failed to fetch order history"
      );
    }
  }
);
// Fetch order by ID
export const fetchOrderById = createAsyncThunk<
  Order,
  { orderId: number; jwt: string }
>("orders/fetchOrderById", async ({ orderId, jwt }, { rejectWithValue }) => {
  try {
    const response = await api.get<Order>(`${API_URL}/${orderId}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    console.log("order fetched ", response.data);
    return response.data;
  } catch (error: any) {
    console.log("error ", error.response);
    return rejectWithValue("Failed to fetch order");
  }
});
// Create a new order
export const createOrder = createAsyncThunk<
  any,
  { address: Address; jwt: string, paymentGateway:string }
>("orders/createOrder", async ({ address, jwt, paymentGateway}, { rejectWithValue }) => {
  try {
    const response = await api.post(API_URL, address, {
      headers: { Authorization: `Bearer ${jwt}` },
      params: { paymentMethod: paymentGateway }
    });
    console.log("order created ", response.data);
    if(response.data.payment_link_url){
      window.location.href=response.data.payment_link_url
    }
    return response.data;
  } catch (error: any) {
    console.log("error ", error.response);
    return rejectWithValue("Failed to create order");
  }
});
export const fetchOrderItemById = createAsyncThunk<
  OrderItem,
  { orderItemId: number; jwt: string }
>("orders/fetchOrderItemById", async ({ orderItemId, jwt }, { rejectWithValue }) => {
  try {
    const response = await api.get<OrderItem>(`${API_URL}/item/${orderItemId}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    console.log("order item fetched ", response.data);
    return response.data;
  } catch (error: any) {
    console.log("error ", error.response);
    return rejectWithValue("Failed to fetch order item");
  }
});

export const paymentSuccess = createAsyncThunk<
  any,
  { paymentId: string; jwt: string; paymentLinkId: string },
  { rejectValue: string }
>(
  'orders/paymentSuccess',
  async ({ paymentId, jwt, paymentLinkId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/payment/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        params: { paymentLinkId },
      });

      console.log("payment success ", response.data);

      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
      throw rejectWithValue("Failed to process payment");
    
    }
  }
);
 

// Function to cancel an order
export const cancelOrder = createAsyncThunk<
  any,
  { orderId: number; jwt: string },
  { rejectValue: string }
>(
  'orders/cancelOrder',
  async ({ orderId, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.delete<any>(`${API_URL}/${orderId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });

      console.log("order canceled ", response.data);

      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      if (axios.isAxiosError(error) && error.response?.data?.message){
        return rejectWithValue(error.response.data.message);
      }
       return rejectWithValue("Failed to cancel order");
    }
  }
);





const orderSlice = createSlice({
  name :"orders",
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder.addCase(fetchUserOrderHistory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.orderCanceled = false;
    })
    .addCase(fetchUserOrderHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    })
    .addCase(fetchUserOrderHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
    .addCase(fetchOrderById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchOrderById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrder = action.payload;
    })
    .addCase(fetchOrderById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
    .addCase(fetchOrderItemById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchOrderItemById.fulfilled, (state, action) => {
      state.loading = false;
      state.orderItem = action.payload;
    })
    .addCase(fetchOrderItemById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
    .addCase(createOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
   .addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.paymentOrder = action.payload;
    })
   .addCase(createOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
   .addCase(paymentSuccess.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
  .addCase(paymentSuccess.fulfilled, (state, action) => {
      state.loading = false;
      // state.paymentOrder = action.payload;
    })
  .addCase(paymentSuccess.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
    .addCase(cancelOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(cancelOrder.fulfilled, (state,action) => {
      state.loading = false;
      state.orders = state.orders.map((order:any) => order.id == action.payload.id ? action.payload : order);
      state.orderCanceled = true;
      state.currentOrder = action.payload;
    } )
    .addCase(cancelOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    
    })
  },
})


export default orderSlice.reducer;