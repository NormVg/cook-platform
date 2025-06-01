<script setup>
import { onMounted } from "vue";
import { redirectToTaoSSO } from "~/utils/ssoClientUtils";

const config = useRuntimeConfig()
const env =  ref(config)

// console.log('Runtime config:', env.value.public.taoAuthCallback)

onMounted(async () => {
  await redirectToTaoSSO(env.value.public.taoAuthToken,env.value.public.taoAuthCallback,env.value.public.taoAuthURL);
});
</script>

<template>LOGIN</template>

<style scoped></style>
