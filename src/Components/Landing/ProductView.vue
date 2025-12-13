<template >
    <div class="max-w-360 mx-auto">
        <section class="px-30 pb-10 mt-10">

            <div class="w-full flex justify-start items-center [&_p]:text-black/50">
                <p>Home / <span  class="text-black">{{ product?.name || 'Item' }}</span></p>
            </div>
        </section>

        <section class="px-30 pb-10 mt-10">
            <div v-if="!product">Loading product details...</div>
            
            <div v-else class="grid grid-cols-5 gap-4 w-full">

                <div class=" flex flex-col gap-2">
                    <span class=" p-2 h-40  flex flex-col gap-3 bg-black/10">
                        <img :src="product.altImg[0]" :alt="product.name"
                        class="inset-0 h-full">
                    </span>
                    <span class=" p-2 h-40  flex flex-col gap-3 bg-black/10">
                        <img :src="product.altImg[1]" :alt="product.name"
                        class="inset-0 h-full">
                    </span>
                    <span class=" p-2 h-40  flex flex-col gap-3 bg-black/10">
                        <img :src="product.altImg[2]" :alt="product.name"
                        class="inset-0 h-full">
                    </span>
                    <span class=" p-2 h-40  flex flex-col gap-3 bg-black/10">
                        <img :src="product.altImg[3]" :alt="product.name"
                        class="inset-0 h-full">
                    </span>
       
                </div>

                <div class="col-span-2 flex justify-center items-center bg-black/10">
                    <span class="w-full flex justify-center items-center">
                        <img :src="product.image" :alt="product.name" >
                    </span>
                    
                </div>

                <div class=" col-span-2 flex flex-col justify-between items-start py-2 px-10 gap-4 ">
                    <h1 class="font-fancy font-medium text-2xl">{{ product.name }}</h1>
                    <span class="flex items-center gap-1"> 
                      <img v-for="(star, starIndex) in product.rating" 
                          :key="starIndex" 
                          :src="star" 
                          alt="Rating Star"
                          class="w-4 h-4" /> ({{ product.quantity }})
                    </span>
                    <h1 class="font-fancy text-2xl">${{ (product?.price?.new) * product.number }}.00</h1>
                    <p class=" text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est aliquid mollitia
                         odit voluptas molestiae accusantium vitae quaerat aspernatur enim tempora
                         corporis quos nulla illo eligendi neque?</p>
                    <hr class="w-full bg-black/10">

                    <div class="flex items-center justify-center gap-4">
                        <h3 class="text-2xl">Colour:</h3>
                        <span class="flex gap-3 items-center justify-center mt-1">

                            <label class="cursor-pointer h-4.5 w-4.5 flex justify-center items-center rounded-full border-2 border-black/10"> 
                                <input
                                id="blue"
                                name="color"
                                type="radio"
                                checked
                                class="iinput hidden cursor-pointer"
                                value="blue"
                                @change="handleRadio($event.target.value)"
                                />
                                <span class="checkmark opacity-0 transition-opacity duration-500 ease w-2.5 h-2.5 hidden rounded-full  bg-blue-400"></span>
                            </label>

                            <label class="cursor-pointer h-4.5 w-4.5 flex justify-center items-center rounded-full border-2 border-black/10"> 
                            <input
                            id="red"
                            name="color"
                            type="radio"
                            class="iinput hidden cursor-pointer"
                            value="red"
                            @change="handleRadio($event.target.value)"
                            />
                            <span class="checkmark opacity-0 transition-opacity duration-500 ease  w-2.5 h-2.5 rounded-full hidden bg-[#DB4444]"> </span>
                            </label>
                            
                        </span>
                    </div>

                    <div class="flex items-center justify-between gap-3">
                        <h3 class="text-2xl">Size:</h3>
                        <span class="flex gap-3 items-center justify-center mt-1" >

                            <label v-for="size in sizes" :key="size.id"
                             class="w-7 h-7 relative border border-black/10 rounded-sm cursor-pointer flex items-center justify-center">
                                <input 
                                type="radio" 
                                :id="size.id" 
                                :name="size.name" 
                                :value="size.value" 
                                class="iinput hidden cursor-pointer"
                                @change="handleSize($event.target.value)"
                                />
                                <span class="checkmark absolute opacity-1 rounded-sm transition-opacity duration-500 ease hidden w-full h-full bg-[#DB4444]" ></span>
                                
                                <p :class="size.value === selectSize?'text-white z-10':'text-black/70','absolute text-sm'">{{ size.value }}</p>

                            </label>

                        </span>
                    </div>

                    <div  class="flex items-center justify-between w-full">
                        <div class="flex w-[40%] [&_span]:cursor-pointer">
                            <span @click="removeSingle(product)"
                            class="font-medium flex item-center py-2 px-4 hover:bg-[#DB4444] 
                            hover:text-[#FAFAFA] cursor-pointer border select-none rounded-sm">-</span>
                            <input type="text"
                            :value="product.number"
                            min="1"
                            class="font-medium w-17 text-center outline-0  py-2 border rounded-sm" />
                            <span @click="addSingle(product)"
                            class="font-medium flex item-center py-3 px-4 hover:bg-[#DB4444]
                             hover:text-[#FAFAFA] border rounded-sm select-none">+</span>
                        </div>
                        <Button @click="buyNow">
                                Buy Now
                        </Button>
                        
                         <heartIcon @click="toggleWishList(product)" :class="['border rounded-sm cursor-pointer', 
                                        isInWishList(product.id) ? 'text-[#DB4444]' : 'text-black/50 hover:text-[#DB4444]']"/>
                        
                    </div>
                    
                    <div class="border rounded-sm pt-5 gap-4 w-full">
                        <div class="flex justify-start gap-5 px-3 pb-5 items-center border-b ">
                                <img src="\src\assets\icons\icon-delivery.svg" class="w-15" alt="">
                            <span>
                                <p class="font-medium mb-2">Free Delivery</p>
                                <p class="text-xs underline">Enter your postal code for Delivery Availability</p>
                            </span>
                        </div>
                        <div class="flex justify-start gap-5 py-5 px-3 items-center">
                                <img src="\src\assets\icons\Icon-return.svg" class="w-15" alt="">
                            <span>
                                <p class="font-medium mb-2">Return Delivery</p>
                                <p class="text-xs">Free 30 days Delivery Returns. <span class=" underline">Detalis</span> </p>
                            </span>
                        </div>
                    </div>

                </div>

            </div>

        </section>

        <section class="px-30 py-10 mt-10">

            <div class="flex flex-col gap-2">

            <div class="flex gap-3 items-center w-full pr-30 text-[#DB4444] font-body font-semibold">
                <div class="w-5 h-8 rounded-md bg-[#DB4444]"/>
                <p>Related Items</p>
            </div>

            <div class="grid grid-cols-4  justify-between gap-5 items-center w-full mt-15">
                    <div @click="goToProductId(product.id)" v-for="product in relatedProducts" :key="product.id" 
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
            </div>
        </section>
<!-- 
       <section class="px-30 py-20">
        <div v-if="!product">Loading product details...</div>

        <div v-else class="flex gap-10">
            <div class="w-1/2">
                <img :src="product.image" :alt="product.name" class="w-full object-contain h-96 bg-gray-100 p-4 rounded">
            </div>

            <div class="w-1/2 flex flex-col gap-4 font-body">
                <h1 class="text-3xl font-heading font-bold">{{ product.name }}</h1>
                
                <div class="flex items-center gap-2">
                     <span class="flex">
                        <img v-for="(star, i) in (product.rating || [])" :key="i" :src="star" class="w-4 h-4">
                     </span>
                     <span class="text-gray-500">({{ product.quantity || 0 }} Reviews)</span>
                </div>

                <p class="text-2xl font-medium text-[#DB4444]">${{ product.price?.new || product.price }}</p>

                <p class="text-gray-700">{{ product.description || 'No description available.' }}</p>

                <hr class="border-black/20 my-2">

                <div class="flex gap-4 mt-4">
                    <Button @click="addToCart(product)" customClass="bg-[#DB4444] text-white px-8 py-2 rounded hover:bg-[#E07575]">Buy Now</Button>
                    <div class="border border-black/50 p-2 rounded cursor-pointer hover:bg-gray-100">
                        <heartIcon @click="toggleWishList(product)" :class="isWishlisted ? 'text-[#DB4444]' : 'text-black'"/>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Button from '../Universal Comp/Button.vue';
import heartIcon from '../Icon/heartIcon.vue';
import cartIcon from '../Icon/cartIcon.vue';

export default {
    props:['id'],

    components:{
        Button,
        heartIcon,
        cartIcon
    },

    data() {
        return {
            selectedRadio : 'blue',
            sizes:[
                {id:1, name:'size', value:'XS'},
                {id:2, name:'size', value:'S'},
                {id:3, name:'size', value:'M'},
                {id:4, name:'size', value:'L'},
                {id:5, name:'size', value:'XL'},
            ],
            selectSize: '',
        }
    },

    computed: {
        ...mapGetters('products',['getProductById', 'productCount', 'getProductByCat']),

        ...mapGetters('wishList',[
            'getWishListItems',
        ]),

        isInWishList() {
            return (productId) => {
                return this.getWishListItems.some(item => item.id === productId);
            };
        },

        product(){
            return this.getProductById(this.id)
        },

        relatedProducts(){
            if(!this.product) return [];

            const related = this.getProductByCat(this.product.category)

            return related.filter(item => item.id !== this.product.id)
        },
  
    },

    methods: {

        ...mapActions('products',['fetchProducts','addSingle', 'removeSingle']),

        ...mapActions('wishList',['addToWishList', 'removeFromWishList']),

        ...mapActions('cart',[
            'addToCart',
        ]),

        ...mapActions('checkout',[
             'setCheckoutItems',
        ]),

        buyNow(){
            const itemToBuy = {
                ...this.product,
                quantity: this.product.number,
                price: this.product.price
            };

            this.setCheckoutItems([itemToBuy])
            this.$router.push({name: 'checkout'})
        },

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

        handleRadio(selectRadio){
            this.selectedRadio = selectRadio
        },

        handleSize(size){
            this.selectSize = size;
            console.log(this.selectSize);
            
        }
    },

    mounted(){

        if(!this.product){
            this.fetchProducts()
        }
    }
}
</script>
<style >
    .iinput:checked + .checkmark{
    display: inline-block;
    opacity: 1;
    }
</style>