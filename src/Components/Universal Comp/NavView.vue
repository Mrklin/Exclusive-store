<template >
    <Toaster position="top-center" :reverseOrder="false"/>
    <div class="relative flex justify-between items-center px-30 font-body border-b border-black/20 pt-8 pb-6 w-full bg-white">
        <h3 class="font-fancy font-bold text-2xl">Exclusive</h3>
        <ul class="flex justify-between gap-5 font-medium font-body text-base">
            <router-link v-for="Nav in Navs" :key="Nav.path" :to="Nav.path"
            :class="[$route.path===Nav.path? 'border-b border-black/50':'', 'cursor-pointer transition-all duration-300 ease-in-out']">{{Nav.name}}</router-link>
        </ul>
        <span class="flex items-center gap-4 ">
            <span class="flex px-2.5 py-1.5 rounded-sm bg-black/10 [&_img]:cursor-pointer ">
                <input type="text" class="text-xs outline-0 border-0" placeholder="What are you looking for?">
                <img src="\src\assets\icons\Search.svg" alt="search-icon">
            </span>
        
            <div @click="gotoWishlist">
                <span class="relative"> 
                 <heart />
                <span v-if="wishListCount > 0" class="absolute -top-2 -right-2 bg-[#DB4444] text-white rounded-full 
                    w-5 h-5 flex items-center justify-center text-xs font-semibold">
                    {{ wishListCount }}
                </span>
            </span>
        </div>

            <div @click="gotoCart">
                <span class="relative"> 
                 <cart />
                <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-[#DB4444] text-white rounded-full 
                    w-5 h-5 flex items-center justify-center text-xs font-semibold">
                    {{ cartCount }}
                </span>
            </span>
        </div>
            

            <span v-if="isLoggedIn" @click="toggleMenu" class="flex rounded-full p-1 bg-[#DB4444] cursor-pointer">
                <profile  class="  text-white"/>
            </span>
            
            <span  :class="[toggle && isLoggedIn? 'absolute top-20 right-30 w-50 bg-[#867287] px-2 rounded-sm py-3':'hidden']">
                <ul class="flex flex-col gap-2 [&_li]:flex [&_li]:justify-start [&_li]:items-center
                 [&_li]:gap-2 [&_li]:cursor-pointer [&_li]:hover:bg-black/20 [&_p]:text-sm [&_p]:text-[#FAFAFA] [&_span]:w-10 [&_span]:flex [&_span]:justify-center [&_span]:items-center">
                    <li @click="toAccount"> <span><profile/></span> <p>Manage My Account</p></li>
                    <li> <span><order/></span> <p>My Order</p></li>
                    <li> <span><cancel/> </span> <p>My Cancellation</p></li>
                    <li> <span><star class="text-white"/></span> <p>My Reviews</p></li>
                    <li v-if="isLoggedIn" @click="logoutUser"> <span><logout/></span> <p>Logout</p></li>
                </ul>
            </span>


        </span>
    </div>
</template>
<script>
import CartIcon from '../Icon/cartIcon.vue';
import toast,{Toaster} from 'vue3-hot-toast';
import heartIcon from '../Icon/heartIcon.vue';
import profileIcon from '../Icon/profileIcon.vue';
import orderIcon from '../Icon/orderIcon.vue';
import starIcon from '../Icon/starIcon.vue';
import cancleIcon from '../Icon/cancleIcon.vue';
import logoutIcon from '../Icon/logoutIcon.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    name:'Nav',
    components:{
        heart: heartIcon,
        cart: CartIcon,
        profile: profileIcon,
        order: orderIcon,
        star: starIcon,
        cancel: cancleIcon,
        logout:logoutIcon,
        Toaster
    },
    data() {
        return {
            Navs:[
                {path:'/', name:'Home'},
                {path:'/contact', name:'Contact'},
                {path:'/about', name:'About'},
                {path:'/signup', name:'Sign Up'},
            ],
            toggle: false,
        }
    },
    methods: {
        toggleMenu(){
            this.toggle = ! this.toggle
        },

        ...mapActions('user',['logoutUser']),

        toAccount(){
            this.$router.push({name:'account'});
        },
    },

    computed: {
        ...mapGetters('user',{
            isLoggedIn: 'getIsLoggedIn',
            userName: 'getUser'

        }),

        ...mapGetters('cart',{
            cartCount:'getCartItemCount',
        }),

        ...mapGetters('wishList',{
            wishListCount:'getWishListItemCount'
        }),

        gotoCart(){
            if(!this.isLoggedIn){
                this.$router.push({name:'login'});
                toast.error("Please log in to access the cart.", {duration: 3000});
            } else {
                this.$router.push({name:'cart'});
            }
        },

        gotoWishlist(){
            if(!this.isLoggedIn){
                this.$router.push({name:'login'});
                toast.error("Please log in to access the wishlist.", {duration: 3000});
            } else {
                this.$router.push({name:'wishlist'});
            }
        },
    },
}
</script>
<style >
    
</style>