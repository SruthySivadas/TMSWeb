import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    ticketNumber: 0,
    title: "",
    description: "",
    resolved: false,
    resolvedTime: new Date(),
    created_at: new Date(),
    assigned_to: ""
};

const TicketSlice = createSlice({
  name: 'TicketSlice',
  initialState: { value: initialState },

  reducers: {
    setTicket: (state, action) => {
      state.value = action.payload;
    },
    resetTicket: (state, action) => {
        state.value =initialState;
      },
  }
});

export const { setTicket,resetTicket } =  TicketSlice.actions;
export default TicketSlice.reducer;
