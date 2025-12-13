<template>
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
</template>
<script>
import Button from '../Universal Comp/Button.vue';
export default {
    components:{Button},
}
</script>
<style >
    
</style>