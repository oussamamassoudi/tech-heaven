import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const userlogin = createAsyncThunk("user/logi", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const deleteuser = createAsyncThunk("user/delete", async (id) => {
  try {
    let result = await axios.delete(`http://localhost:5000/user/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const edituser = createAsyncThunk(
  "user/edit",
  async ({ id, edited }) => {
    try {
      let result = await axios.put(`http://localhost:5000/user/${id}`, edited);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  user:null,
  status:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {logout: (state, action) => {
    state.user = null;
    localStorage.removeItem("token");
  },},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.data.newUserToken;
        localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(userlogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userlogin.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userlogin.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(userCurrent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload?.data.user;
      })
      .addCase(userCurrent.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deleteuser.pending, (state) => {user
        state.status = "pending";
      })
      .addCase(deleteuser.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteuser.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(edituser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(edituser.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(edituser.rejected, (state) => {
        state.status = "fail";
      });
    }
})

// Action creators are generated for each case reducer function
export const { logout} = userSlice.actions

export default userSlice.reducer