import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../API";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  message: null,
};

let authToast = {};
export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    const { email, password } = payload;
    try {
      const response = await API.post("/auth/login", { email, password });
      localStorage.setItem("user", JSON.stringify(response.data.data));
      return response.data.data;
    } catch (err) {
      if (err.response.data.code === 401) {
        return thunkAPI.rejectWithValue(err.response.data.message);
      } else if (err.response.data.code === 400) {
        return thunkAPI.rejectWithValue(err.response.data.message[0].msg);
      } else {
        return thunkAPI.rejectWithValue("Ada Kesalahan");
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    retrieveLocalStorage: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.user = JSON.parse(user);
        toast.success("Selamat Datang Kembali");
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
      state.message = null;
      toast.dismiss();
      toast.success("Login Sukses, Selamat Datang!");
    },
    [login.pending]: (state) => {
      toast.dismiss();
      authToast.current = toast.loading("Sedang Login", {
        autoClose: 2000,
        hideProgressBar: false,
      });
      state.isLoading = true;
      state.error = null;
      state.message = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.message = null;
      toast.update(authToast.current, {
        type: "error",
        render: action.payload,
        hideProgressBar: false,
        closeButton: true,
        icon: false,
        theme: "colored",
        autoClose: 2000,
      });
    },
  },
});

export default authSlice;
