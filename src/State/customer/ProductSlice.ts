import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Products } from "../../types/ProductTypes";

const API_URL = "/products";

// Corrected: Ensure rejectWithValue is returned
export const fetchProductById = createAsyncThunk<any, any>(
  "products/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/${productId}`);
      const data = await response.data;
      console.log("Fetch product by Id", data);
      return data;
    } catch (error: any) {
      console.log("DEBUG: Fetched Product By Id With error", error);
      return rejectWithValue(error.message); // Corrected
    }
  }
);

// Corrected: Ensure rejectWithValue is returned
export const searchProduct = createAsyncThunk(
  "products/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/search`, {
        params: {
          query,
        },
      });
      const data = await response.data;
      console.log("Search product", data);
      return data;
    } catch (error: any) {
      console.log("DEBUG: Search Product With error", error);
      return rejectWithValue(error.message); // Corrected
    }
  }
);

// Corrected: Ensure rejectWithValue is returned and response data is returned
export const fetchAllProducts = createAsyncThunk<any, any>(
  "products/fetchAllProducts",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}`, {
        params: {
          ...params,
          pageNumber: params.pageNumber || 0,
        },
      });

      console.log("All Products", response.data);
      return response.data; // Corrected
    } catch (error: any) {
      console.log("DEBUG: All Products With error", error);
      return rejectWithValue(error.message); // Corrected
    }
  }
);

interface ProductState {
  product: Products | null;
  products: Products[];
  totalPages: number;
  loading: boolean;
  error: string | null | undefined;
  searchProduct: Products[];
}

const initialState: ProductState = {
  product: null,
  products: [],
  totalPages: 1,
  loading: false,
  error: null,
  searchProduct: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.content;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      console.log("This is the action payload", action.payload);
      state.loading = false;
      state.searchProduct = action.payload && action.payload.content ? action.payload.content : [];
    });
    builder.addCase(searchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
