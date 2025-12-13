<template >
    <div class="max-w-360 mx-auto">
        <section class="px-30 pb-10 mt-10">
            <div class="w-full flex justify-start items-center [&_p]:text-black/50">
                <p>Home / <span class="text-black">Contact</span></p>
            </div>
        </section>

        <section class="px-30 pb-10 mt-8">
            <div class="flex justify-between items-start h-fit">
                <div class="flex flex-col justify-center items-start gap-2.5 shadow-lg p-5  w-[30%]">
                    <span>
                        <img src="\src\assets\icons\icons-phone.svg" class=" inline-block" alt="">
                        <p class="ml-4 font-medium inline-block">Call To Us</p>
                    </span>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +2349034842550</p>
                    <hr class="w-full my-2">
                    <span>
                        <img src="\src\assets\icons\icons-mail.svg" class=" inline-block" alt="">
                        <p class="ml-4 font-medium inline-block">Write To Us</p>
                    </span>
                    <p>Fill out our form and we will contact <br> you within 24 hours</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                </div>

                <div class="flex flex-col justify-center items-start gap-2 shadow-lg p-5 w-[65%]">
                    <span class="flex justify-between [&_input]:bg-black/20 [&_input]:py-2 [&_input]:outline-0 
                    [&_input]:px-3 w-full">
                        <input type="text" placeholder="Name *">
                        <input type="email" placeholder="Email *">
                        <input type="text" placeholder="Phone Number *" v-model="tel"
                         @input="isTel($event.target.value)">
                    </span>
                    <textarea name="" id="" rows="8" class="bg-black/20 w-full outline-0 p-2">
                        Your Message
                    </textarea>
                    <Button class="self-end">Send Message</Button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Button from '../Universal Comp/Button.vue';
export default {
    components:{
        Button
    },

    data() {
        return {
            tel:""
        }
    },

    methods: {
        isTel(value){
            this.tel = value.replace(/[^0-9]/g,'')
        }
    },
}
</script>
<style lang="">
    
</style>