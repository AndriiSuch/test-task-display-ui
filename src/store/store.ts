import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import {coreReducer} from './reducer';
import {rtkQuery} from '../services/rtkQuery/rtkQuery';

export const store = configureStore({
  reducer: coreReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 256},
      serializableCheck: {
        warnAfter: 256,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([rtkQuery.middleware]),
});

export const persistor = persistStore(store);
