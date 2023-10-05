import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    comments: [],
    isLoading: false,
    error: null
}

export const getComments = createAsyncThunk('comment/getComments', async () => {
    const response = axios.get();
    const result = (await response).data;
    return result.data;
})

  const commentSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true
        });

      builders.addCase(getUsers.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isLoading = false
      });

      builders.addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false
        state.comments = []
      });
    },
  });

  export default commentSlice.reducer;