import { configureStore } from '@reduxjs/toolkit';
import postReducer from './post/postSlice';
import commentReducer from './comment/commentSlice';
import userReducer from './user/userSlice';
import likeReducer from './like/likeSlice';

const store = configureStore({
    reducer: {
      posts: postReducer,
      users: userReducer,
      comments: commentReducer,
      likes: likeReducer,
    },
  });
  
  export default store;