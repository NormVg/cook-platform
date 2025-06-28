<script setup>
import { usePopupStore } from "~/store/popupStore";

const PopStore = usePopupStore();

onMounted(async () => {
  PopStore.setIsLoadedPop(false);
})
</script>

<template>
  <div>

    search cook
  </div>
</template>

<style scoped>
</style>
