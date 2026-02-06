<!-- <template>
    <div class="max-w-360 mx-auto">
        <section class="px-30 pb-20 mt-15">
            <div class="flex flex-col gap-2">
                <div class="w-full flex justify-start items-center [&_p]:text-black/50">
                        <p>Home / <span class="text-black">Cart</span></p>
                </div>
                <div class="flex flex-col justify-center items-center my-15 gap-8">
                    <p class="text-6xl font-fancy font-semibold">404 Page Not Found</p>
                    <p >Your visited page was not found. You may go back to the home page</p>
                </div>

                
                    <Button class="self-center">
                        <router-link :to="{name:'landing'}" class="w-full justify-center items-center">
                            Back to home page
                        </router-link>
                    </Button>
                
                
            </div>
        
        </section>
    </div>
</template> -->

<template>
    <div class="max-w-[1440px] mx-auto overflow-hidden">
        
        <section class="px-5 md:px-10 lg:px-20 py-10 mt-5">
            <div class="w-full flex justify-start items-center text-sm">
                <p class="text-black/50">Home / <span class="text-black font-medium">404 Error</span></p>
            </div>
        </section>

        <section class="px-5 md:px-10 lg:px-20 pb-20 md:pb-40">
            <div class="flex flex-col justify-center items-center text-center gap-6 md:gap-10 mt-10 md:mt-20">
                
                <h1 class="text-5xl md:text-7xl lg:text-9xl font-fancy font-semibold tracking-wider">
                    404 Not Found
                </h1>

                <p class="text-sm md:text-base max-w-md leading-relaxed">
                    Your visited page not found. You may go home page.
                </p>

                <div class="mt-4">
                    <Button>
                        <router-link :to="{name:'landing'}" class="px-10 block">
                            Back to home page
                        </router-link>
                    </Button>
                </div>
                
            </div>
        </section>
    </div>
</template>

<script>
import Button from '../Universal Comp/Button.vue';
export default {
    components:{Button},
}
</script>
<style >
    
</style>