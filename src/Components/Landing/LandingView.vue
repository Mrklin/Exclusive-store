<template >
    <div class="max-w-[1440px] mx-auto">
            <div><Toaster position="top-center" :reverseOrder="false"/></div>
        <!-- Image Display Section -->
        <section class="px-30  h-full flex gap-4">
            <div class="w-1/5 border-r border-black/50 flex flex-col text-body font-medium [&_ul]:w-full pt-4 ">
             <div class="pt-4 pr-2 [&_li]:mb-5.5">
                <ul v-for="(dropdown, index) in dropdowns" :key="index">
                    <li class="flex justify-between mb-5.5">{{ dropdown.name }}  <img src="\src\assets\icons\DropDown.svg" alt=""></li>
                </ul>
                <ul v-for="(category, index) in categories" :key="index" >
                    <li >{{ category.name }} </li>
                </ul>
             </div>
                
            </div>

            <div class="w-4/5 pt-8 ">

                <div class="bg-black px-12 py-6 flex justify-between items-center ">

                    <div class=" text-[#FAFAFA] flex flex-col gap-4">
                        <div class=" text-sm font-light flex justify-start items-center ">
                            <span class="w-fit">
                                <img class="w-[60%]" src="\src\assets\Apple.png" alt="">
                            </span>
                            <p>iPhone 14 Series</p>
                        </div>
                        <h1 class="leading-normal font-fancy text-5xl">Up to 10% <br> off Voucher</h1>
                        <span class="flex items-center justify-start gap-2 cursor-pointer ">
                            <p class="border-white/50 border-b">Shop Now</p>
                            <img src="\src\assets\icons\icons arrow-right.svg" alt="">
                        </span>
                    </div>

                    <div class="w-[60%]">
                        <img class="inset-0 w-full" src="\src\assets\mobile.png" alt="">
                    </div>
                </div>

                
            </div>
        </section>

            <!-- Flash Products section -->
        <section class="pl-30 pb-20 mt-15">

            <div class="flex  flex-col gap-4 ">

                <div class="flex gap-3 items-center w-full pr-30 text-[#DB4444] font-body font-semibold">
                    <div class="w-5 h-8 rounded-md bg-[#DB4444]"/>
                    <p>Today's</p>
                </div>

                <div class=" flex justify-between items-center gap-10 w-full mb-5 pr-30">
                    <span class="flex items-end gap-20">
                        <h2 class="font-fancy text-4xl font-bold">Flash Sales</h2>

                        <span class="flex items-center [&_h2]:font-fancy [&_h2]:font-bold [&_h2]:text-3xl
                        [&_p]:font-body [&_p]:text-sm [&_p]:font-medium gap-4 text-black [&_h3]:text-3xl [&_h3]:font-bold
                        [&_h3]:self-end [&_h3]:mb-1 [&_h3]:text-[#DB4444]">
                            <span class="flex flex-col gap-1">
                            <p>Days</p>
                            <h2>03</h2>
                        </span>
                        <h3>:</h3> 
                        <span class="flex flex-col gap-1">
                            <p>Hours</p>
                            <h2>15</h2>
                        </span>
                        <h3>:</h3> 
                        <span class="flex flex-col gap-1">
                            <p>Minutes</p>
                            <h2>45</h2>
                        </span>
                        <h3>:</h3> 
                        <span class="flex flex-col gap-1">
                            <p>Seconds</p>
                            <h2>20</h2>
                        </span>
                        </span>

                    </span>
                <span class="flex gap-4 [&_img]:cursor-pointer [&_img]:hover:bg-black/10">
                        <img @click="scrollProducts('left')" class="p-3 rounded-full bg-[#FAFAFA]" src="\src\assets\icons\icons_arrow-left.svg" alt="">
                        <img @click="scrollProducts('right')" class="p-3 rounded-full rotate-180 bg-[#FAFAFA]" src="\src\assets\icons\icons_arrow-left.svg" alt="">
                </span>
                
                </div>

                <div ref="productGrid"
                class='flex overflow-x-scroll scrollbar-hide scroll-smooth gap-5'>

                    <div @click="goToProductId(product.id)" v-for="product in getFlash" :key="product.id"
                    class="shrink-0 w-64 p-2 rounded-sm hover:shadow-lg hover:cursor-pointer">
                        <div class="bg-black/15 rounded-sm ">
                            <div class="relative group flex items-center justify-center pb-8 pt-4 w-full">
                                <img :src="product.image" alt="Product Image" class="w-[70%] h-30 object-fit"/>
                                <Button @click.stop="addToCart(product)"  customClass="bg-black py-1 absolute w-full hidden group-hover:block left-0 bottom-0">
                                <span class="flex w-full gap-2 justify-center items-center text-[#FAFAFA] [&_p]:text-sm">
                                    <cartIcon class="text-[#FAFAFA]"/> <p>Add to cart</p>
                                </span>
                            </Button>
                            <heartIcon @click.stop="toggleWishList(product)" :class="['absolute top-3 right-3 cursor-pointer', 
                                        isInWishList(product.id) ? 'text-[#DB4444]' : 'text-black/50 hover:text-[#DB4444]']"/>
                            </div>
                            
                        </div>
                        <span class="flex flex-col gap-1 items-start font-body">
                            <p class="font-medium">{{ product.name }}</p>
                            <p class="text-[#DB4444]">${{ product.price.new }} <span class='line-through text-black/55 ml-2'>${{ product.price.old }}</span></p>
                            <span class="flex items-center gap-1"> 
                                <img v-for="(star, starIndex) in product.rating" 
                                    :key="starIndex" 
                                    :src="star" 
                                    alt="Rating Star"
                                    class="w-4 h-4" /> ({{ product.quantity }})
                            </span>
                        </span>
                    </div>
                    
                </div>

                <div class="w-full pr-30 flex justify-center items-center pt-10">
                    
                    <Button>
                        View All Products
                    </Button>
                </div>
             </div>
        </section>

        <!-- Categories Section and Icons -->
        <section class="px-30 pb-20 ">

            <div class="flex flex-col gap-4 pt-15 border-t border-black/30">

            <div class="flex gap-3 items-center w-full pr-30 text-[#DB4444] font-body font-semibold">
                <div class="w-5 h-8 rounded-md bg-[#DB4444]"/>
                <p>Categories</p>
            </div>

            <div class=" flex justify-between items-center w-full mb-5">
                <span class="flex items-end gap-20">
                     <h2 class="font-fancy text-4xl font-bold">Browse By Category</h2>
                </span>
               <span class="flex gap-4 [&_img]:cursor-pointer [&_img]:hover:bg-black/10">
                    <img class="p-3 rounded-full bg-[#FAFAFA]" src="\src\assets\icons\icons_arrow-left.svg" alt="">
                    <img class="p-3 rounded-full rotate-180 bg-[#FAFAFA]" src="\src\assets\icons\icons_arrow-left.svg" alt="">
               </span>
               
            </div>

            <div class="flex justify-between items-center w-full">
                
                <span v-for="(catCard, index) in catCards" :key="index"
                class="group rounded-sm border flex justify-center items-center flex-col min-w-30 min-h-25
                 border-black/50 hover:border-[#DB4444]  hover:bg-[#DB4444] cursor-pointer">
                    <component :is='catCard.cat' class=" group-hover:text-[#FAFAFA] p-1"/>
                    <p class="group-hover:text-[#FAFAFA]">{{ catCard.name }}</p>
                </span>

            </div>

            </div>
        </section>

        <!-- Best Sellers -->
        <section class="px-30 pb-20 ">

            <div class="flex  flex-col gap-4 pt-15 border-t border-black/30">
                <div class="flex gap-3 items-center w-full pr-30 text-[#DB4444] font-body font-semibold">
                    <div class="w-5 h-8 rounded-md bg-[#DB4444]"/>
                    <p>This Month</p>
                </div>

                <div class=" flex justify-between items-center w-full mb-5">
                    <span class="flex items-end gap-20">
                        <h2 class="font-fancy text-4xl font-bold">Best Selling Products</h2>
                    </span>

                <Button> View All </Button>
                
                </div>
                <div class="grid grid-cols-4 justify-between gap-5 items-center w-full mt-15">
                     <div @click="goToProductId(product.id)" v-for="product in getBestSellers" :key="product.id"
                        class="flex flex-col gap-2 items-start justify-between p-2 rounded-sm hover:shadow-lg hover:cursor-pointer">
                            <div class="bg-black/15 rounded-sm w-full ">
                                <div class="relative group flex items-center justify-center py-4 w-full">
                                    <img :src="product.image" alt="Product Image" class="w-[70%] h-30 object-fit "/>
                                    <Button @click.stop="addToCart(product)" customClass="bg-black py-1 absolute w-full hidden group-hover:block left-0 bottom-0">
                                        <span class="flex w-full gap-2 justify-center items-center text-[#FAFAFA] [&_p]:text-sm">
                                            <cartIcon class="text-[#FAFAFA]"/> <p>Add to cart</p>
                                        </span>
                                    </Button>
                                    <heartIcon @click.stop="toggleWishList(product)" :class="['absolute top-3 right-3 cursor-pointer', 
                                        isInWishList(product.id) ? 'text-[#DB4444]' : 'text-black/50 hover:text-[#DB4444]']"/>
                                </div>
                            </div>
                            <span class="flex flex-col gap-1 items-start font-body">
                                <p class="font-medium">{{ product.name }}</p>
                                <span class="text-[#DB4444]">${{ product.price.new }} <span :class="[product.price.old?'line-through text-black/55 ml-2':'hidden']">${{ product.price.old }}</span></span>
                                <span class="flex items-center gap-1"> 
                                    <img v-for="(star, starIndex) in product.rating" 
                                        :key="starIndex" 
                                        :src="star" 
                                        alt="Rating Star"
                                        class="w-4 h-4" /> ({{ product.quantity }})
                                </span>
                            </span>
                        </div>
                </div>
            </div>

        </section>

        <!-- JamBox Banner Section -->
        <section class="px-30 pb-20 flex justify-between items-center gap-4 mt-15 ">
            
            <div class="text-[#FAFAFA] flex justify-between items-center bg-black w-full px-10 py-14">
                <div class="flex flex-col gap-4 items-start">
                    <p class="text-[#00ff66]">Category</p>
                    <h1 class="leading-normal font-fancy text-5xl">Enhance  Your <br> Music Experience</h1>
                    <span class="flex justify-center gap-3 items-center text-xs [&_h4]:text-base [&_h4]:font-medium">
                        <span class="bg-[#FAFAFA] leading-2.5 rounded-full flex w-17 h-17 flex-col justify-center 
                        items-center text-black ">
                            <h4>23</h4>
                            <p>Hours</p>
                        </span>
                        <span class="bg-[#FAFAFA] leading-2.5 rounded-full flex w-17 h-17 flex-col justify-center items-center text-black">
                            <h4>05</h4>
                            <p>Days</p>
                        </span>
                        <span class="bg-[#FAFAFA] leading-2.5 rounded-full flex w-17 h-17 flex-col justify-center items-center text-black">
                            <h4>59</h4>
                            <p>Minutes</p>
                        </span>
                        <span class="bg-[#FAFAFA] leading-2.5 rounded-full flex w-17 h-17 flex-col justify-center items-center text-black">
                            <h4>35</h4>
                            <p>Seconds</p>
                        </span>
                    </span>
                    <Button customClass="bg-[#00FF66] py-3 hover:bg-white hover:text-[#00FF66]">
                        Buy Now!
                    </Button>
                </div>
                <div class="w-[50%]">
                    <img src="\src\assets\JamBox.png" class="w-full inset-0" alt="">
                </div>
            </div>
            
        </section>

        <!-- Explore Products Section -->
        <section class="px-30 pb-20 mt-15">

            <div class="flex  flex-col gap-4 ">

                <div class="flex gap-3 items-center w-full pr-30 text-[#DB4444] font-body font-semibold">
                    <div class="w-5 h-8 rounded-md bg-[#DB4444]"/>
                    <p>Our Products</p>
                </div>

                <div class=" flex justify-between items-center gap-10 w-full mb-5 ">
                    <span class="flex items-end gap-20">
                        <h2 class="font-fancy text-4xl font-bold">Explore Our Products</h2>
                    </span>
                <span class="flex gap-4 [&_img]:cursor-pointer [&_img]:hover:bg-black/10">
                        <img class="p-3 rounded-full bg-[#FAFAFA]" src="\src\assets\icons\icons_arrow-left.svg" alt="">
                        <img class="p-3 rounded-full rotate-180 bg-[#FAFAFA]" src="\src\assets\icons\icons_arrow-left.svg" alt="">
                </span>
                
                </div>

                <div class="grid grid-cols-4 grid-rows-2 justify-between gap-5 items-center w-full mt-15">
                    <div @click="goToProductId(product.id)" v-for="product in getExplore" :key="product.id" 
                    class="flex flex-col gap-2 items-start justify-between p-2 rounded-sm hover:shadow-lg hover:cursor-pointer">
                        <div class="bg-black/15 rounded-sm w-full ">
                            <div class="relative group flex items-center justify-center py-4 w-full">
                                <img :src="product.image" alt="Product Image" class="w-[60%] h-30 object-fit "/>
                                <Button @click.stop="addToCart(product)"  customClass="bg-black py-1 absolute w-full hidden group-hover:block left-0 bottom-0">
                                    <span class="flex w-full gap-2 justify-center items-center text-[#FAFAFA] [&_p]:text-sm">
                                        <cartIcon class="text-[#FAFAFA]"/> <p>Add to cart</p>
                                    </span>
                                </Button>
                                <heartIcon @click.stop="toggleWishList(product)" :class="['absolute top-3 right-3 cursor-pointer', 
                                        isInWishList(product.id) ? 'text-[#DB4444]' : 'text-black/50 hover:text-[#DB4444]']"/>
                            </div>
                        </div>
                        <span class="flex flex-col gap-1 items-start font-body">
                            <p class="font-medium">{{ product.name }}</p>
                            <span class="text-[#DB4444]">${{ product.price.new }} <span :class="[product.price.old?'line-through text-black/55 ml-2':'hidden']">${{ product.price.old }}</span></span>
                            <span class="flex items-center gap-1"> 
                                <img v-for="(star, starIndex) in product.rating" 
                                    :key="starIndex" 
                                    :src="star" 
                                    alt="Rating Star"
                                    class="w-4 h-4" /> ({{ product.quantity }})
                            </span>
                        </span>
                    </div>
                </div>

                <div class="w-full pr-30 flex justify-center items-center pt-10">
                    
                    <Button>
                        View All Products
                    </Button>
                </div>
             </div>
        </section>

        <section class="px-30 pb-20 mt-15">

            <div class="flex  flex-col gap-4 ">

                <div class="flex gap-3 items-center w-full pr-30 text-[#DB4444] font-body font-semibold">
                    <div class="w-5 h-8 rounded-md bg-[#DB4444]"/>
                    <p>Featured</p>
                </div>

                <div class=" flex justify-between items-center gap-10 w-full mb-5 ">
                    <span class="flex items-end gap-20">
                        <h2 class="font-fancy text-4xl font-bold">New Arrivals</h2>
                    </span>
                
                </div>

                <div class="grid grid-cols-4 grid-rows-2  gap-6">
                    
                    <div class="relative flex col-span-2 row-span-2 bg-black rounded-sm">
                        <img src="\src\assets\ps5.png" class="inset-0 self-end" alt="">
                        <span class="absolute bottom-0 ml-7 mb-7 [&_p]:text-[#FAFAFA] flex flex-col gap-2 justify-center items-start">
                            <p class="font-fancy font-bold text-2xl">PlayStation 5</p>
                            <p class="text-sm font-light">Black and White version of the PS5 <br> coming out on sale</p>
                            <p class="border-white/50 border-b cursor-pointer">Shop Now</p>
                        </span>
                    </div>

                    <div class="relative col-span-2 bg-black rounded-sm">
                        <span class="absolute left-0 ml-7 mb-10 [&_p]:text-[#FAFAFA] bottom-0 flex flex-col gap-2 justify-center items-start">
                            <p class="font-fancy font-bold text-2xl">Women's Collections</p>
                            <p class="text-sm font-light">Featured woman collection that <br> give you another vibe</p>
                            <p class="border-white/50 border-b cursor-pointer">Shop Now</p>
                        </span>
                        <img src="\src\assets\woman.png" class="inset-0 h-full" alt="">
                    </div>
                    <div class="relative flex bg-black justify-center items-center rounded-sm">
                        <img src="\src\assets\amazon-echo.png" class="inset-0 w-[80%]" alt="">
                        <span class="absolute left-0 ml-7 mb-10 [&_p]:text-[#FAFAFA] bottom-0 flex flex-col gap-2 justify-center items-start">
                            <p class="font-fancy font-bold text-2xl">Speakers</p>
                            <p class="text-sm font-light">Amazon Wireless Speakers</p>
                            <p class="border-white/50 border-b cursor-pointer">Shop Now</p>
                        </span>
                    </div>
                    <div class="relative flex bg-black justify-center items-center rounded-sm">
                        <img src="\src\assets\perfume.png" class="inset-0 w-[80%]" alt="">
                        <span class="absolute left-0 ml-7 mb-10 [&_p]:text-[#FAFAFA] bottom-0 flex flex-col gap-2 justify-center items-start">
                            <p class="font-fancy font-bold text-2xl">Perfumes</p>
                            <p class="text-sm font-light">GUCCI INTENSE OUD EDP</p>
                            <p class="border-white/50 border-b cursor-pointer">Shop Now</p>
                        </span>
                    </div>
                    <div>

                    </div>
                </div>

            
             </div>
        </section>

        <section class="px-50 pb-20  flex justify-between">

            <div class="flex flex-col items-center gap-1 ">
                <img src="\src\assets\Delivery.png" class="w-30" alt="">
                <span class="flex flex-col items-center gap-2">
                    <h2 class="font-fancy font-bold">FREE AND FAST DELIVERY</h2>
                    <p class="text-sm font-body font-medium">Free delivery for all orders over $140</p>
                </span>
            </div>

            <div class="flex flex-col items-center gap-1 ">
                <img src="\src\assets\Services.png" class="w-30" alt="">
                <span class="flex flex-col items-center gap-2">
                    <h2 class="font-fancy font-bold">24/7 CUSTOMER SERVICE</h2>
                    <p class="text-sm font-body font-medium">Friendly 24/7 customer support</p>
                </span>
            </div>

            <div class="flex flex-col items-center gap-1 ">
                <img src="\src\assets\Guarantee.png" class="w-30" alt="">
                <span class="flex flex-col items-center gap-2">
                    <h2 class="font-fancy font-bold">MONEY BACK GUARANTEE</h2>
                    <p class="text-sm font-body font-medium">Get your money back within 30 days</p>
                </span>
            </div>

        </section>

    </div>
