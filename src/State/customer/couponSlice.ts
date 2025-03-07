import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../config/Api"
import { Cart } from "../../types/cartType";
import { CouponState } from "../../types/couponTypes";


const API_URL ="/api/coupons"
export const  applyCoupon = createAsyncThunk<Cart,
 {
   apply: string,
   code: string,
   orderVaulue: number,
    jwt: string;

},
{
    rejectValue :string
}
>(
    'coupon/applyCoupon',
    async ({apply, code, orderVaulue, jwt}, {rejectWithValue}) => {
        try {
            const response = await api.post( `${API_URL}/apply`,null, {
                params: {apply, code, orderVaulue},
                headers: {      
                    Authorization: `Bearer ${jwt}`,
                },
        
            }
            );
            console.log('Coupon applied', response.data);
            return response.data;
        } catch (error: any) {
            console.log('error ', error.response);
            return rejectWithValue('Failed to apply coupon');
        }
    }
);


// intia State
const initialState: CouponState = {
    coupons: [],
    cart: null,
    loading: false,
    error: null,
    couponCreated: false,
    couponApplied: false,
};  

//Slice
const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(applyCoupon.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(applyCoupon.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.cart = action.payload;
            state.couponApplied = true;
        });
        builder.addCase(applyCoupon.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },

})
 export default couponSlice.reducer;