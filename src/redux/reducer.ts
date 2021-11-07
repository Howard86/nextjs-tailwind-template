import { combineReducers } from '@reduxjs/toolkit';

import { localApi } from '@/services/local';

const reducer = combineReducers({
  [localApi.reducerPath]: localApi.reducer,
});

export default reducer;
