<!-- <template>
  COOK : LAZY : PLATFORM
</template> -->

<template>
  <NuxtPage />
  <PopLoaderScreen/>
  <PopDeleteConfirm/>
  <Analytics/>
</template>

<script setup lang="ts">
import PopLoaderScreen from './components/popup/PopLoaderScreen.vue';
import PopDeleteConfirm from './components/popup/PopDeleteConfirm.vue';


import { Analytics } from '@vercel/analytics/nuxt'


useSeoMeta({
  ogImage: 'https://cook.taohq.org/og-img.png',

})


</script>
