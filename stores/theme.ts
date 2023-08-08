import { defineStore } from 'pinia'

export const themeStore = defineStore('themeStore', {
    state: () => ({
        dark: false
    }),
    
    actions: {
        change() {
            this.dark = !this.dark
        }
    },
    persist: true

})
