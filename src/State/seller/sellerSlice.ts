import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

 export const fetchSellerProfile = createAsyncThunk("/seller/fetchSellerProfile",
    async(jwt:string,{rejectWithValue})=>{
        try {
            const response = await api.get("/sellers/profile",{
            headers:{
                Authorization: `Bearer1${jwt}`,
            },
              })
              console.log("Fetch Seller profile",response.data)
              return response.data
        } catch (error) {
            console.log("DEBUG:Seller Slice with error :-",error)
        }
    }
)
interface sellerState{
    sellers :any[],
    selectedSeller :any,
    profile :any,
    report:any,
    loading:boolean,
    error:any,
    state:any,
}

const initialState :sellerState={
    sellers: [],
    selectedSeller: null,
    profile: null,
    report: null,
    loading: false,
    error: null,
    state: null,

}
const sellerSlice = createSlice({
    name :"sellers",
    initialState,
    reducers:{},
    extraReducers :(builder)=>{
        builder.addCase(fetchSellerProfile.pending,(state)=>{
            state.loading=true;
        }

        ).addCase(fetchSellerProfile.fulfilled,(state,action)=>{
            state.loading =false;
            state.profile = action.payload;
        }).addCase(fetchSellerProfile.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;

        })
    }

})

export default sellerSlice.reducer;