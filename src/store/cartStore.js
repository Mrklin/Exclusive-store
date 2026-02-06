// import toast from 'vue3-hot-toast';

// const saveCart = (cartItems) => {
//     localStorage.setItem('localCartItems', JSON.stringify(cartItems));
// };

// const initCart = () => {
//     const storedCart = localStorage.getItem('localCartItems');
//     try {
//         return storedCart ? JSON.parse(storedCart) : [];
//     } catch (error) {
//         console.error("Could not parse cart from localStorage", error);
//         return [];
//     }
// }


// export default {
//     namespaced: true,
//     state(){
//         return{
//             cartItems:initCart()
//         }
        
//     },

//     mutations: {

//         ADD_TO_CART(state, product){

//             // const storedItem = localStorage.getItem('localItems');
//             // const items = storedItem ? JSON.parse(storedItem):[];

//             const itemExist = state.cartItems.find(item => item.id === product.id)

//             let safePrice = {new: 0};

//             if(product.price){
//                 if(typeof product.price ==='object' && typeof product.price.new !== 'undefined'){
                    
//                     safePrice= product.price;
//                 }else if(typeof product.price ==='number' || typeof product.price ==='string'){
//                     safePrice= {new: product.price};
//                 }
//             }

//             if(itemExist){
//                 itemExist.quantity++;
//             }else{
//                 const newItem = {
//                     id: product.id,
//                     name: product.name,
//                     price: safePrice,
//                     image: product.image || '',
//                     quantity:1
//                 };
//                 state.cartItems.push({...newItem})
//                 }
//             saveCart(state.cartItems);

//                 toast.success("Item added to cart",{duration: 2000});
            
//         },

//         INCREMENT_CART(state, productId){
//              const item = state.cartItems.find(item => item.id === productId)
//                 if(item){
//                     item.quantity++;
//                     saveCart(state.cartItems);
//                 }
//                 toast("cart item increased", {type:"info",duration: 2000});
//         },

//         DECREMENT_CART(state, productId){
//             const item = state.cartItems.findIndex(item => item.id === productId)
//             if(item !== -1){
//                 if (state.cartItems[item].quantity > 1) {
//                     state.cartItems[item].quantity --;
//                 } else {
//                     state.cartItems.splice(item, 1);
//                 }
//             }
//             saveCart(state.cartItems);
//             toast("cart item reduced", {type:"error",duration: 2000});
//         },

//         REMOVE_FROM_CART(state, productId){

//              state.cartItems = state.cartItems.filter(item => item.id !== productId)
//             saveCart(state.cartItems);
            
//             toast("Item removed from cart", {type:"error",duration: 2000});
                
//         }
//     },

//     actions:{
//         addToCart({commit}, product){
//             commit('ADD_TO_CART', product)
//         },

//         incrementCart({commit}, productId){
//             commit('INCREMENT_CART',productId)
//         },

//         decrementCart({commit},productId){
//             commit('DECREMENT_CART', productId)
//         },

//         removeFromCart({commit}, productId){
//             commit('REMOVE_FROM_CART', productId)
//         },
        
//     },

//     getters:{
//         getCartItemCount: (state) => {
//             return state.cartItems.reduce((total, item)=> total + item.quantity, 0);
//         },
        
//         getCartItems: (state) => state.cartItems,
//     },
// }



import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import toast from 'vue3-hot-toast';

export const useCartStore = defineStore('cart', () => {
  // --- STATE ---
  const cartItems = ref([]);

  // --- GETTERS (Computed) ---
  const getCartItems = computed(() => cartItems.value);
  
  const getCartItemCount = computed(() => 
    cartItems.value.reduce((total, item) => total + item.quantity, 0)
  );

  const getCartTotal = computed(() => 
    cartItems.value.reduce((total, item) => total + (item.price.new * item.quantity), 0)
  );

  const cartTotal = computed(() => { 
        return cartItems.value.reduce((total, item) => {
            const price = parseFloat(item.price?.new || 0);
            return isNaN(price) ? total : total + (price * item.quantity);
        }, 0);
    });

  // --- ACTIONS (Methods) ---
  const addToCart = (product) => {
    const itemExist = cartItems.value.find(item => item.id === product.id);

    // Price normalization logic
    let safePrice = { new: 0 };
    if (product.price) {
      if (typeof product.price === 'object' && typeof product.price.new !== 'undefined') {
        safePrice = product.price;
      } else if (typeof product.price === 'number' || typeof product.price === 'string') {
        safePrice = { new: Number(product.price) };
      }
    }

    if (itemExist) {
      itemExist.quantity++;
    } else {
      cartItems.value.push({
        id: product.id,
        name: product.name,
        price: safePrice,
        image: product.image || '',
        quantity: 1
      });
    }
    toast.success("Item added to cart", { duration: 2000 });
  };

  const incrementCart = (productId) => {
    const item = cartItems.value.find(item => item.id === productId);
    if (item) {
      item.quantity++;
      toast("Cart item increased", { type: "info", duration: 2000 });
    }
  };

  const decrementCart = (productId) => {
    const index = cartItems.value.findIndex(item => item.id === productId);
    if (index !== -1) {
      if (cartItems.value[index].quantity > 1) {
        cartItems.value[index].quantity--;
      } else {
        cartItems.value.splice(index, 1);
      }
      toast("Cart item reduced", { type: "error", duration: 2000 });
    }
  };

  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId);
    toast("Item removed from cart", { type: "error", duration: 2000 });
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  return { 
    cartItems, 
    getCartItems, 
    getCartItemCount, 
    getCartTotal,
    addToCart, 
    incrementCart, 
    decrementCart, 
    removeFromCart,
    clearCart,
    cartTotal
  };
}, {
  persist: {
    key: 'localCartItems', // Keeps the name you were already using
    storage: localStorage,
  }
});