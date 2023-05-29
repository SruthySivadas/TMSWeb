import { createSlice } from "@reduxjs/toolkit";
const initialState =
{
  userId: "",
  userName: "",
  userGroup: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { value: initialState },

  reducers: {
    loginSuccess: (state, action) => {
      state.value = action.payload;
    },
    Logout: (state) => {
      state.value = initialState;
    },
  },
});

export const { loginSuccess, Logout, loginUserRights } = loginSlice.actions;
export default loginSlice.reducer;
