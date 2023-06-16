import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
//import { devToolsEnhancer } from '@redux-devtools/extension';

//const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

