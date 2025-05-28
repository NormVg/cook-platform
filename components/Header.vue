<script setup>
import logo from "~/assets/img/logo.svg";

// import { scrollToElement } from "~/utils/scrollView.js";
</script>

<template>
  <div id="header-box">
    <img :src="logo" alt="cook logo" />

    <div id="nav-box">
      <div class="nav-item" @click="scrollToElement('#feature-section')">FEATURES</div>

      <div class="nav-item" @click="scrollToElement('#about-box')">ABOUT</div>

      <div class="nav-item loginBtn">LOGIN</div>
    </div>
  </div>
</template>

<style scoped>
#header-box {
  /* border: 1px solid salmon; */
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header-box img {
  height: 50px;
}

#nav-box {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
}

.nav-item{
  padding: 5px 10px;
  transition: 200ms all ease-in-out;
  font-weight: 500;
  cursor: pointer;
}

.nav-item:hover{
  background-color: var(--green);
  color: var(--bg);
}

.loginBtn{
  border: 1px solid var(--green);
  border-radius: 5px;
  color: var(--green);
}


@media (max-width: 640px) {
.nav-item{
  font-size: 14px;
}
}

</style>
