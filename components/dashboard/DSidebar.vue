<script setup>
import logo from "~/assets/img/logo.svg";

import { LayoutPanelTop,SquareDashedBottomCode,Key,Bolt,Telescope,MessageSquareText } from "lucide-vue-next";


</script>

<template>
    <div id="dash-sidebar" >
      <div id="title">
        <img :src="logo" alt="cook img" />
        <div>COOK</div>
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

#title div{
  color: var(--green);

}

#dash-sidebar {
  width: 20%;
  height: calc(98vh - 40px);
  /* border: 1px solid var(--white); */
  background-color: var(--bg2 );
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

#dash-sidebar:hover{
  border: 1px solid var(--border);

}

</style>
