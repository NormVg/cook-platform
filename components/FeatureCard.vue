<script setup>
const props = defineProps({
  head: {
    default: "Code Snippet",
    type: String,
  },
  sub: {
    default:
      "Store, reuse, and share code snippets both locally and publicly. Speed up your coding with ready-made solutions.",
    type: String,
  },
});
</script>

<template>
  <div id="card-feature-box">
    <div id="cf-icon">
      <slot></slot>
    </div>
    <div id="cf-head">{{ props.head }}</div>
    <div id="cf-sub">{{ props.sub }}</div>
  </div>
</template>

<style scoped>
#card-feature-box {
  background-color: var(--bg2);

  border: 1px solid var(--border);
  border-radius: 10px;
  width: 250px;
  aspect-ratio: 300/280;
  padding: 10px;
  padding-top: 30px;
  display: flex;
  justify-content: flex-start;

  align-items: flex-start;
  flex-direction: column;
  gap: 15px;

  transition: all 200ms ease-in-out;
}

#card-feature-box:hover {
  transform: translateY(-5px);
  border: 1px solid var(--white);
}

/* #cf-icon{
  border: 1px solid salmon;
} */

#cf-head {
  /* border: 1px solid salmon; */
  font-size: 25px;
  font-weight: 600;
  color: whitesmoke;
}

#cf-sub {
  /* border: 1px solid salmon; */
  font-size: 15px;
  font-weight: 500;
  font-family: var(--term-font);
}



@media (max-width: 640px) {
  #card-feature-box {
    width: 280px;
  }
}
</style>
