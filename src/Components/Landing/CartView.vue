<!-- <template >
    <div class="max-w-360 mx-auto">

        <div><Toaster position="top-center" :reverseOrder="false"/></div>

        <!-- <section class="px-30 pb-20 mt-15">

            <div class="w-full flex justify-start items-center [&_p]:text-black/50">
                <p>Home / <span class="text-black">Cart</span></p>
            </div>
        </section> -->

        <!-- <section class="px-30 pb-20">

            <!-- <div v-if="cartCount === 0"
            class="flex justify-center items-center p-5 shadow-lg text-fancy font-medium text-3xl">
                Your cart is Empty
            </div> -->

            <!-- <div v-else>
                <div class="grid grid-cols-5 w-full p-5 mb-4 shadow-lg ">
                    <p v-for="(header, index) in headers" :key="index" >
                        {{ header.name }} 
                    </p> 
                </div>

                <div v-for="item in cartItems" :key="item.id" class="grid grid-cols-5 w-full  items-center p-5 shadow-lg">
                    <div class="relative">
                        <span @click="deleteItem(item.id)" class="absolute z-20 flex items-center mt-0 ml-0 cursor-pointer p-1 w-4 h-4 rounded-full bg-[#DB4444] text-white">×</span>
                        <img :src="item?.image" :alt="item?.name" class=" w-20 h-20 object-contain mr-4 inline-block">
                        <p class="inline-block text-xs truncate whitespace-nowrap w-25">{{ item?.name}}</p>
                        
                    </div>
                    <div>
                        ${{ item?.price?.new }}
                    </div>
                    <div>
                         <input :value="item.quantity" type="number" disabled min="1"> 
                    </div>
                    <div>
                        ${{ ((item?.price?.new || 0) * item.quantity).toFixed(2)}} 
                    </div>
                    <div class="flex">
                        <Button customClass="bg-[#00ff66] rounded-tl-sm text-[#FAFAFA] border border-[#00ff66] rounded-bl-sm p-2 max-w-25
                         hover:bg-white hover:text-black/50" @click.stop="increase(item.id)">+</Button>
                        <Button customClass="p-2 max-w-25 text-[#FAFAFA] bg-[#DB4444] border border-[#DB4444] hover:bg-[#E07575] rounded-br-sm rounded-tr-sm"
                         @click.stop="decrease(item.id)">-</Button>
                    </div>
                </div>
            </div> -->


            <!-- <div v-if="cartCount > 0" class="flex justify-end items-center mt-6 gap-6">
                <p class="font-medium text-lg">Total:</p>
                <p class="font-fancy font-bold text-2xl">${{ cartTotal.toFixed(2) }}</p>
            </div> -->

            <!-- <div class="flex justify-end w-full mt-10">

                <div class="flex flex-col gap-3 p-3 items-start w-100 border rounded-lg mt-6">
                    <h3 class="font-fancy font-semibold text-2xl">Cart Total</h3>
                    <span class="flex justify-between items-center pb-2 border-b w-full">
                        <p>Subtotal:</p>
                        <p>${{ cartTotal.toFixed(2) }}</p>
                    </span>
                    <span class="flex justify-between items-center pb-2 border-b w-full">
                        <p>Shipping:</p>
                        <p>Free</p>
                    </span>
                    <span class="flex justify-between items-center pb-2  w-full">
                        <p>Total:</p>
                        <p>${{ cartTotal.toFixed(2) }}</p>
                    </span>
                    <Button @click="proceedToCheckout" class="self-center">
                            Proceed to Checkout
                    </Button>
                </div>

            </div> -->
            
        <!-- </section> --> 
    <!-- </div> -->
<!-- </template> --> 


