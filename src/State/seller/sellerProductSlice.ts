import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Products } from "../../types/ProductTypes";
import Products from "../../seller/pages/Product/Products";

export const fetchSellerProducts = createAsyncThunk<Products[], any>(
  "/sellerProduct/fetchSellerProducts",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/products", {
        headers: {
          Authorization: `Bearer1${jwt}`,
        },
      });

      const data = response.data;
      console.log("Seller Product",data)
      return data;
    } catch (error) {
      console.log("DEBUG: fetch Seller Product  with error :-", error);
      throw error;
    }
  }
);

//  Method for Create or Add Prouct

export const createProduct = createAsyncThunk<
  Products[],
  { request: any; jwt: string | null }
>("/sellerProduct/createProduct", async (args, { rejectWithValue }) => {
  const { request, jwt } = args;
  try {
    const response = await api.post("/sellers/products", request, {
      headers: {
        Authorization: `Bearer1${jwt}`,
      },
    });

    const data = response.data;
    console.log("Create Product",data)
    return data;
  } catch (error) {
    console.log("DEBUG: Create Product  with error :-", error);
    //throw error;
  }
});
// type of sellProductState

interface sellerProductState {
  products: Products[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: sellerProductState = {
  products: [],
  loading: false,
  error: null,
};

const sellerProductSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSellerProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      console.log("Intial State fgfgfgdfgdfgdfgdfgdfgdfg",initialState.products)
    });
    builder.addCase(fetchSellerProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

//   export const selectSellerProducts = (state: RootState) => state.sellerProduct.products;

export default sellerProductSlice.reducer;
