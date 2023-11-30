import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'
import { RootReducer } from '../store'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.itens.find((i) => i.id === item.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(item)
      }
    }
  }
})
export const ItensNoCarrinho = (state: RootReducer) => state.carrinho.itens

export const { adicionar } = carrinhoSlice.actions

export default carrinhoSlice.reducer
