<script setup>
import { PanelLeft } from "lucide-vue-next";
import { useDashboardStore } from "~/store/dashboardStore";
import { useUserStore } from "~/store/userStore";

const dashboardStore = useDashboardStore();

const props = defineProps({
  username: {
    default: "TheNormVg",
    type: String,
  },
});

const userDataStore = useUserStore()
</script>

<template>
  <div id="dash-header">
    <div id="dh-username">
      <div @click="dashboardStore.toggleSideBar()">
        <PanelLeft
          v-if="dashboardStore.isSidebar"
          color="#1A1A1A"
          fill="#A8A7AC"
        />
        <PanelLeft v-else color="#A8A7AC" />
      </div>

      {{ userDataStore.currentUsername }}
    </div>

    <div id="nav-links">
      <NuxtLink to="/?next=false" class="nav-link"> Home </NuxtLink>

      <NuxtLink to="/app" class="nav-link"> Docs </NuxtLink>

      <NuxtLink to="/app" class="nav-link"> Community </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
#dash-header {
  /* width: 100%; */
  height: 40px;
  background-color: var(--bg2);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 20px;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px solid transparent;
  transition: all ease-in-out 200ms;
}

#dh-username {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* border: 1px solid saddlebrown; */
}

#dh-username div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
}

#dash-header:hover {
  border: 1px solid var(--border);
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
  transition: all 200ms ease-in-out;
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
