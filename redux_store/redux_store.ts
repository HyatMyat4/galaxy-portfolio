import { configureStore } from "@reduxjs/toolkit";
import actionSliceReducer from "./redux_action";

export const store = configureStore({
  reducer: {
    action: actionSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
