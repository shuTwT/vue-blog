import { defineStore,createPinia } from "pinia";


export const useStore =defineStore('main',{
    state:()=>{
        return {
            activePath:true
        }
    },
    actions:{},
    getters:{},
    modules:{}
})
