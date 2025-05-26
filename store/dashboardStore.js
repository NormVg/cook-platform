import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard-data', () => {

  const isSidebarOpen = ref(false)


  const setSidebarOpen = (value) => {
    isSidebarOpen.value = value
  }

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  return { isSidebarOpen, setSidebarOpen, toggleSidebar }
})

