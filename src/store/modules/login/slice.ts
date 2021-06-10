import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialStateDTO, ISetKeyDTO } from './types';

const initialState = {
  token: undefined,
} as IInitialStateDTO;

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<ISetKeyDTO>) {
      state.token = action.payload.token;
    },
  },
});

export const { setToken } = login.actions;
export default login.reducer;
