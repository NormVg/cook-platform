<script setup>
import { usePopupStore } from '~/store/popupStore';


const isInitLoad = ref(false);
const PopStore = usePopupStore()
PopStore.setIsLoadedPop(true)
isInitLoad.value = false;

onMounted(() => {
  setTimeout(() => {
    isInitLoad.value = true;
    PopStore.setIsLoadedPop(false)
  }, 1500);
});

</script>

<template  >
<div v-if="isInitLoad">

  <Header />
  <Hero/>
  <Waitlist/>
  <Features/>
  <About/>
  <Footer/>

  <CustomCursor />

</div>
</template>

<style scoped>
* {
cursor: none;
}
</style>

