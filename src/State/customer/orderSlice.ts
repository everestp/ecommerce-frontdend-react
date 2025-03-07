import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../Store";
import { Order, OrderItem, OrderState } from "../types/orderTypes";
import { Address } from "../types/userTypes";
import { api } from "../Config/Api";
import { ApiResponse } from "../types/authTypes";

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
  { address: Address; jwt: string, paymentGateway: string }
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
