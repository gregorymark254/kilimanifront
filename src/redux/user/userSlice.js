import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

export const getUsers = createAsyncThunk('user/getUsers', async () => {
    const response = axios.get();
    const result = (await response).data;
    return result.data;
})

  const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true
        });

      builders.addCase(getUsers.fulfilled, (state, action) => {
        state.currencies = action.payload;
        state.isLoading = false
      });

      builders.addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false
        state.users = []
      });
    },
  });