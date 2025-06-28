import { useFuse } from "@vueuse/integrations/useFuse";

export const useSearchTemplate = async () => {

  const SearchTextFiled = ref("")

  function searchTemplatesByIdAndStack(query, data) {
    const lowerQuery = query.toLowerCase().trim();

    if (lowerQuery === "") {
      return data;
    }

    var tempData = [];

    data.forEach((element) => {
      tempData.push(`${element.id}   ${element.stack.join(" ")}`);
      console.log(`${element.id}   ${element.stack.join(" ")}`);
    });

    const { results } = useFuse(query, tempData);

    var finalData = [];

    console.log(results.value);

    results.value.forEach((element) => {
      finalData.push(data[element.refIndex]);
    });

    return finalData;
  }


  const filteredTemplates = computed(() =>
    searchTemplatesByIdAndStack(SearchTextFiled.value, allTemplates.value)
  );


  function setSearchTextFiled(value) {
    SearchTextFiled.value = value;
  }

  return {
    SearchTextFiled,
    setSearchTextFiled,
    filteredTemplates
  };

}
