import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../redux/post/postSlice'
import userReducer from '../redux/user/userSlice'
import commentReducer from '../redux/comment/commentSlice'
import likeReducer from '../redux/comment/commentSlice'

const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    comments: commentReducer,
    likes: likeReducer,
  },
});

export default store;
