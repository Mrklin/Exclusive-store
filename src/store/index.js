import { createStore } from 'vuex'
// import { useUserStore } from './userStore'
// import userStore from './userStore'
import productStore from './productStore'
// import cartStore from './cartStore'
import wishlistStore from './wishlistStore'
import checkout from './checkout'

const store = createStore({

    modules :{
        // user:userStore,
        // user1:useUserStore(),
        products:productStore,
        // cart: cartStore,
        wishList: wishlistStore,
        checkout: checkout
    }
    
})



export default store