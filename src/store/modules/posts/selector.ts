import {createSelector, Selector} from '@reduxjs/toolkit';
import {PostState} from './types';
import {RootState} from '../../types';

const selectSelf: Selector<RootState, PostState> = state => state.posts;

export const selectPostList = createSelector(
  selectSelf,
  state => state.postList,
);

export const selectPostItem = createSelector(
  selectSelf,
  state => state.postItem,
);
