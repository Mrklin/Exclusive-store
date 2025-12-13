import allProducts from '@/Components/products.js'

export default {
    namespaced: true,
    state: {
    products: [],
    loading: false, 
    error: null
  },

  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    },
    SET_LOADING(state, status) {
      state.loading = status
    },
    SET_ERROR(state, error) {
      state.error = error
    },

    ADD_SINGLE_PRODUCT(state, product){
      const singleItem = state.products.find(item => item.id === product.id)
      if (singleItem) {
        singleItem.number++
      }
    },
    REMOVE_SINGLE_PRODUCT(state, product){
      const singleItem = state.products.find(item => item.id === product.id)
      if(singleItem !== 1){
         if(singleItem.number > 1){
           singleItem.number--;
         }else{
           singleItem.number = 1
         }
      }
    }
  },

  getters: {
    getFlash: (state) => {
      return state.products.slice(0, 5)
    },
    getBestSellers: (state) => {
      return state.products.slice(5, 9)
    },
    getExplore: (state) =>  {
      return state.products.slice(9, 17)
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === Number(id))
    },
    getProductByCat:(state) => (category) =>{
      return state.products.filter(product => product.category === category).slice(0,5)
    },
    productCount: (state) => {
      return state.products.length
    }
  },

  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)

      setTimeout(() => {
        try {
            commit('SET_PRODUCTS', allProducts)
            commit('SET_LOADING', false)
        } catch (error) {
            commit('SET_ERROR', 'Failed to load products')
            commit('SET_LOADING', false)
        }
        
      }, 500);
      
    //   try {
        
    //     const response = await fetch('https://fakestoreapi.com/products')
    //     const data = await response.json()
        
        
    //     commit('SET_PRODUCTS', data)
    //   } catch (err) {
    //     console.error(err)
    //     commit('SET_ERROR', 'Failed to load products')
    //   } finally {
        
    //     commit('SET_LOADING', false)
    //   }
    },

    addSingle({commit}, product){
      commit('ADD_SINGLE_PRODUCT', product)
    },
    removeSingle({commit},product){
      commit('REMOVE_SINGLE_PRODUCT', product)
    }
  },

  
}