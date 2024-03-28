import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
// import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware.js';
import {Provider} from "react-redux"
import authReducer from "./app/store.js"
import {persistStore,persistReducer, FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist"
import storage from "redux-persist/lib/storage";
// import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware.js'
import {PersistGate} from "redux-persist/integration/react"
import LogRocket from 'logrocket';
// import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'


const persistConfig = {key:"root", storage, version:1}
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer:persistedReducer,
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
    serializableCheck:{
      ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
    },
  }),
});
LogRocket.init('app/id')
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
