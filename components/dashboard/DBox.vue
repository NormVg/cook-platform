<script setup>

</script>


<template>

<div id="dash-box">

  <slot>

  </slot>
</div>

</template>


<style scoped>

#dash-box {
  height: 100%;

  display: flex;

  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;


  /* border: 1px solid var(--white); */

  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}


</style>
