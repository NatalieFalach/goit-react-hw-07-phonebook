import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slicers/filterSlice';
import { contactsReducer } from './slicers/contactsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const config = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: persistCombineReducers(config, {
    contacts: contactsReducer,
    filter: filterReducer,
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
