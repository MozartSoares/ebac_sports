import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'
import { RootReducer } from '../store'

type FavoritosState = {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

export const favoritosSlice = createSlice({
  name: 'listaFavoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.favoritos.find((i) => i.id === item.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== item.id)
      } else {
        state.favoritos.push(item)
      }
    }
  }
})

export const ItensFavoritados = (state: RootReducer) =>
  state.listaFavoritos.favoritos

export const { favoritar } = favoritosSlice.actions

export default favoritosSlice.reducer
