<script setup>
import { usePopupStore } from '~/store/popupStore';
import CircleImg from "~/assets/img/circle-bg.png"

const isInitLoad = ref(false);
const PopStore = usePopupStore()
PopStore.setIsLoadedPop(true)
isInitLoad.value = false;

onMounted(() => {
  isInitLoad.value = true;
  PopStore.setIsLoadedPop(false)


});

</script>

<template  >
<div v-if="isInitLoad">

  <img :src="CircleImg" class="img1" alt="">
  <img :src="CircleImg" class="img2" alt="">


  <Header  />
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

img{
  z-index: -10px;
  position: fixed;
  opacity: 0.5;
}

.img1{
  height: 250px;
  right: -125px;
  top: 100px;
  animation: rotate 20s ease-in-out  infinite ;

}


.img2{
  height: 200px;
  left: -80px;
  bottom: -40px;
  animation: rotate 15s ease-in-out  infinite ;

}





@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}

</style>

