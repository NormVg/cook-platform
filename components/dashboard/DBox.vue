<script setup></script>

<template>
  <div id="dash-box">
    <slot> </slot>
  </div>
</template>

<style scoped>
#dash-box {
  height: 100%;

  display: flex;

  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--bg2);
  border: 1px solid transparent;
  transition: all ease-in-out 200ms;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 3px;
}

#dash-box:hover {
  border: 1px solid var(--border);
}
</style>
