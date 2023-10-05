import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/users/1/posts';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  userLikes: [],
};

export const getPosts = createAsyncThunk('post/getPosts', async () => {
    const response = await axios.get(BASE_URL);
    const result = response.data;
    return result.data;
  });

  // Define a new async thunk for fetching post details
  export const getPostDetails = createAsyncThunk('post/getPostDetails', async (postId) => {
    const response = await axios.get(`/api/v1/posts/${postId}`);
    return response.data;
  });

  export const createPost = (postData) => async (dispatch) => {
    try {
      const response = await axios.post(BASE_URL, { post: postData });
      dispatch(getPosts());
    } catch (error) {
      // Handle errors
    }
  };

export const likePost = createAsyncThunk('posts/likePost', async (postId) => {
  const response = await axios.post(`${BASE_URL}/${postId}/like`);
  return response.data;
});

export const createNewPost = createAsyncThunk('posts/createNewPost', async (postData) => {
  const response = await axios.post(BASE_URL, postData);
  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(likePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.isLoading = false;
        const likedPost = action.payload;
        const updatedPosts = state.posts.map((post) =>
          post.id === likedPost.id ? likedPost : post
        );
        state.posts = updatedPosts;
      })
      .addCase(likePost.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createNewPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts.push(action.payload); // Add the new post to the state
      })
      .addCase(createNewPost.rejected, (state) => {
        state.isLoading = false;
      })
      
  },
});

export default postSlice.reducer;
