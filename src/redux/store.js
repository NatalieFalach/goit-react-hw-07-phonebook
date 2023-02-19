import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slicers/filterSlice';
import { contactsReducer } from './slicers/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
