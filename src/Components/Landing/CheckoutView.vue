<template >
    <div class="max-w-360 mx-auto">
        <section class="px-30 pb-10 mt-10">

            <div class="w-full flex justify-start items-center [&_p]:text-black/50">
                <p>Account / </p>
                <p> My Account / </p>
                <p> Product / </p>
                <p> View Cart / </p>
                <h3 class="text-black">CheckOut</h3>
            </div>

        </section>

        <section class="px-30 ">
            <h1 class="font-fancy font-medium text-4xl">Billing Details</h1>
            <div class="flex justify-between gap-6 items-start mt-5">
                <div class="w-1/2 pr-10">
                    <label class="flex flex-col gap-2 mb-5">
                        <span class="text-black/20">First Name <span class="text-[#DB4444]">*</span></span>
                        <input type="text" class="bg-black/10 p-2 ">
                    </label>
                    
                    <label class="flex flex-col gap-2 mb-5">
                        <span class="text-black/20">Company Name</span>
                        <input type="text" class="bg-black/10 p-2 ">
                    </label>

                    <label class="flex flex-col gap-2 mb-5">
                        <span class="text-black/20">Street Address <span class="text-[#DB4444]">*</span></span>
                        <input type="text" class="bg-black/10 p-2 ">
                    </label>

                    <label class="flex flex-col gap-2 mb-5">
                        <span class="text-black/20">Apartment, floor etc (optional) </span>
                        <input type="text" class="bg-black/10 p-2 ">
                    </label>

                    <label class="flex flex-col gap-2 mb-5">
                        <span class="text-black/20">Town/City <span class="text-[#DB4444]">*</span></span>
                        <input type="text" class="bg-black/10 p-2 ">
                    </label>

                    <label class="flex flex-col gap-2 mb-5">
                        <span class="text-black/20">Phone Number <span class="text-[#DB4444]">*</span></span>
                        <input type="text" class="bg-black/10 p-2 ">
                    </label>

                    <label class="flex flex-col gap-2 mb-5">
                        <span class="text-black/20">Email Address <span class="text-[#DB4444]">*</span></span>
                        <input type="text" class="bg-black/10 p-2 ">
                    </label>

                    <span>
                        <label class="flex gap-3">
                            <input type="checkbox" name="" id="" class="w-5 h-5 accent-[#DB4444]">
                            <p>Save this information for faster checkout next time</p>
                        </label>
                    </span>
                </div>

                <div class="w-1/2 flex flex-col gap-4 pl-10">

                    <div class="flex flex-col gap-4 mb-4">
                        <div v-for="item in checkoutItems" :key="item.id" class="flex items-center justify-between shadow-sm p-2 mr-10">
                            <div class="flex items-center gap-3">
                                <img :src="item.image" :alt="item.name" class="w-12 h-12 object-contain">
                                <p class="text-sm w-40 truncate">{{ item.name }}</p>
                            </div>
                            <p class="text-sm text-gray-500">x{{ item.quantity }}</p>
                            <p class="font-medium">${{ ((item.price.new || item.price) * item.quantity).toFixed(2) }}</p>
                        </div>
                    </div>

                    <span class="flex justify-between pb-3 border-b items-center mr-10">
                        <p>Subtotal</p>
                         <p>${{ checkoutTotal.toFixed(2) }}</p>
                    </span>
                    <span class="flex justify-between pb-3 border-b items-center mr-10">
                        <p>Shipping</p>
                         <p>Free</p>
                    </span>
                    <span class="flex justify-between pb-3 items-center mr-10">
                        <p>Total</p>
                         <p>${{ checkoutTotal.toFixed(2) }}</p>
                    </span>

                    <span class=" flex justify-between items-center mr-10">
                        <label class="flex items-center gap-3">
                            <input type="radio" name="pay" id="bank" class="w-5 h-5 accent-black">
                            <p>Bank</p>
                        </label>
                        <img src="\src\assets\bank.png" class="w-60" alt="">
                    </span>
                    <span class=" flex justify-between items-center mr-10">
                        <label class="flex items-center gap-3">
                            <input type="radio" name="pay" id="cash" class="w-5 h-5 accent-black">
                            <p>Cash on Delivery</p>
                        </label>
                    </span>
                    <span class="flex justify-between items-center">
                        <input type="text" class="outline-0 p-2 border rounded-sm"
                        placeholder="Coupon Code">
                        <Button>
                            Apply Coupon
                        </Button>
                    </span>
                    <Button class="self-start">
                        Place Order
                    </Button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Button from '../Universal Comp/Button.vue';
export default {
    components:{
        Button
    },

    computed: {
        ...mapGetters('checkout',{
            checkoutItems: 'getCheckoutItems',
            checkoutTotal: 'getCheckoutTotal',
        })
    },

    mounted() {
        if(this.checkoutItems.length ===0){
            this.$router.push('/')
        }
    },
}
</script>
<style lang="">
    
</style>