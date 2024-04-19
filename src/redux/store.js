import { contactsReducer} from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { themeReducer } from "./theme/themeSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

  const themePersistConfig = {
    key: 'theme',
    storage,
  };

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistReducer(authPersistConfig, authReducer),
        theme: persistReducer(themePersistConfig, themeReducer)
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
