import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user-store-data", () => {
  const currentUsername = ref();

  const currentCookUserData = ref({})

  const setCurrentCookUserData = (param) => {
    currentCookUserData.value = param;
  };

  const setCurrentUsername = (param) => {
    currentUsername.value = param;
  };

  return {
    currentUsername,
    setCurrentUsername,
    currentCookUserData,
    setCurrentCookUserData,
  };
});
