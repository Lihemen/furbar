import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';
import thunkMiddleware from 'redux-thunk';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cart from './slices/cart';
import wishlist from './slices/wishlist';

const rootReducer = combineReducers({
  cart,
  wishlist,
  // user
});

const middlewares = [
  thunkMiddleware,
  createStateSyncMiddleware({
    blacklist: ['persist/PERSIST', 'persist/REHYDRATE'],
  }),
];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(...middlewares),
});

initMessageListener(store);

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
