import { configureStore } from '@reduxjs/toolkit';
import modelSlice from '../features/modelSlice';
import sidebarSlice from '../features/sidebarSlice';

 const store = configureStore({
  reducer: {
    model : modelSlice,
    sidebar : sidebarSlice
  },
});

export default store;
