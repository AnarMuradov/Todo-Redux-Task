import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    value: [],
    id: 0,
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload);
    },
    edit: (state, action) => {
    const edit =state.value.findIndex((x) => x.id === action.payload.id)
    if(edit !== -1){
      state.value[edit]=action.payload
    }
    },
  },
});
export const { add, remove,edit } = TodoSlice.actions;

export default TodoSlice.reducer;
