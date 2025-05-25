<!-- <template>
  COOK : LAZY : PLATFORM
</template> -->

<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useSeoMeta({
  ogImage: '/og-img.png',

})

onMounted(()=>{

  document.documentElement.classList.toggle('dark');
})
</script>
