<!-- <template >
    <div>
        <button @click="$emit('click', $event)"
        :class="['cursor-pointer transition-colors duration-300 ease-in hover:bg-[#E07575] px-5 ', customClass]">
                    <slot></slot>
        </button>
    </div>
</template> -->

<template>
  <button 
    @click="$emit('click', $event)"
    :class="[
      'cursor-pointer transition-all duration-300 ease-in-out',
      'hover:bg-[#E07575] active:scale-95', 
      'md:px-8 px-3 py-3 text-sm md:text-base font-medium',
      'w-auto text-center',
      customClass
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String,
      default: 'bg-[#DB4444] text-[#FAFAFA] rounded-sm'
    }
  }
}
</script>

<!-- <script>
export default {
    props:{
        customClass:{
            type: String,
            default:'bg-[#DB4444] text-[#FAFAFA] py-3 rounded-sm'
        }
    }
}
</script> -->
<style lang="">
    
</style>