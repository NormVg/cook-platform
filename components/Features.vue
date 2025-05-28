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
</script>

<template>
  <div id="feature-section">
    <div id="feature-head">FEATURES</div>

    <div id="feature-box">
      <FeatureCard
        head="Code Snippet"
        sub="Store, reuse, and share code snippets both locally and publicly. Speed up your coding with ready-made solutions."
      >
        <SquareDashedBottomCode color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="Templates"
        sub="Save complete project structures or starting points and reuse them anytime. Great for scaffolding and standardization."
      >
        <LayoutPanelTop color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="Custom Commands"
        sub="Define CLI commands specific to a project or available globally. Automate common tasks like builds, cleanup, deployments, etc."
      >
        <Command color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="License Generator"
        sub="Instantly generate open-source licenses for your projects."
      >
        <Scale color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="API Key Manager"
        icon="🔑"
        sub="Securely store, retrieve, and manage API tokens for local or cloud projects."
      >
        <Key  color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="Layers Concept"
        sub="Organize and group commands, templates, and snippets logically using layers (e.g., frontend, backend, utils)."
      >
        <Layers  color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="Hot Reload & Cleanup"
        sub="Reload changes and clean up project cruft from the CLI."
      >
        <ListRestart  color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="Online Sharing"
        sub="Access and share templates, code snippets, and API keys through the platform with ease."
      >
        <Waypoints  color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="Local UI Interface"
        sub="Manage your projects, snippets, and templates effortlessly with an intuitive local user interface."
      >
        <Globe  color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="MCP Server & Integration"
        icon="🧩"
        sub="Connect to MCP (Model Context Protocol) servers for shared workflows, services, and discovery mechanisms. (coming soon)"
      >
        <ServerCrash  color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="Plugin System"
        icon="🔌"
        sub="Extend Cook’s functionality with custom plugins for niche workflows. (coming soon)"
      >
        <Blocks color="#00FF87" size="35" />
      </FeatureCard>

      <FeatureCard
        head="More Coming Soon"
        icon="⏳"
        sub="Stay tuned for more exciting features and updates in the future!"
      >
        <DecimalsArrowRight   color="#00FF87" size="35" />
      </FeatureCard>
    </div>
  </div>
</template>

<style scoped>
#feature-head {
  font-size: 30px;
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
