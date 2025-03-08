import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../config/Api';
import { User } from '../../types/userType';

export const sendLoginSignupOtp = createAsyncThunk<string, { email: string }, { rejectValue: string }>(
  '/auth/sendLoginSignupOtp',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/sent/login-signup-otp', { email });
      console.log('Login Otp', response);
      return response.data.jwt;
    } catch (error: any) {
      console.log('DEBUG: Auth Slice with error :-', error);
      return rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk<string, any, { rejectValue: string }>(
  '/auth/signin',
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/signin', loginRequest);
      localStorage.setItem('jwt', response.data.jwt);
      console.log('Login Otp', response);
      return response.data.jwt;
    } catch (error: any) {
      console.log('DEBUG: Sign request with error :-', error);
      return rejectWithValue(error.message);
    }
  }
);

export const signup = createAsyncThunk<string, any, { rejectValue: string }>(
  '/auth/signup',
  async (loginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/signup', loginRequest);
      localStorage.setItem('jwt', response.data.jwt);
      console.log('Login Otp', response);
      return response.data.jwt;
    } catch (error: any) {
      console.log('DEBUG: SignUp Request with error :-', error);
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk<void, { navigate: Function }, { rejectValue: string }>(
  'auth/logout',
  async ({ navigate }, { rejectWithValue }) => {
    try {
      await api.post('/auth/logout');
      localStorage.clear();
      console.log('logout success');
      navigate('/');
    } catch (error: any) {
      console.error('DEBUG: Logout with Error - - -', error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserProfile = createAsyncThunk<User, string, { rejectValue: string }>(
  '/auth/fetchUserProfile',
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get('/api/users/profile', {
        headers: {
          Authorization: `Bearer1${jwt}`,
        },
      });
      console.log('user profile', response.data);
      return response.data;
    } catch (error: any) {
      console.log('DEBUG : Fetch User Profile with error :- ', error);
      return rejectWithValue(error.message);
    }
  }
);

interface AuthState {
  jwt: string | null;
  otpSent: boolean;
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  error: string | null |any;
}

const initialState: AuthState = {
  jwt: null,
  otpSent: false,
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendLoginSignupOtp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendLoginSignupOtp.fulfilled, (state) => {
      state.loading = false;
      state.otpSent = true;
    });
    builder.addCase(sendLoginSignupOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    
      console.log("Intial Stater============",initialState.user);
    });

    builder.addCase(signin.fulfilled, (state, action) => {
      state.jwt = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.jwt = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.jwt = null;
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
