import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import layoutSlice from '../layout/slice';
import SliceDB from '../DBSlice/SliceDB';
import loginSlice from '../pages/Login/sliceUsers';
import TicketSlice from '../pages/Ticket/TicketSlice';
import EmployeeSlice from '../pages/Employee/EmployeeSlice';
import DashboardSlice from '../pages/Dashboard/DashboardSlice';

// add the reducers that need to be persisted
const reducersToPersist = ['SliceDB', 'loginSlice'];

const persistConfig = {
  key: 'tms',
  storage,
  whitelist: reducersToPersist
};

const reducers = combineReducers({
  layoutSlice: layoutSlice,
  SliceDB: SliceDB,
  loginSlice: loginSlice,
  TicketSlice:TicketSlice,
  EmployeeSlice:EmployeeSlice,
  DashboardSlice:DashboardSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [
  /*thunk*/
];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware // Note: logger should be the last item in the middleware
});

const persistor = persistStore(store);

export { store, persistor, storage };
