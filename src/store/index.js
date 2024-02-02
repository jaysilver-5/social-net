// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import apiDataReducer from './apiData';

const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
  },
});

export default store;
