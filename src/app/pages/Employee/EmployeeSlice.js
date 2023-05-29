import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    empId: 0,
    empName: "",
};

const EmployeeSlice = createSlice({
  name: 'EmployeeSlice',
  initialState: {value:initialState} ,

  reducers: {
    setEmployee: (state, action) => {
      state.value = action.payload;
    }

    
  }
});

export const {setEmployee } =  EmployeeSlice.actions;
export default EmployeeSlice.reducer;
