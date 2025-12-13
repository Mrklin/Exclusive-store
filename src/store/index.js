import { createStore } from 'vuex'
import userStore from './userStore'
import productStore from './productStore'
import cartStore from './cartStore'
import wishlistStore from './wishlistStore'
import checkout from './checkout'

const store = createStore({

    modules :{
        user:userStore,
        products:productStore,
        cart: cartStore,
        wishList: wishlistStore,
        checkout: checkout
    }
    
})



export default store