</template>
<script>
import mobileIcon from '../Icon/mobileIcon.vue';
import toast,{ Toaster } from 'vue3-hot-toast';
import computer from '../Icon/computer.vue';
import headphone from '../Icon/headphone.vue';
import gamingIcon from '../Icon/gamingIcon.vue';
import smartwatchIcon from '../Icon/smartwatchIcon.vue';
import cameraIcon from '../Icon/cameraIcon.vue';
import Button from '../Universal Comp/Button.vue';
import cartIcon from '../Icon/cartIcon.vue';
import heartIcon from '../Icon/heartIcon.vue';

import { mapActions, mapGetters } from 'vuex';
export default {
    components:{
        Toaster,
        mobileIcon,
        computer,
        headphone,
        gamingIcon,
        smartwatchIcon,
        cameraIcon,
        Button,
        cartIcon,
        heartIcon
    },
    emit:['product'],
    data() {
        return {
            dropdowns:[
                {name:"Woman's Fashion"},
                {name:"Man's Fashion"}
            ],
            categories:[
                {name:"Electronics"},
                {name:"Home & Lifestyle"},
                {name:"Sports & Outdoor"},
                {name:"Baby's % Toys"},
                {name:"Groceries & Pets"},
                {name:"Health & Beauty"},
            ],

            catCards:[
                {name:'Phones', cat: 'mobileIcon' },
                {name:'Computers', cat: 'computer' },
                {name:'SmartWatch', cat: 'smartwatchIcon' },
                {name:'Cameras', cat: 'cameraIcon' },
                {name:'HeadPhones', cat: 'headphone' },
                {name:'Gaming', cat: 'gamingIcon'},
            ]
        }
    },
    computed: {
        ...mapGetters('products',[
            'getFlash',
            'getBestSellers',
            'getExplore',
        ]),

        ...mapGetters('wishList',[
            'getWishListItems',
        ]),

        isInWishList() {
            return (productId) => {
                return this.getWishListItems.some(item => item.id === productId);
            };
        }

    },

    methods: {
        ...mapActions('products',[
            'fetchProducts',
        ]),

        ...mapActions('cart',[
            'addToCart',
        ]),

        ...mapActions('wishList',[
            'addToWishList',
            'removeFromWishList',
        ]),

        goToProductId(id){
            this.$router.push({name: 'product', params: {id:id}})
        },

        toggleWishList(product) {
            if (this.isInWishList(product.id)) {
                this.removeFromWishList(product.id);
            } else {
                this.addToWishList(product);
            }
        },

        handleAddToCart(product, event) {
            event.stopPropagation();
            this.addToCart(product);
        },


        scrollProducts(direction) {
            const container = this.$refs.productGrid;
            
            const scrollDistance = container.clientWidth; 
            
            if (direction === 'left') {
                
                container.scrollLeft -= scrollDistance;
            } else if (direction === 'right') {
               
                container.scrollLeft += scrollDistance;
            }
        }
    },

    mounted(){
        this.fetchProducts();
    }
}
</script>
<style >
    .scrollbar-hide {
  /* For IE, Edge, and Firefox */
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}
.scrollbar-hide::-webkit-scrollbar {
  /* For Chrome, Safari, and Opera */
  display: none;
}
</style>

