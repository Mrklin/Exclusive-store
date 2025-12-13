import toast from 'vue3-hot-toast';

const saveCart = (cartItems) => {
    localStorage.setItem('localCartItems', JSON.stringify(cartItems));
};

const initCart = () => {
    const storedCart = localStorage.getItem('localCartItems');
    try {
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error("Could not parse cart from localStorage", error);
        return [];
    }
}


export default {
    namespaced: true,
    state(){
        return{
            cartItems:initCart()
        }
        
    },

    mutations: {

        ADD_TO_CART(state, product){

            // const storedItem = localStorage.getItem('localItems');
            // const items = storedItem ? JSON.parse(storedItem):[];

            const itemExist = state.cartItems.find(item => item.id === product.id)

            let safePrice = {new: 0};

            if(product.price){
                if(typeof product.price ==='object' && typeof product.price.new !== 'undefined'){
                    
                    safePrice= product.price;
                }else if(typeof product.price ==='number' || typeof product.price ==='string'){
                    safePrice= {new: product.price};
                }
            }

            if(itemExist){
                itemExist.quantity++;
            }else{
                const newItem = {
                    id: product.id,
                    name: product.name,
                    price: safePrice,
                    image: product.image || '',
                    quantity:1
                };
                state.cartItems.push({...newItem})
                }
            saveCart(state.cartItems);

                toast.success("Item added to cart",{duration: 2000});
            
        },

        INCREMENT_CART(state, productId){
             const item = state.cartItems.find(item => item.id === productId)
                if(item){
                    item.quantity++;
                    saveCart(state.cartItems);
                }
                toast("cart item increased", {type:"info",duration: 2000});
        },

        DECREMENT_CART(state, productId){
            const item = state.cartItems.findIndex(item => item.id === productId)
            if(item !== -1){
                if (state.cartItems[item].quantity > 1) {
                    state.cartItems[item].quantity --;
                } else {
                    state.cartItems.splice(item, 1);
                }
            }
            saveCart(state.cartItems);
            toast("cart item reduced", {type:"error",duration: 2000});
        },

        REMOVE_FROM_CART(state, productId){

             state.cartItems = state.cartItems.filter(item => item.id !== productId)
            saveCart(state.cartItems);
            
            toast("Item removed from cart", {type:"error",duration: 2000});
                
        }
    },

    actions:{
        addToCart({commit}, product){
            commit('ADD_TO_CART', product)
        },

        incrementCart({commit}, productId){
            commit('INCREMENT_CART',productId)
        },

        decrementCart({commit},productId){
            commit('DECREMENT_CART', productId)
        },

        removeFromCart({commit}, productId){
            commit('REMOVE_FROM_CART', productId)
        },
        
    },

    getters:{
        getCartItemCount: (state) => {
            return state.cartItems.reduce((total, item)=> total + item.quantity, 0);
        },
        
        getCartItems: (state) => state.cartItems,
    },
}