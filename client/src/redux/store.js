import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import cartReducer from './reducers/cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Persist config for only user slice
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['currentUser'], // optional: specify keys inside userSlice to persist
}

// Wrap only the userReducer with persistReducer
const persistedUserReducer = persistReducer(userPersistConfig, userReducer)

const rootReducer = combineReducers({
  user: persistedUserReducer,
  cart: cartReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
})

export const persistor = persistStore(store)
