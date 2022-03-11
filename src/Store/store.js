import create from 'zustand'
import productsInfo from '../components/Menu/producst'

import { devtools } from 'zustand/middleware'

let modalStore = (set) => ({
  resume: false,
  menu: false,
  toggleResume: () => set((state) => ({ resume: !state.resume })),
  toggleMenu: () => set((state) => ({ menu: !state.menu })),
})

let productStore = (set) => ({
  products: productsInfo,
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
})

modalStore = devtools(modalStore)
productStore = devtools(productStore)

export const useMmodalStore = create(modalStore)
export const useProductStore = create(productStore)
