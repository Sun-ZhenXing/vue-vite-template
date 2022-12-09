import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      // 此处填写应用级别 store 项目
    }
  },
  getters: {
  },
  actions: {
  },
  persist: {
    key: 'app',
    storage: window.localStorage
  }
})
