<template >
    <div>
        <button @click="$emit('click', $event)"
        :class="['cursor-pointer transition-colors duration-300 ease-in hover:bg-[#E07575] px-5 ', customClass]">
                    <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    props:{
        customClass:{
            type: String,
            default:'bg-[#DB4444] text-[#FAFAFA] py-3 rounded-sm'
        }
    }
}
</script>
<style lang="">
    
</style>