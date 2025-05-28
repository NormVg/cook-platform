import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard-data', () => {

  const nowDashboardTab = ref('template')

  const isSidebar = ref(true)

  const toggleSideBar = async () => {
    isSidebar.value = !isSidebar.value
  }

  const setNowDashboardTab = async (param) => {
    nowDashboardTab.value = param
    }


  return { nowDashboardTab, setNowDashboardTab, isSidebar,toggleSideBar }
})

