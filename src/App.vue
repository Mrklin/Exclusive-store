<script >
import FooterView from './Components/Universal Comp/FooterView.vue';
import TopHeader from './Components/Universal Comp/TopHeader.vue';
import LandingLayout from './Pages/LandingLayout.vue';
export default {
  components: {
    TopHeader,
    LandingLayout,
    FooterView
  },
}
</script>

<template>

  <div>
    <TopHeader />

    <RouterView />

    <FooterView />
  </div>

  
</template>

<style>

</style>
