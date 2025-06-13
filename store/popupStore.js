import { ref } from "vue";
import { defineStore } from "pinia";

export const usePopupStore = defineStore("popup-store-data", () => {
  const isLoadedPop = ref(true);

  const isDeletePop = ref(false);
  const deletePopResp = ref(null)
  const deletePopData = ref({head:"Delete Project",v1:"please type this to delete", })




  const setIsLoadedPop = (param) => {
    isLoadedPop.value = param;
  };

  const setDeletePopData = (param)=>{
    deletePopData.value = param
  }

  const setDeletePopResp = (param)=>{
    deletePopResp.value = param
  }

  const setIsDeletePop = (param) => {
    isDeletePop.value = param;
  };

  return {
    isLoadedPop,
    isDeletePop,
    deletePopResp,
    deletePopData,


    setIsLoadedPop,
    setIsDeletePop,
    setDeletePopResp,
    setDeletePopData,

  };
});
