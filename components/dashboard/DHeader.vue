<script setup>
import {PanelLeft} from 'lucide-vue-next';
import { useDashboardStore } from '~/store/dashboardStore';

const dashboardStore = useDashboardStore()

</script>


<template>
<div id="dash-header">


    <PanelLeft color="#a8a7ac" v-if="!dashboardStore.isSidebarOpen" @click="dashboardStore.toggleSidebar()" />
    <PanelLeft color="black" fill="#a8a7ac" v-else  @click="dashboardStore.toggleSidebar()"/>

<div id="nav-links">
  <NuxtLink to="/app" class="nav-link">
    Home
  </NuxtLink>

  <NuxtLink to="/app" class="nav-link">
    Docs
  </NuxtLink>

  <NuxtLink to="/app" class="nav-link">
    Community
  </NuxtLink>
</div>

</div>

</template>


<style scoped>

#dash-header{
  /* width: 100%; */
  height: 40px;
  border: 4px solid var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-right: 10px;
  margin-left: 10px;

  transition: all 200ms ease-in-out;
}

#nav-links {
  display: flex;
  gap: 20px;

}


.nav-link {
  color: var(--white);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition:  all 200ms ease-in-out;
}

.nav-link:hover {
    border-bottom: 2px solid var(--red);

}



.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
