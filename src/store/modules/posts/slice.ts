import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {PostState} from './types';
import {postsApi} from '../../../services/rtkQuery';
import {
  PostItemResponseBody,
  PostListResponseBody,
} from '../../../services/rtkQuery/modules/posts/types';

const initialState: PostState = {
  postList: [],
  postItem: null,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    setPostList: (state, {payload}) => {
      state.postList = payload;
    },
    setPostItem: (state, {payload}) => {
      state.postItem = payload;
    },
    deleteItem: (state, {payload}) => {
      state.postList = state.postList.filter(item => item.id !== payload.id);
    },
    createPost: (state, {payload}) => {
      state.postList = [payload, ...state.postList];
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        postsApi.endpoints.getPostList.matchFulfilled,
        (state: PostState, action: PayloadAction<PostListResponseBody>) => {
          postSlice.caseReducers.setPostList(state, action);
        },
      )
      .addMatcher(
        postsApi.endpoints.getPostById.matchFulfilled,
        (state: PostState, action: PayloadAction<PostItemResponseBody>) => {
          postSlice.caseReducers.setPostItem(state, action);
        },
      );
  },
});

export const postReducer = postSlice.reducer;
export const {setPostItem, deleteItem, createPost} = postSlice.actions;
