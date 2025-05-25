<script setup></script>

<template>
  <div id="feature-section">
    <div id="feature-head">FEATURES</div>

    <div id="feature-box">
      <FeatureCard
        head="Code Snippet"
        icon="📦"
        sub="Store, reuse, and share code snippets both locally and publicly. Speed up your coding with ready-made solutions."
      />

      <FeatureCard
        head="Templates"
        icon="🧱"
        sub="Save complete project structures or starting points and reuse them anytime. Great for scaffolding and standardization."
      />

      <FeatureCard
        head="Custom Commands"
        icon="⚙️"
        sub="Define CLI commands specific to a project or available globally. Automate common tasks like builds, cleanup, deployments, etc."
      />

      <FeatureCard
        head="License Generator"
        icon="📜"
        sub="Instantly generate open-source licenses for your projects."
      />

      <FeatureCard
        head="API Key Manager"
        icon="🔑"
        sub="Securely store, retrieve, and manage API tokens for local or cloud projects."
      />

      <FeatureCard
        head="Layers Concept"
        icon="🧅"
        sub="Organize and group commands, templates, and snippets logically using layers (e.g., frontend, backend, utils)."
      />

      <FeatureCard
        head="Hot Reload & Cleanup"
        icon="🔁"
        sub="Reload changes and clean up project cruft from the CLI."
      />



      <FeatureCard
        head="Online Sharing"
        icon="🌐"
        sub="Access and share templates, code snippets, and API keys through the platform with ease."
      />

      <FeatureCard
        head="Local UI Interface"
        icon="🖥️"
        sub="Manage your projects, snippets, and templates effortlessly with an intuitive local user interface."
      />

      <FeatureCard
        head="MCP Server & Integration"
        icon="🧩"
        sub="Connect to MCP (Model Context Protocol) servers for shared workflows, services, and discovery mechanisms. (coming soon)"
      />

      <FeatureCard
        head="Plugin System"
        icon="🔌"
        sub="Extend Cook’s functionality with custom plugins for niche workflows. (coming soon)"
      />

      <FeatureCard
        head="More Coming Soon"
        icon="⏳"
        sub="Stay tuned for more exciting features and updates in the future!"
      />

    </div>
  </div>
</template>

<style scoped>
#feature-head {
  font-size: 30px;
  color: var(--blue);
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
