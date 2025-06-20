import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import cartReducer from './reducers/cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Persist config for user slice
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['currentUser'], // optional: specific keys to persist from user state
}

// Persist config for cart slice
const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items'], // change 'items' to match your actual cart state key
}

// Wrap reducers with persistReducer
const persistedUserReducer = persistReducer(userPersistConfig, userReducer)
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer)

// Combine persisted reducers
const rootReducer = combineReducers({
  user: persistedUserReducer,
  cart: persistedCartReducer,
})

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Persistor
export const persistor = persistStore(store)
