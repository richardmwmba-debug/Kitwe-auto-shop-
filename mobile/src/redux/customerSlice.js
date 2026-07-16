import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.items = action.payload;
    },
    addCustomer: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setCustomers, addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
