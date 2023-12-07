import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedUser: undefined,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state, action) => {
      state.loggedUser = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
