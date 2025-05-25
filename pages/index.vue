<script setup lang="ts">

</script>

<template>

<HeroSection/>
<WaitlistSection/>

<FeatureSection/>
<FooterSection/>
</template>


<style scoped>

:root {
  --bg: #111010;
  --white: #a8a7ac;
  --pink: #e56eb2;
  --bg2: #1a1a1a;
  --blue: #b28beb;
  --green: #50fa7b;
  --red: #d86159;
  --yellow: #d6bc7f;

  --font: "JetBrains Mono", "Fira Code", monospace;
}
 

body {
  background-color: var(--bg);
  font-family: var(--font);
  scroll-behavior: smooth;
  color: var(--white);

}

</style>
