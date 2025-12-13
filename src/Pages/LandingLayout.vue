<template>
    <div class="w-full">
        <Nav />

        <RouterView />
    </div>
</template>
<script>
import { RouterView } from 'vue-router';
import Nav from '@/Components/Universal Comp/NavView.vue';

export default {
   components:{Nav} 
    
}
</script>
<style lang="">
    
</style>