<!-- <script>
export default {
    name: 'RepeatingCountdown',
    data() {
        return {
            timer: null, // Stores the interval ID
            
            // Define the fixed duration in milliseconds for 3d 15h 45m 22s
            FIXED_DURATION_MS: (
                3 * 24 * 60 * 60 * 1000 + // 3 days
                15 * 60 * 60 * 1000 +     // 15 hours
                45 * 60 * 1000 +          // 45 minutes
                22 * 1000                 // 22 seconds
            ),
            
            // Reactive time values
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',

            // Stores the next time the timer should end
            targetTime: null, 
        };
    },
    mounted() {
        this.initializeTargetTime();
        this.startCountdown();
    },
    beforeUnmount() {
        // Clear the interval when the component is destroyed
        clearInterval(this.timer);
    },
    methods: {
        // Helper to pad single digits
        formatTime(value) {
            return value < 10 ? `0${value}` : `${value}`;
        },
        
        initializeTargetTime() {
            const storedTarget = localStorage.getItem('countdownTargetTime');
            const now = Date.now();
            
            if (storedTarget) {
                this.targetTime = parseInt(storedTarget);
                
                // If the stored time is in the past, reset it to now + duration, 
                // ensuring the timer doesn't start at zero for days/weeks.
                while (this.targetTime < now) {
                    this.targetTime += this.FIXED_DURATION_MS;
                }
            } else {
                // First run: set target to current time + fixed duration
                this.targetTime = now + this.FIXED_DURATION_MS;
            }

            // Save the newly calculated target time
            localStorage.setItem('countdownTargetTime', this.targetTime);
        },

        startCountdown() {
            this.timer = setInterval(() => {
                const now = Date.now();
                let distance = this.targetTime - now;

                if (distance < 0) {
                    // Timer expired: RESET
                    this.targetTime = now + this.FIXED_DURATION_MS;
                    localStorage.setItem('countdownTargetTime', this.targetTime);
                    distance = this.FIXED_DURATION_MS; // Start the calculation with the full duration
                }

                // Time calculations
                const d = Math.floor(distance / (1000 * 60 * 60 * 24));
                const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((distance % (1000 * 60)) / 1000);

                // Update reactive data properties
                this.days = this.formatTime(d);
                this.hours = this.formatTime(h);
                this.minutes = this.formatTime(m);
                this.seconds = this.formatTime(s);
            }, 1000);
        }
    }
};
</script> -->