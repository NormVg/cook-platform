<script setup>
// import BasePage from '~/components/BasePage.vue';
import { usePopupStore } from '~/store/popupStore';




const PopStore = usePopupStore();




onMounted(async () => {
  // PopStore.setIsLoadedPop(true);
  PopStore.setIsLoadedPop(false);
})

</script>

<template>
  asd
<!-- <BasePage :isPageFound="true">

</BasePage> -->

</template>


<style scoped>
</style>
