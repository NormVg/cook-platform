<script setup>
import { useDashboardStore } from "~/store/dashboardStore";
import logo from "~/assets/img/logo.svg";

import { LayoutPanelTop,SquareDashedBottomCode,Key,Bolt,Telescope,MessageSquareText } from "lucide-vue-next";

const dashboardStore = useDashboardStore();

const props = defineProps({
  username: {
    type: String,
    default: "TheNormVg",
  },
});
</script>

<template>
  <Transition name="slide-fade">
    <div id="dash-sidebar" v-if="dashboardStore.isSidebarOpen">
      <div id="title">
        <img :src="logo" alt="cook img" />
        <div>{{ props.username }}</div>
      </div>



      <div class="dash-sidebar-item" @click="">
        <LayoutPanelTop />
        <div>Template</div>
      </div>

      <div class="dash-sidebar-item" @click="">
        <SquareDashedBottomCode />
        <div>Snippets</div>
      </div>

      <div class="dash-sidebar-item" @click="">
        <Key />
        <div>API Keys</div>
      </div>

      <div class="dash-sidebar-item" @click="">
        <Bolt />
        <div>Settings</div>
      </div>

      <div class="dash-sidebar-item" @click="">
        <Telescope />
        <div>Explore</div>
      </div>

      <div class="dash-sidebar-item" @click="">
        <MessageSquareText />
        <div>Feedback</div>
      </div>


    </div>
  </Transition>
</template>

<style scoped>
.dash-sidebar-item {
  width: max-content;
  height: max-content;
  padding: 5px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10px;
  cursor: pointer;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  align-self: flex-start;
}

.dash-sidebar-item:hover {
  border-bottom: 2px solid var(--red);
}

#title img {
  width: 20px;
}

#title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}

#dash-sidebar {
  width: 20%;
  height: calc(98vh - 40px);
  border: 4px solid var(--white);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex-direction: column;
  padding: 0 10px;
  padding-top: 10px;
  margin-left: 10px;
}

.slide-fade-enter-active {
  /* transition: all 0.3s ease-out; */
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
