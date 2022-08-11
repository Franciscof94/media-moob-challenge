import { configureStore } from '@reduxjs/toolkit'
import showModalReducer  from './features/modalSlice'

export const store = configureStore({
  reducer: {
    showModal: showModalReducer
  },
})