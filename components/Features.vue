<script setup>
import {
  SquareDashedBottomCode,
  LayoutPanelTop,
  Command,
  Scale,
  Key,
  Layers,
  ListRestart,
  Waypoints,
  Globe,
  ServerCrash,
  Blocks,DecimalsArrowRight
} from "lucide-vue-next";
import { motion,AnimatePresence } from "motion-v";

const iconMap = {
  SquareDashedBottomCode,
  LayoutPanelTop,
  Command,
  Scale,
  Key,
  Layers,
  ListRestart,
  Waypoints,
  Globe,
  ServerCrash,
  Blocks,
  DecimalsArrowRight
};

const data= [
  {
    "head": "Code Snippet",
    "sub": "Store, reuse, and share code snippets both locally and publicly. Speed up your coding with ready-made solutions.",
    "icon": "SquareDashedBottomCode",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "Templates",
    "sub": "Save complete project structures or starting points and reuse them anytime. Great for scaffolding and standardization.",
    "icon": "LayoutPanelTop",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "Custom Commands",
    "sub": "Define CLI commands specific to a project or available globally. Automate common tasks like builds, cleanup, deployments, etc.",
    "icon": "Command",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "License Generator",
    "sub": "Instantly generate open-source licenses for your projects.",
    "icon": "Scale",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "API Key Manager",
    "sub": "Securely store, retrieve, and manage API tokens for local or cloud projects.",
    "icon": "Key",
    "emoji": "🔑",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "Layers Concept",
    "sub": "Organize and group commands, templates, and snippets logically using layers (e.g., frontend, backend, utils).",
    "icon": "Layers",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "Hot Reload & Cleanup",
    "sub": "Reload changes and clean up project cruft from the CLI.",
    "icon": "ListRestart",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "Online Sharing",
    "sub": "Access and share templates, code snippets, and API keys through the platform with ease.",
    "icon": "Waypoints",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "Local UI Interface",
    "sub": "Manage your projects, snippets, and templates effortlessly with an intuitive local user interface.",
    "icon": "Globe",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "MCP Server & Integration",
    "sub": "Connect to MCP (Model Context Protocol) servers for shared workflows, services, and discovery mechanisms. (coming soon)",
    "icon": "ServerCrash",
    "emoji": "🧩",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "Plugin System",
    "sub": "Extend Cook’s functionality with custom plugins for niche workflows. (coming soon)",
    "icon": "Blocks",
    "emoji": "🔌",
    "color": "#00FF87",
    "size": 35
  },
  {
    "head": "More Coming Soon",
    "sub": "Stay tuned for more exciting features and updates in the future!",
    "icon": "DecimalsArrowRight",
    "emoji": "⏳",
    "color": "#00FF87",
    "size": 35
  }
]


</script>
<template>
  <div id="feature-section">
    <motion.div id="feature-head"
    :initial="{ opacity: 0, y: 100, scale: 0.8, filter: 'blur(15px)' }"
    :while-in-view="{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }"

    :transition="{ type: 'spring', stiffness: 120, damping: 14 }"
    :in-view-options="{ once: true }"
    >FEATURES</motion.div>

    <div id="feature-box">

      <FeatureCard
        v-for="feature,index in data"
        :key="feature.head"
        :head="feature.head"
        :sub="feature.sub"
        :index="index"
      >
        <component :is="iconMap[feature.icon]" color="#00FF87" size="35" />
      </FeatureCard>




    </div>
  </div>
</template>

<style scoped>
#feature-head {
  font-size: 30px;
  margin-bottom: 100px;
}

#feature-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#feature-box {
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  #feature-section {
    margin-top: 150px;
  }

  #feature-head {
    font-size: 25px;
  }
}
</style>
