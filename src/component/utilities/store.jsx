// src/store.js
import { configureStore } from '@reduxjs/toolkit'
// import your reducers here (if any)
// import userReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    // user: userReducer
  },
})
