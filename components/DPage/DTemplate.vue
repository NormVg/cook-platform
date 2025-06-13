<script setup>
import { useTemplateData, useUserAllTemplates } from "~/composable/useTemplateData";
import { useTemplateStore } from "~/store/templateDataStore";
import { useFuse } from "@vueuse/integrations/useFuse";
import { usePopupStore } from "~/store/popupStore";
import { useBucketData } from "~/composable/useBucketData";



const SearchTextFiled = ref("");

const templateStore = useTemplateStore();


const popStore = usePopupStore()
popStore.setIsLoadedPop(true)

const DotMenuOptions = [
  { id: 'open', label: 'Open', action: 'handleOpen' },
  { id: 'share', label: 'Share', action: 'handleShare' },
  { id: 'toggleAccess', label: 'Toggle Access', action: 'handleToggleAccess' },
  { id: 'download', label: 'Download', action: 'handleDownload' },
  { id: 'delete', label: 'Delete', action: 'handleDelete' }
];

function handleOpen(item) {
  // window.location.href = `/template?uid=${item.id}`;

  window.open(`${window.location.origin}/template?uid=${item.id}`, '_blank', 'noopener,noreferrer');

}

function handleShare(item) {
  navigator.clipboard.writeText(`${window.location.origin}/template?uid=${item.id}`);
}




async function handleToggleAccess(item) {
  console.log("doing v1");


  const {updateTemplate} = await useTemplateData()
  await updateTemplate(
    {
      uid:item.id,
      public:!item.public
    }
  )
  console.log("doing v2");

  window.location.reload()


}

async function handleDownload(item) {
  const {downloadBucketFile} = await useBucketData()
  const {response} =  await downloadBucketFile(item.fileID)
  console.log(response.value);

  if (response.value) {
    window.open(response.value, '_blank', 'noopener,noreferrer');
  }
}

async function handleDelete(item) {

  popStore.setDeletePopData({
    head:"Delete Template",
    v1:item.id
  })
  popStore.setIsDeletePop(true)



  while (popStore.deletePopResp === null) {
    console.log('asd');

    await new Promise(resolve => setTimeout(resolve, 100));
  }

  if (popStore.deletePopResp) {
    const {deleteTemplate}  = await useTemplateData()
    await deleteTemplate(item.id)
    console.log("haa bhaai template delete");


    window.location.reload()


  }
  popStore.setDeletePopResp(null)
  popStore.setDeletePopData({
    head:"Delete",
    v1:""
  })
  popStore.setIsDeletePop(false)

}

const handleMenuAction = async ({action,item}) => {
  // console.log(props);


  switch (action) {
    case 'handleOpen':
      handleOpen(item);
      break;
    case 'handleShare':
      handleShare(item);
      break;
    case 'handleToggleAccess':
      await handleToggleAccess(item);
      break;
    case 'handleDownload':
      await handleDownload(item);
      break;
    case 'handleDelete':
      await handleDelete(item);
      break;
    default:
      break;
  }
};




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

  const { templates } = await useUserAllTemplates();

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
            <th>Access</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in CurrentTableData" :key="item">
            <td>
              <a :href="`/template?uid=`+item.id">
                @{{ item.category }}/{{ item.name }}
              </a>
            </td>
            <td>{{ item.stack.join(", ") }}</td>
            <td v-if="item.public" class="access-item-public">public</td>
            <td v-else class="access-item-private">private</td>
            <td class="dtb-btn"><ThreeDotMenu :items="DotMenuOptions" @action="handleMenuAction" :comp="item"/></td>
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

.access-item-public{
  color: var(--green);
}


.access-item-private{
  color: var(--pink);
}

a{
  text-decoration: none;
  border-bottom:1px solid transparent ;

}

a:hover{
  border-bottom:1px solid var(--red) ;
}

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
