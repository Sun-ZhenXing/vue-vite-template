import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      user: {},
      token: ''
    }
  },
  getters: {
  },
  actions: {
  },
  persist: {
    key: 'user',
    storage: window.localStorage
  }
})
