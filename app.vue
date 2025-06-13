<!-- <template>
  COOK : LAZY : PLATFORM
</template> -->

<template>
  <NuxtPage />
  <PopLoaderScreen/>
  <PopDeleteConfirm/>
</template>

<script setup lang="ts">
import PopLoaderScreen from './components/popup/PopLoaderScreen.vue';
import PopDeleteConfirm from './components/popup/PopDeleteConfirm.vue';





useSeoMeta({
  ogImage: '/og-img.png',

})


</script>
