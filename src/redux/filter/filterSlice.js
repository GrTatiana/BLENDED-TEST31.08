import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => {
      return payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
