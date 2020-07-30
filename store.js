import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { reservationSlice } from './lib/slices/reservationSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const mainReducer = combineReducers({
  [reservationSlice.name]: reservationSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

// export default configureStore({
//   reducer: reservationSlice.reducer,
//   devTools: true,
// });

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export default store;

persistStore(store);
