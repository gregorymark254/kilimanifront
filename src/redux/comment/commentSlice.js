import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/users/1/posts/1/comments'

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

export const createComment = (data) => async () => {
  const { comment, text } = data
  const newComment = { comment_id: comment.id, text}

  const response = await axios.post(`${BASE_URL}/id`, newComment)
  console.log(`${BASE_URL}/id`);
  return response.data
}

  const commentSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getComments.pending, (state, action) => {
            state.isLoading = true
        });

      builders.addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isLoading = false
      });

      builders.addCase(getComments.rejected, (state, action) => {
        state.isLoading = false
        state.comments = []
      });
    },
  });

  export default commentSlice.reducer;
