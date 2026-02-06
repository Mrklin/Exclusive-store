<!-- <template >
    <div class="w-full bg-black text-[#FAFAFA] font-body text-sm font-normal flex justify-center 
    items-center py-2 top-0 ">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
             <span class="font-medium ml-3">ShopNow</span>
        </p>
        <span class="flex justify-center items-center ml-30">English <img src="\src\assets\icons\DropDown (1).svg" alt=""></span>
    </div>
</template> -->

<template>
    <div class="w-full bg-black text-[#FAFAFA] font-body text-[12px] md:text-sm font-normal flex flex-col md:flex-row justify-center items-center py-2 px-4 sticky top-0 z-[60]">
        
        <p class="text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <router-link to="/shop" class="font-semibold underline ml-2 cursor-pointer hover:text-gray-300">
                ShopNow
            </router-link>
        </p>

        <div class="flex justify-center items-center mt-2 md:mt-0 md:ml-10 lg:ml-30 cursor-pointer">
            <span>English</span>
            <img src="/src/assets/icons/DropDown (1).svg" alt="dropdown" class="ml-1 w-4 h-4">
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="">
    
</style>