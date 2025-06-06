<script setup>
import { SearchSlash } from "lucide-vue-next";
import { useUserAllTemplates } from "~/composable/useTemplateData";
import { useTemplateStore } from "~/store/templateDataStore";
import { useFuse } from "@vueuse/integrations/useFuse";
import { usePopupStore } from "~/store/popupStore";

const SearchTextFiled = ref("");

const popStore = usePopupStore()
popStore.setIsLoadedPop(true)

const templateStore = useTemplateStore();

const CurrentTableData = computed(() => {
  const templates = templateStore.allActiveTemplates;

  const searchList = templates.map((item) => ({
    item,
    searchKey: `@${item.category}/${item.name}`,
  }));

  const searchData = searchList.map((entry) => entry.searchKey);

  const { results } = useFuse(SearchTextFiled.value, searchData);

  const matchedItems = results.value.map((res) => {
    const match = searchList.find((entry) => entry.searchKey === res.item);
    return match?.item;
  });

  if (!SearchTextFiled.value) return templates;

  return matchedItems;
});







onMounted(async () => {

  const { templates, pending } = await useUserAllTemplates();

  templateStore.setUserTermplates(templates.value);
  popStore.setIsLoadedPop(false)

});






const handleSelectionChange = (params) => {
  templateStore.setActiveTemplateType(params.value);
};


</script>

<template>
  <div id="dt-box">
    <div id="dt-head">Temapltes</div>

    <div id="dt-sub">Organize and manage your code templates</div>

    <div id="dt-bar">
      <div id="dtb-search">
        <SearchSlash />
        <input type="text" placeholder="Search..." v-model="SearchTextFiled" />
      </div>

      <div id="dtb-drop">
        <DropDownMenu
          :options="templateStore.templateTypes"
          default-value="all"
          @change="handleSelectionChange"
        />
      </div>
    </div>

    <div id="dt-base">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stack</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in CurrentTableData" :key="item">
            <td>@{{ item.category }}/{{ item.name }}</td>
            <td>{{ item.stack.join(", ") }}</td>
            <td class="dtb-btn"><ThreeDotMenu /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* * {
  border: 1px solid salmon;
} */

#dt-box {
  padding: 5px 20px;
}

#dt-head {
  font-size: 40px;
  color: whitesmoke;
}

#dt-sub {
  font-size: 15px;
  color: var(--white);
}

#dt-base {
  color: var(--white);
  background-color: var(--bg);
  border-radius: 10px;
  height: 350px;
  overflow-y: scroll;
  margin-top: 10px;
  border: 1px solid var(--border);
}

table {
  width: 100%;
  /* height: 100%; */
  border-collapse: collapse;
}

/* thead{
  border: 1px solid salmon;

}

tbody{
  border: 1px solid seagreen;

} */

tr {
  height: 35px;

  border-bottom: 1px solid var(--border);
}

tbody {
  overflow-y: scroll;
}

th {
  text-align: left;
  padding-left: 15px;
  max-height: 35px;
  min-height: 35px;

  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--bg);
}

td {
  height: 40px;

  padding-left: 15px;
}

.dtb-btn-head {
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
}

.dtb-btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
}

#dt-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

#dtb-search {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 7px 10px;
  background-color: var(--bg);
  gap: 10px;

  width: 30%;
}

#dtb-search input {
  background-color: var(--bg);
  border: none;
  width: 100%;
  font-weight: 500;
  color: white;
}

input:focus {
  border: none;
  outline: none;
}
</style>
