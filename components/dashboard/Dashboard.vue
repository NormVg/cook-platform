<script setup>
import DBox from './DBox.vue';
import DHeader from './DHeader.vue';
import DSidebar from './DSidebar.vue';


</script>


<template>

<div id="dashboard" >
  <DSidebar/>

  <div id="dashboard-content">

    <DHeader/>


    <DBox>


      <slot>

      </slot>
    </DBox>

  </div>


</div>

</template>


<style scoped>

#dashboard {
  width: 100%;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  /* gap: 10px; */


  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#dashboard-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}

</style>


