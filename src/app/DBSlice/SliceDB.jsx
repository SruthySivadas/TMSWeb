import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  login: {
    userId: '',
    userName: '',
  }
};

const SliceDB = createSlice({
  name: 'SliceDB',
  initialState: { value: initialState },

  reducers: {
    DB_Logint_Set: (state, action) => {
      state.value.login = action.payload;
    },
    DB_Init: (state) => {
      state.value = initialState;
    },
  }
});

export const {
  DB_Logint_Set,
  DB_Init,
} = SliceDB.actions;
export default SliceDB.reducer;
