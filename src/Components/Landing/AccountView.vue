<!-- <template >
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
</template> -->

<template>
  <div class="max-w-[1440px] mx-auto overflow-hidden">

    <section class="px-5 md:px-10 lg:px-20 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="w-full flex justify-start items-center text-sm">
        <p class="text-black/50">Home / <span class="text-black">My Account</span></p>
      </div>
      <p class="w-full md:w-auto text-left md:text-right text-sm">
        Welcome! <span class="text-[#DB4444] font-medium">{{ getUser }}</span>
      </p>
    </section>

    <section class="px-5 md:px-10 lg:px-20 pb-20">
      <div class="flex flex-col lg:flex-row justify-start gap-10 lg:gap-20 items-start">
        
        <div class="flex flex-row lg:flex-col items-start gap-8 lg:gap-6 w-full lg:w-1/4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 border-b lg:border-0 border-gray-100">
          <div class="flex flex-col gap-3 min-w-max">
            <h3 class="font-fancy font-semibold text-lg">Manage My Account</h3>
            <ul class="lg:ml-4 flex flex-col gap-2 text-sm text-black/50">
              <li class="text-[#DB4444] cursor-pointer">My Profile</li>
              <li class="hover:text-[#DB4444] cursor-pointer">Address Book</li>
              <li class="hover:text-[#DB4444] cursor-pointer">My Payment Options</li>
            </ul>
          </div>

          <div class="flex flex-col gap-3 min-w-max">
            <h3 class="font-fancy font-semibold text-lg">My Orders</h3>
            <ul class="lg:ml-4 flex flex-col gap-2 text-sm text-black/50">
              <li class="hover:text-[#DB4444] cursor-pointer">My Returns</li>
              <li class="hover:text-[#DB4444] cursor-pointer">My Cancellations</li>
            </ul>
          </div>
        </div>

        <div class="p-6 md:p-10 lg:p-15 gap-6 flex flex-col rounded-sm shadow-xl border border-gray-50 w-full items-start">
          <h3 class="text-[#DB4444] text-xl font-fancy font-semibold">Edit Your Profile</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <label class="flex flex-col gap-2">
              <span class="font-medium text-sm">First Name</span>
              <input type="text" class="bg-black/5 p-3 rounded-sm w-full outline-[#DB4444]" value="Md">
            </label>
            <label class="flex flex-col gap-2">
              <span class="font-medium text-sm">Last Name</span>
              <input type="text" class="bg-black/5 p-3 rounded-sm w-full outline-[#DB4444]" value="Rimel">
            </label>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <label class="flex flex-col gap-2">
              <span class="font-medium text-sm">Email</span>
              <input type="email" placeholder="email@email.com" class="bg-black/5 p-3 rounded-sm w-full outline-[#DB4444]">
            </label>
            <label class="flex flex-col gap-2">
              <span class="font-medium text-sm">Address</span>
              <input type="text" placeholder="123, Abuja, Nigeria" class="bg-black/5 p-3 rounded-sm w-full outline-[#DB4444]">
            </label>
          </div>

          <div class="w-full flex flex-col gap-4 mt-2">
            <h4 class="font-medium text-sm">Password Changes</h4>
            <input type="password" placeholder="Current password" class="bg-black/5 p-3 rounded-sm w-full outline-[#DB4444]">
            <input type="password" placeholder="New password" class="bg-black/5 p-3 rounded-sm w-full outline-[#DB4444]">
            <input type="password" placeholder="Confirm password" class="bg-black/5 p-3 rounded-sm w-full outline-[#DB4444]">
          </div>

          <div class="flex gap-4 self-end mt-4"> 
            <Button custom-class="bg-transparent text-black border-0 hover:bg-gray-100 p-3">Cancel</Button> 
            <Button>Save Changes</Button>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { mapGetters } from 'vuex';
import { useUserStore } from '@/store/userStore';
import Button from '../Universal Comp/Button.vue';
// export default {

   components:{ Button};

   const userStore = useUserStore();

   const getUser = userStore.userName;

//    computed: {
//      ...mapGetters('user',['getUser'])
//    },
// }
</script>
<style >
    .li{
        color: #DB4444;
    }
</style>