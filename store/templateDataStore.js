import { ref } from "vue";
import { defineStore } from "pinia";

export const useTemplateStore = defineStore("template-data", () => {
  const userTermplates = ref([]);
  const activeTemplateType = ref({ label: "All", value: "all" });
  const templateTypes = ref([{ label: "All", value: "all" }]);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const setActiveTemplateType = (param) => {
    activeTemplateType.value = { label: capitalize(param), value: param };
  };

  const setUserTermplates = (params) => {
    userTermplates.value = params;

    templateTypes.value = [{ label: "All", value: "all" }]

    userTermplates.value.forEach((element) => {
      if (
        templateTypes.value.some((type) => type.value === element.category)
      ) {
        return;
      }
      templateTypes.value.push({
        label: capitalize(element.category),
        value: element.category,
      });
    });
  };

  const allActiveTemplates = computed(() => {
    if (activeTemplateType.value.value == "all") {

      return userTermplates.value;

    } else {

      const filterdTemplatesTwo = userTermplates.value.filter(
        (element) => element.category === activeTemplateType.value.value
      );

      return filterdTemplatesTwo;
    }
  });

  return {
    userTermplates,
    activeTemplateType,
    templateTypes,
    allActiveTemplates,
    setActiveTemplateType,
    setUserTermplates,
  };
});
