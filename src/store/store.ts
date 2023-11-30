import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './slices/carrinho'
import favoritosReducer from './slices/favoritos'
import api from '../components/services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    listaFavoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
