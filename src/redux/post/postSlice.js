import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/users/1/posts'

const initialState = {
    posts: [],
    isLoading: false,
    error: null
}

export const getPosts = createAsyncThunk('post/getPosts', async () => {
    const response = axios.get(BASE_URL);
    const result = (await response).data;
    return result.data;
})

export const createPost = (data) => async () => {
  const { post, title, text } = data
  const newPost = { post_id: post.id, title, text}

  const response = await axios.post(BASE_URL, newPost)
  return response.data
}

  const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builders) => {
        builders.addCase(getPosts.pending, (state, action) => {
            state.isLoading = true
        });

      builders.addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false
      });

      builders.addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false
        state.users = []
      });
    },
  });

  export default postSlice.reducer;