<template>
  <div class="max-w-[1440px] mx-auto overflow-hidden">
    <div><Toaster position="top-center" :reverseOrder="false"/></div>

    <section class="px-5 md:px-10 lg:px-20 py-10 mt-5">
      <div class="w-full flex justify-start items-center text-sm">
        <p class="text-black/50">Home / <span class="text-black font-medium">Cart</span></p>
      </div>
    </section>

    <section class="px-5 md:px-10 lg:px-20 pb-20">
      <div v-if="cartCount === 0"
        class="flex justify-center items-center py-20 px-5 shadow-sm border rounded-sm font-fancy font-medium text-2xl md:text-3xl">
        Your cart is Empty
      </div>

      <div v-else>
        <div class="hidden md:grid grid-cols-5 w-full p-5 mb-4 shadow-md rounded-sm font-medium">
          <p v-for="(header, index) in headers" :key="index">{{ header.name }}</p> 
        </div>

        <div class="flex flex-col gap-6">
          <div v-for="item in cartItems" :key="item.id" 
            class="relative grid grid-cols-1 md:grid-cols-5 w-full items-center p-5 shadow-md border border-gray-50 rounded-sm gap-4">
            
            <div class="flex items-center gap-4">
              <div class="relative group">
                <span @click="deleteItem(item.id)" 
                  class="absolute -top-2 -left-2 z-20 flex items-center justify-center cursor-pointer w-5 h-5 rounded-full bg-[#DB4444] text-white text-xs">
                  ×
                </span>
                <img :src="item?.image" :alt="item?.name" class="w-16 h-16 md:w-20 md:h-20 object-contain bg-white">
              </div>
              <p class="text-sm font-medium truncate max-w-[150px]">{{ item?.name }}</p>
            </div>

            <div class="flex justify-between md:block">
              <span class="md:hidden text-black/50">Price:</span>
              <span>${{ item?.price?.new }}</span>
            </div>

            <div class="flex justify-between md:block">
              <span class="md:hidden text-black/50">Quantity:</span>
              <div class="flex items-center border rounded-sm w-fit bg-gray-50">
                <span class="px-3 py-1 font-medium">{{ item.quantity }}</span>
              </div>
            </div>

            <div class="flex justify-between md:block">
              <span class="md:hidden text-black/50 font-bold text-black">Subtotal:</span>
              <span class="font-medium">${{ ((item?.price?.new || 0) * item.quantity).toFixed(2)}}</span>
            </div>

            <div class="flex md:justify-start gap-2 pt-2 md:pt-0 border-t md:border-0">
              <Button customClass="bg-[#00ff66] text-white p-2 flex-1 md:flex-none md:w-10 text-center hover:opacity-80" 
                @click.stop="increase(item.id)">+</Button>
              <Button customClass="bg-[#DB4444] text-white p-2 flex-1 md:flex-none md:w-10 text-center hover:opacity-80" 
                @click.stop="decrease(item.id)">-</Button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end w-full mt-12">
        <div class="flex flex-col gap-4 p-6 items-start w-full md:w-[400px] border-2 border-black rounded-sm">
          <h3 class="font-fancy font-semibold text-xl">Cart Total</h3>
          
          <div class="flex justify-between items-center py-3 border-b w-full text-sm">
            <p>Subtotal:</p>
            <p>${{ cartTotal.toFixed(2) }}</p>
          </div>
          
          <div class="flex justify-between items-center py-3 border-b w-full text-sm">
            <p>Shipping:</p>
            <p class="text-[#00ff66] font-medium">Free</p>
          </div>
          
          <div class="flex justify-between items-center py-3 w-full font-bold">
            <p>Total:</p>
            <p>${{ cartTotal.toFixed(2) }}</p>
          </div>
          
          <Button @click="proceedToCheckout" customClass="w-full mt-2 py-4">
            Proceed to Checkout
          </Button>
        </div>
      </div>
      
    </section>
  </div>
</template>



<script>
import { mapActions, mapGetters } from 'vuex';
import Button from '../Universal Comp/Button.vue';
import toast,{Toaster} from 'vue3-hot-toast';
import { useCartStore } from '@/store/cartStore';
export default {
    components:{Button,Toaster},
    name:'CartView',
    data() {
        return {
            cartStore: useCartStore(),
            headers:[
                {name:'Product'},
                {name:'Price'},
                {name:'Quantity'},
                {name:'Subtotal'},
                {name:'Action'}
            ],
        }
    },

    computed: {
        // ...mapGetters('cart',{
        //     cartItems:'getCartItems',
        //     cartCount:'getCartItemCount'
        // }),

        cartItems(){
            return this.cartStore.getCartItems;
        },

        cartCount(){
            return this.cartStore.getCartItemCount;
        },

        cartTotal(){
            return this.cartStore.cartTotal;
        }
        // cartTotal(){
        //     return this.cartItems.reduce((total, item)=> {

        //         const rawPrice = item.price && item.price.new ? item.price.new: 0;
        //         const price = parseFloat(rawPrice)
        //         if(isNaN(price)) return total;

        //         return total + (price * item.quantity)
        //     },0)
        // }
    },

    methods: {
        // ...mapActions('cart',{
        //     deleteItem:'removeFromCart',
        //     increase: 'incrementCart',
        //     decrease:'decrementCart'
        // }),

        deleteItem(id){
            this.cartStore.removeFromCart(id);
        },

        increase(id){
            this.cartStore.incrementCart(id);
        },
        
        decrease(id){
            this.cartStore.decrementCart(id);
        },

        ...mapActions('checkout',{
            setCheckoutItems:'setCheckoutItems'
        }),

        proceedToCheckout(){

            if(this.cartItems.length === 0) return;

            this.setCheckoutItems(this.cartItems);
            this.$router.push({name:'checkout'});
        }
    },
}
</script>
<style>
    
</style>