import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../reducer/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
