import {configureStore} from '@reduxjs/toolkit';
// import counterReducer from './features/counter/counterSlice';
// import userReducer from './features/user/userSlice';
import postslicerReducer from './features/postfilce';
import commentslicerReducer from './features/commentsSlice';
export const store = configureStore({
    reducer: {
        postsing: postslicerReducer,
        comments: commentslicerReducer,
        // user: userReducer,
    },
});

