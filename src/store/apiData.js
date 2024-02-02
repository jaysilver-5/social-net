// src/store/apiData.js
import { createSlice } from '@reduxjs/toolkit';

const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: {
    bioText: '',
    numbers: [],
  },
  reducers: {
    setApiData: (state, action) => {
      const { bioText, numbers } = action.payload;
      state.bioText = bioText;
      state.numbers = numbers;
    },
  },
});

export const { setApiData } = apiDataSlice.actions;
export default apiDataSlice.reducer;
