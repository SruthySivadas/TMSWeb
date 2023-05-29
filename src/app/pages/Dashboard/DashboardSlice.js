import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    empId: 0,
    empName: "",
};

const DashboardSlice = createSlice({
  name: 'DashboardSlice',
  initialState: {value:initialState} ,

  reducers: {
    setDashboardEmp: (state, action) => {
      state.value = action.payload;
    }

    
  }
});

export const {setDashboardEmp } =  DashboardSlice.actions;
export default DashboardSlice.reducer;
