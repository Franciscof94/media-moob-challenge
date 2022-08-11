import { createSlice } from "@reduxjs/toolkit";
export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false
  },
  reducers: {
    modal: (state, payload) => {
      state.showModal = payload;
    },
  }
});

export const { modal } = modalSlice.actions;

export default modalSlice.reducer