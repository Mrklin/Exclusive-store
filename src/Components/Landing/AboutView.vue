<template >
    <div class="max-w-360 mx-auto">
        
        <section class="px-30 pb-10 mt-10 ">

            <div class="w-full flex justify-start items-center [&_p]:text-black/50">
                <p>Home / <span  class="text-black">About</span></p>
            </div>
        </section>

        <section class="pl-30 pb-10 ">
            
            <div class="flex justify-between gap-10 items-center ">

                <div class="flex flex-col w-1/2 gap-10">
                    <h1 class="font-fancy font-medium text-6xl">Our Story</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis consequuntur
                         perferendis debitis consequatur nemo. Ipsam possimus et tenetur esse voluptatibus,
                         <br> <br>
                          deleniti, quis unde blanditiis culpa aspernatur ratione magnam molestias eos ut 
                          veritatis mollitia explicabo repellendus saepe cupiditate temporibus error suscipit!
                         Inventore rerum nostrum dolorem laborum recusandae! Perferendis, cum laboriosam?</p>
                </div>

                <div class="w-1/2 ">
                    <img src="\src\assets\women Image.png" alt="">
                </div>

            </div>

        </section>

        <section class="px-30 pb-10 mt-10 ">
            <div class="flex justify-between items-center w-full">

                <div v-for="data in cDatas" :key="data.id" class="group hover:shadow hover:border-0 hover:bg-[#DB4444] rounded-sm border border-black/50 p-3 cursor-pointer w-60 flex flex-col justify-center items-center gap-2">
                    <component :is="data.icon" class="group-hover:text-white"/>
                    <h1 class="text-3xl group-hover:text-[#FAFAFA] font-fancy font-bold">{{ data.amount }}</h1>
                    <p class="group-hover:text-[#FAFAFA]">{{ data.info }}</p>
                </div>

            </div>
            
        </section>

        <section class="px-30 pb-10 mt-10 ">
            <div class="flex justify-between gap-6 items-center">

                <div class="flex flex-col gap-2 items-start w-1/3">
                    <span><img src="\src\assets\Tom Cruise.png" alt=""></span>

                    <h2 class="text-3xl font-fancy font-medium">Tom Cruise</h2>

                    <h4>Founder & Chairman</h4>

                    <span class="flex gap-3 p-1.5 justify-start rounded-b-sm [&_img]:hover:bg-black/30
                     [&_img]:hover:cursor-pointer items-center w-full bg-black/40">
                        <img src="\src\assets\footer\Icon-Twitter.svg" alt="">
                        <img src="\src\assets\footer\icon-instagram.svg" alt="">
                        <img src="\src\assets\footer\Icon-Linkedin.svg" alt="">
                    </span>
                </div>

                <div class="flex flex-col gap-2 items-start w-1/3">
                    <span><img src="\src\assets\Emma Watson.png" alt=""></span>

                    <h2 class="text-3xl font-fancy font-medium">Emma Watson</h2>

                    <h4>Managing Director</h4>

                    <span class="flex gap-3 p-1.5 justify-start rounded-b-sm [&_img]:hover:bg-black/30
                     [&_img]:hover:cursor-pointer items-center w-full bg-black/40">
                        <img src="\src\assets\footer\Icon-Twitter.svg" alt="">
                        <img src="\src\assets\footer\icon-instagram.svg" alt="">
                        <img src="\src\assets\footer\Icon-Linkedin.svg" alt="">
                    </span>
                </div>

                <div class="flex flex-col gap-2 items-start w-1/3">
                    <span><img src="\src\assets\Will Smith.png" alt=""></span>

                    <h2 class="text-3xl font-fancy font-medium">Will Smith</h2>

                    <h4>Product Designer</h4>

                    <span class="flex gap-3 p-1.5 justify-start rounded-b-sm [&_img]:hover:bg-black/30
                     [&_img]:hover:cursor-pointer items-center w-full bg-black/40">
                        <img src="\src\assets\footer\Icon-Twitter.svg" alt="">
                        <img src="\src\assets\footer\icon-instagram.svg" alt="">
                        <img src="\src\assets\footer\Icon-Linkedin.svg" alt="">
                    </span>
                </div>
            </div>
        </section>

        <section class="px-50 py-20  flex justify-between">

            <div class="flex flex-col items-center gap-1 ">
                <img src="\src\assets\Delivery.png" class="w-20" alt="">
                <span class="flex flex-col items-center gap-2">
                    <h2 class="font-fancy font-bold">FREE AND FAST DELIVERY</h2>
                    <p class="text-sm font-body font-medium">Free delivery for all orders over $140</p>
                </span>
            </div>

            <div class="flex flex-col items-center gap-1 ">
                <img src="\src\assets\Services.png" class="w-20" alt="">
                <span class="flex flex-col items-center gap-2">
                    <h2 class="font-fancy font-bold">24/7 CUSTOMER SERVICE</h2>
                    <p class="text-sm font-body font-medium">Friendly 24/7 customer support</p>
                </span>
            </div>

            <div class="flex flex-col items-center gap-1 ">
                <img src="\src\assets\Guarantee.png" class="w-20" alt="">
                <span class="flex flex-col items-center gap-2">
                    <h2 class="font-fancy font-bold">MONEY BACK GUARANTEE</h2>
                    <p class="text-sm font-body font-medium">Get your money back within 30 days</p>
                </span>
            </div>
            
        </section>

    </div>
</template>
<script>
import saleIcon from '../Icon/saleIcon.vue';
import sellersIcon from '../Icon/sellersIcon.vue';
import grossIcon from '../Icon/grossIcon.vue';
import customerIcon from '../Icon/customerIcon.vue';

export default {

    components:{
        saleIcon,
        sellersIcon,
        grossIcon,
        customerIcon
    },
    data() {
        return {
            cDatas:[
                {id:1, icon:"sellersIcon",  amount: "10.5k", info:"Sallers active in our site"},
                {id:2, icon:"saleIcon", amount: "33k", info:"Monthlt Production Sale"},
                {id:3, icon:"customerIcon",  amount: "45.5k", info:"Monthly Production Sale"},
                {id:4, icon:"grossIcon", amount: "25k", info:"Annual gross sale"},
            ],


        }
    },
}
</script>
<style lang="">
    
</style>