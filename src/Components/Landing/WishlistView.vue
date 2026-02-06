<!-- <template>
    <div><Toaster position="top-center" :reverseOrder="false"/></div>
    <div class="max-w-360 mx-auto">
        <section class="px-30 pb-10 mt-10">
            <div class="flex justify-between items-center">
                 <h2 class="font-heading text-2xl mb-6">My Wishlist ({{ ItemCount }})</h2>

                 <Button customClass="hover:border-[#DB4444] rounded-sm hover:text-[#FAFAFA] p-3 text-black/80 border border-black/50">
                    Move All To Bag
                </Button>
            </div>
            
            <div v-if="getWishListItems.length === 0" class="text-center text-gray-500">
                Your wishlist is empty.
            </div>

            <div v-else class="grid grid-cols-4  justify-between gap-5 items-center w-full mt-15">
                    <div v-for="product in getWishListItems" :key="product.id"
                    class="flex flex-col gap-2 items-start justify-between p-2 rounded-sm hover:shadow-lg hover:cursor-pointer">
                        <div class="bg-black/15 rounded-sm w-full ">
                            <div class="relative group flex items-center justify-center py-4 w-full">
                                <img :src="product.image" alt="Product Image" class="w-[60%] h-30 object-fit "/>
                                <Button @click="addToCart(product)"  customClass="bg-black py-1 absolute w-full hidden group-hover:block left-0 bottom-0">
                                    <span class="flex w-full gap-2 justify-center items-center text-[#FAFAFA] [&_p]:text-sm">
                                        <cartIcon class="text-[#FAFAFA]"/> <p>Add to cart</p>
                                    </span>
                                </Button>
                                <span class="absolute rounded-full top-3 right-3 cursor-pointer" @click="removeFromWishList(product.id)">
                                    <img src="\src\assets\icons\delete.svg" alt="">
                                </span>
                            </div>
                        </div>
                        <span class="flex flex-col gap-1 items-start font-body">
                            <p class="font-medium">{{ product.name }}</p>
                            <span class="text-[#DB4444]">${{ product.price.new }} <span :class="[product.price.old?'line-through text-black/55 ml-2':'hidden']">${{ product.price.old }}</span></span>
                            <span class="flex items-center gap-1"> 
                                <img v-for="(star, starIndex) in (product.rating || [])" 
                                    :key="starIndex" 
                                    :src="star" 
                                    alt="Rating Star"
                                    class="w-4 h-4" /> ({{ product.quantity || 0}})
                            </span>
                        </span>
                    </div>
            </div>



            <!-- 
                <div v-for="product in getWishListItems" :key="product.id" class="border p-4 rounded-lg shadow-md">
                    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover mb-4"/>
                    <h3 class="font-heading text-xl mb-2">{{ product.name }}</h3>
                    <p class="text-gray-700 mb-4">{{ product.description }}</p>
                    <div class="flex justify-between items-center">
                        <span class="font-body font-semibold text-lg">\${{(product?.price?.new || 0).toFixed(2)}}</span>
                        <Button @click="removeFromWishList(product.id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                            Remove
                        </Button>
                    </div>
                </div>
            </div> -->
        <!-- </section> -->
    <!-- </div> -->
<!-- </template> --> 


<template>
  <div class="max-w-[1440px] mx-auto overflow-hidden">
    <div><Toaster position="top-center" :reverseOrder="false"/></div>

    <section class="px-5 md:px-10 lg:px-20 pb-10 mt-10">
      <div class="flex justify-between items-center mb-10">
        <h2 class="font-heading text-lg md:text-2xl">
          My Wishlist ({{ ItemCount }})
        </h2>

        <Button customClass="hover:bg-[#DB4444] rounded-sm hover:text-white px-4 md:px-8 py-3 text-black border border-black/50 transition-colors text-sm md:text-base">
          Move All To Bag
        </Button>
      </div>
      
      <div v-if="getWishListItems.length === 0" class="flex flex-col items-center justify-center py-20 gap-4">
        <div class="text-center text-gray-500 text-lg">Your wishlist is empty.</div>
        <router-link to="/">
           <Button>Continue Shopping</Button>
        </router-link>
      </div>

      <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 items-start w-full mt-5">
        <div v-for="product in getWishListItems" :key="product.id"
          class="flex flex-col gap-3 items-start justify-between rounded-sm group">
          
          <div class="bg-black/5 rounded-sm w-full relative aspect-square flex items-center justify-center p-4 overflow-hidden">
            
            <div @click="removeFromWishList(product.id)" 
                 class="absolute top-3 right-3 z-30 cursor-pointer bg-white p-1.5 rounded-full shadow-sm hover:bg-[#DB4444] hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>

            <img :src="product.image" :alt="product.name" class="max-h-[70%] object-contain group-hover:scale-105 transition-transform duration-300"/>

            <Button @click="addToCart(product)" 
              customClass="bg-black text-white py-1 md:py-2 absolute w-full left-0 bottom-0 flex gap-2 justify-center items-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
              <cartIcon class="text-white scale-55 lg:scale-100"/> 
              <span class="text-xs md:text-sm">Add to cart</span>
            </Button>
          </div>

          <div class="flex flex-col gap-1 w-full">
            <p class="font-medium text-sm md:text-base truncate w-full">{{ product.name }}</p>
            <div class="flex items-center gap-3">
              <span class="text-[#DB4444] font-medium">${{ product.price.new }}</span>
              <span v-if="product.price.old" class="line-through text-black/40 text-sm">${{ product.price.old }}</span>
            </div>
            
            <div class="flex items-center gap-1 mt-1"> 
              <img v-for="(star, starIndex) in (product.rating || [])" 
                   :key="starIndex" 
                   :src="star" 
                   class="w-3 h-3 md:w-4 md:h-4" /> 
              <span class="text-xs text-black/50">({{ product.quantity || 0 }})</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Button from '../Universal Comp/Button.vue';
import cartIcon from '../Icon/cartIcon.vue';
import toast,{ Toaster } from 'vue3-hot-toast';
export default {
    name: 'WishlistView',
    components: {
        Button,
        cartIcon,
        Toaster,
    },

    computed: {
        getWishListItems() {
            return this.$store.getters['wishList/getWishListItems'];
        },

        ItemCount(){
            return this.$store.getters['wishList/getWishListItemCount']
        }
    },
    methods: {
        removeFromWishList(productId) {
            this.$store.dispatch('wishList/removeFromWishList', productId);
        },
        addToCart(product) {
            this.$store.dispatch('cart/addToCart', product);
        },
    },
}
</script>
<style >
    
</style>