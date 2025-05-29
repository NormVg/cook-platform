<template>
  <div class="three-dot-menu">
    <!-- Button -->
    <button class="dot-button" @click="toggle">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="12" cy="5" r="1"></circle>
        <circle cx="12" cy="19" r="1"></circle>
      </svg>
    </button>

    <!-- Menu -->
    <div v-if="isOpen" class="menu" @click.stop>
      <div
        v-for="item in items"
        :key="item.id"
        class="menu-item"
        @click="handleClick(item)"
      >
        {{ item.label }}
      </div>
    </div>

    <!-- Overlay to close menu -->
    <div v-if="isOpen" class="overlay" @click="close"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [
      { id: 'edit', label: 'Edit', action: 'edit' },
      { id: 'duplicate', label: 'Duplicate', action: 'duplicate' },
      { id: 'delete', label: 'Delete', action: 'delete' }
    ]
  }
})

const emit = defineEmits(['action'])

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const close = () => {
  isOpen.value = false
}

const handleClick = (item) => {
  emit('action', item.action)
  close()
}
</script>

<style scoped>
.three-dot-menu {
  position: relative;
}

.dot-button {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
}

.dot-button:hover {
  color: #fff;
  background: #333;
}

.menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 6px;
  min-width: 120px;
  z-index: 1000;
}

.menu-item {
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
}

.menu-item:hover {
  background: #2a2a2a;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>


<!--
<ThreeDotMenu
  :items="[
    { id: 'edit', label: 'Edit', action: 'edit' },
    { id: 'delete', label: 'Delete', action: 'delete' }
  ]"
  @action="handleAction"
/> -->
