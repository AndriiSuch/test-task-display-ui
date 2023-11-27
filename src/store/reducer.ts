import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import {postReducer} from './modules';
import {rtkQuery} from '../services/rtkQuery/rtkQuery';

const postPersisted = persistReducer(
  {
    key: 'posts',
    version: 1,
    storage: AsyncStorage,
    whitelist: ['postList'],
  },
  postReducer,
);

export const coreReducer = combineReducers({
  posts: postPersisted,
  [rtkQuery.reducerPath]: rtkQuery.reducer,
});
