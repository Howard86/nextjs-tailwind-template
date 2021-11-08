import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import reducer from './reducer';

import { localApi } from '@/services/local';

const isDev = process.env.NODE_ENV !== 'production';

const configureAppStore = () => {
  const store = configureStore({
    reducer,
    devTools: isDev,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      localApi.middleware,
    ],
  });

  if (isDev && module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(reducer));
  }

  return store;
};

const store = configureAppStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
