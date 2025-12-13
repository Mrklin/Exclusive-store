
const saveCheckout=(items)=>{
    localStorage.setItem('checkoutItems', JSON.stringify(items));
};

const initCheckout=()=>{
    const storedItems = localStorage.getItem('checkoutItems');
    try {
        return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
        console.error("Could not parse checkout items from localStorage", error);
        return [];
    }
};

export default {
    namespaced: true,
    state(){     
        return{
            checkoutItems:initCheckout()
        }  
    },

    mutations: {

        SET_CHECKOUT_ITEMS(state, items){
            state.checkoutItems = items;
            saveCheckout(state.checkoutItems);
        },
    },

    getters: {
        getCheckoutItems(state){
            return state.checkoutItems;
        },
        getCheckoutTotal(state){
            return state.checkoutItems.reduce((total, item) => {
                const price = typeof item.price === 'object' && item.price.new ? parseFloat(item.price.new) : 0;
                return total + (price * item.quantity);
            }, 0);

        },
    },

    actions: {
        setCheckoutItems({commit}, items){
            commit('SET_CHECKOUT_ITEMS', items);
        },
    }
}