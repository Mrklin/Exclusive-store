import toast from 'vue3-hot-toast';

const saveWishList = (saveItems) => {
    localStorage.setItem('localSaveItems', JSON.stringify(saveItems));
};

const initList = () => {
    const storedList = localStorage.getItem('localSaveItems');
    try {
        return storedList ? JSON.parse(storedList) : [];
    } catch (error) {
        console.error("Could not parse cart from localStorage", error);
        return [];
    }
};

export default {
    namespaced: true,
    state(){
        return{
            wishListItems:initList()
        }
    },

    mutations: {

        ADD_TO_WISHLIST(state, product){
            const itemExist = state.wishListItems.find(item => item.id === product.id)

            let safePrice = {new: 0};
            if(product.price){
                if(typeof product.price ==='object' && typeof product.price.new !== 'undefined'){  
                    safePrice= product.price;
                }else if(typeof product.price ==='number' || typeof product.price ==='string'){
                    safePrice= {new: product.price};
                }
            }

            if(!itemExist){ 
                const newItem = {
                    id: product.id,
                    name: product.name,
                    price: safePrice,
                    image: product.image || '',
                    quantity: product.quantity || 0,
                    rating: product.rating || []
                };
                state.wishListItems.push({...newItem})
            }
            saveWishList(state.wishListItems);
            toast("Item added to wishlist", {type:"success",duration: 2000});
        },

        REMOVE_FROM_WISHLIST(state, productId){
            state.wishListItems = state.wishListItems.filter(item => item.id !== productId);
            saveWishList(state.wishListItems);
            toast("Item removed from wishlist", {type:"error",duration: 2000});
        },
    }, 

    actions: {
        addToWishList({commit}, product){
            commit('ADD_TO_WISHLIST', product);
        },

        removeFromWishList({commit}, productId){
            commit('REMOVE_FROM_WISHLIST', productId);
        },
    },

    getters: {
        getWishListItems: (state) => state.wishListItems,
        getWishListItemCount: (state) => state.wishListItems.length,
    },
}