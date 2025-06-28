<!-- 👇 Reusable Card Component -->
<template id="ExploreCard">
  <div class="explore-card">
    <div class="explore-card-title">{{ props.title }}</div>
    <div class="explore-card-desc">{{ props.desc }}</div>
    <div class="explore-card-tag">{{ props.tag }}</div>
  </div>
</template>

<script setup>
const props =  defineProps({
  title: String,
    desc: String,
    tag: String,
})
</script>

<style scoped>

/* Card */
.explore-card {
  min-width: 250px;
  padding: 20px;
  background-color: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-card:hover {
  border-color: var(--green);
  transform: translateY(-3px);
}

.explore-card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
}

.explore-card-desc {
  font-size: 14px;
  color: var(--fg2);
  margin-bottom: 10px;
}

.explore-card-tag {
  font-size: 12px;
  color: var(--green);
  background-color: #00ff871a;
  padding: 3px 10px;
  border-radius: 6px;
  width: fit-content;
  font-family: var(--font-k2d);
}
</style>
