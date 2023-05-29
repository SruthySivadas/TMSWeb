import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    locList: [],
    DCList: [],
    dateFrom: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay() - 30),
    dateTo: new Date()
  }
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState: initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = initialState.filter;
    }
  }
});

export const { updateFilter, resetFilter } = layoutSlice.actions;
export default layoutSlice.reducer;
