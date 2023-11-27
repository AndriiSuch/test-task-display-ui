import {PayloadAction} from '@reduxjs/toolkit';

import {store} from './store';
import {coreReducer} from './reducer';

export type Store = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof coreReducer>;
export type SlicePayloadAction<P, T> = PayloadAction<
  P,
  string,
  {arg: {originalArgs: T}}
>;
