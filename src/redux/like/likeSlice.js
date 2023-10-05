import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/users/1/posts/1/like'

const initialState = {
    likes: [],
    isLoading: false,
    error: null
}

export const getLikes = createAsyncThunk('like/getLikes', async () => {
    const response = axios.get(BASE_URL);
    const result = (await response).data;
    return result.data;
})

export const createPost = (data) => async () => {
  const { like } = data
  const newLike = { like_id: like.id}

  const response = await axios.post(BASE_URL, newLike)
  return response.data
}

  const likeSlice = createSlice({
    name: 'likes',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getLikes.pending, (state, action) => {
            state.isLoading = true
        });

      builders.addCase(getLikes.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false
      });

      builders.addCase(getLikes.rejected, (state, action) => {
        state.isLoading = false
        state.users = []
      });
    },
  });

  export default likeSlice.reducer;