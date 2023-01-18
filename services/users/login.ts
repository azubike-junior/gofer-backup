import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILogin } from '../../types';
import { http } from '../axios/http';
import { setCookie , deleteCookie} from 'cookies-next';

export const loginUser = createAsyncThunk("/users/login", async ({router, ...rest}: ILogin, {rejectWithValue}) => {
  try {
    const rs = await http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/users/login`, rest)

    if (rs.data.statusCode === '0000') {
      // setCookie so that I can use it for serverside prop 
      setCookie('accessToken', rs.data.data[0].access_token)
      localStorage.setItem('access_token', rs.data.data[0].access_token)
      localStorage.setItem('refresh_token', rs.data.data[0].refresh_token)
      router.push("/overview")
      return rs.data
    }

    if (rs.data.statusCode === "9000") {
      return rejectWithValue(rs.data.statusCode)
    }
  } catch (e) {
    console.log(">>>>>>e", e)
    return rejectWithValue(e)
  }
})


interface initState {
  error: any,
  loading: boolean,

}


const initialState: initState = {
  error: "",
  loading: false,
}

const loginSlice = createSlice({
  name: "/users/login",
  initialState,
  reducers: {
    logout: (state) => {
        localStorage.clear();
        deleteCookie('accessToken');
        state.loading = false;
        state.error = ""
        window.location.pathname = "/"
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;

    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },

})

export const { logout } = loginSlice.actions
export default loginSlice.reducer