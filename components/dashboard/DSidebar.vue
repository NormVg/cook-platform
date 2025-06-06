<script setup>
import logo from "~/assets/img/logo.svg";
import { useDashboardStore } from "~/store/dashboardStore";
import { computed } from "vue";

import {
  LayoutPanelTop,
  SquareDashedBottomCode,
  Key,
  Bolt,
  Telescope,
  MessageSquareText,
} from "lucide-vue-next";

const dashboardStore = useDashboardStore();
{
  /* <AlignStartVertical color="#A8A7AC" /> */
}
const cstyle = computed(() => {
  // 'border-bottom: 2px solid var(--red)'

  var d = {
    template: "",
    snippet: "",
    api: "",
    setting: "",
    explore: "",
    feedback: "",
  };

  d[dashboardStore.nowDashboardTab] = "border-bottom: 2px solid var(--red)";

  return d;
});


// const logOutClient = async () => {
// await logOutUser()
// await navigateTo("/")
// }

</script>

<template>
  <Transition name="slide-fade">
    <div id="dash-sidebar" v-if="dashboardStore.isSidebar">
      <div id="title">
        <img :src="logo" alt="cook img" />
        <div>COOK</div>
      </div>

      <div
        class="dash-sidebar-item"
        :style="cstyle['template']"
        @click="dashboardStore.setNowDashboardTab('template')"
      >
        <LayoutPanelTop />
        <div>Template</div>
      </div>

      <div
        class="dash-sidebar-item"
        :style="cstyle['snippet']"
        @click="dashboardStore.setNowDashboardTab('snippet')"
      >
        <SquareDashedBottomCode />
        <div>Snippets</div>
      </div>

      <div
        class="dash-sidebar-item"
        :style="cstyle['api']"
        @click="dashboardStore.setNowDashboardTab('api')"
      >
        <Key />
        <div>API Keys</div>
      </div>

      <div
        class="dash-sidebar-item"
        :style="cstyle['explore']"
        @click="dashboardStore.setNowDashboardTab('explore')"
      >
        <Telescope />
        <div>Explore</div>
      </div>

      <div
        class="dash-sidebar-item"
        :style="cstyle['setting']"
        @click="dashboardStore.setNowDashboardTab('setting')"
      >
        <Bolt />
        <div>Settings</div>
      </div>

      <div
        class="dash-sidebar-item"
        :style="cstyle['feedback']"
        @click="dashboardStore.setNowDashboardTab('feedback')"
      >
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
  font-size: 20px;
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
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-top: 10px;
}

#title div {
  color: var(--green);
}

#dash-sidebar {
  width: 20%;
  /* z-index: 10; */
  height: calc(98vh - 40px);
  /* border: 1px solid var(--white); */
  background-color: var(--bg2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex-direction: column;
  padding: 0 10px;
  padding-top: 10px;
  margin-left: 10px;
  border: 1px solid transparent;
  transition: all ease-in-out 200ms;
}

#dash-sidebar:hover {
  border: 1px solid var(--border);
}

.slide-fade-enter-active {
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
