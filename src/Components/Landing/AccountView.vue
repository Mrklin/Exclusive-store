<template >
    <div class="max-w-360 mx-auto">

        <section class="px-30 pb-10 mt-10 flex justify-between items-center">
            <div class="w-full flex justify-start items-center [&_p]:text-black/50">
                <p>Home / <span  class="text-black">My Account</span></p>

            </div>
            <p class="flex gap-1">Welcome! <span class="text-[#DB4444]">{{ getUser }}</span> </p>
        </section>

        <section class="px-30 pb-30 mt-10">
             <div class="flex justify-start gap-40 items-start">
                <div class="flex flex-col items-start gap-3">
                    <span class="flex flex-col gap-3">
                        <h3 class="font-fancy font-semibold text-xl">Manage My Account</h3>
                        <ul class="ml-4 flex flex-col gap-2 [&_li]:text-black/50">
                            <li class="li">My Profile</li>
                            <li>Address Book</li>
                            <li>My Payment Options</li>
                        </ul>
                    </span>

                    <span class="flex flex-col gap-3">
                        <h3 class="font-fancy font-semibold text-xl">My Orders</h3>
                        <ul class="ml-4 flex flex-col gap-2 [&_li]:text-black/50">
                            <li></li>
                            <li>My Returns </li>
                            <li>My Cancellations</li>
                        </ul>
                    </span>

                    <span class="flex flex-col gap-3">
                        <h3 class="font-fancy font-semibold text-xl">My WishList</h3>
                    </span>
                </div>

                <div class="p-15 gap-6 flex flex-col justify-between rounded-sm shadow-lg w-full items-start">
                    <h3 class="text-[#DB4444] text-2xl font-fancy font-semibold">Edit Your Profile</h3>

                    <span class="flex justify-between items-center w-full">
                        <label class="flex flex-col gap-2 mb-5">
                        <span class="font-semibold">First Name </span>
                        <input type="text" class="bg-black/10 p-2 w-90 ">
                    </label>

                    <label class="flex flex-col gap-2 mb-5">
                        <span class="font-semibold">Last Name </span>
                        <input type="text" class="bg-black/10 p-2 w-90">
                    </label>
                    </span>

                    <span class="flex justify-between items-center w-full">
                        <label class="flex flex-col gap-2 mb-5">
                        <span class="font-semibold">Email </span>
                        <input type="email" placeholder="email@email.com" class="bg-black/10 p-2 w-90 ">
                    </label>

                    <label class="flex flex-col gap-2 mb-5">
                        <span class="font-semibold">Address </span>
                        <input type="text" placeholder="123, Abuja, Nigeria" class="bg-black/10 p-2 w-90">
                    </label>
                    </span>

                    <span class="w-full ">
                        <label class="flex flex-col gap-3 justify-between items-start">
                            <span class="font-semibold">Password Changes</span>
                            <input type="email" placeholder="Current password" class="bg-black/10 p-2 w-full ">
                            <input type="email" placeholder="New password" class="bg-black/10 p-2 w-full">
                            <input type="email" placeholder="Confirm password" class="bg-black/10 p-2 w-full">
                        </label>
                    </span>

                    <span class="flex gap-2 self-end"> 
                        <Button custom-class="bg-[#FAFAFA] hover:text-[#FAFAFA] rounded-sm p-3">Cancel</Button> 
                        <Button>Save Changes</Button>
                    </span>

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
     ...mapGetters('user',['getUser'])
   },
}
</script>
<style >
    .li{
        color: #DB4444;
    }
</style>