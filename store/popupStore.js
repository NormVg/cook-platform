import { ref } from "vue";
import { defineStore } from "pinia";

export const usePopupStore = defineStore("popup-store-data", () => {
  const isLoadedPop = ref(true);


  const setIsLoadedPop = (param) => {
    isLoadedPop.value = param;
  };

  return {
    isLoadedPop,
    setIsLoadedPop

  };
});
