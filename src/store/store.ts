import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import counterSlice from './solution/solutionSlice';
// ...

export const store = configureStore({
  reducer: {
    solution: counterSlice,
    auth: authSlice,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
