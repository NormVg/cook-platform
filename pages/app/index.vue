<script setup lang="ts">
import Dashboard from '~/components/dashboard/Dashboard.vue';
import DApikeys from '~/components/DPage/DApikeys.vue';
import DExplore from '~/components/DPage/DExplore.vue';
import DFeedback from '~/components/DPage/DFeedback.vue';
import DPrompts from '~/components/DPage/DPrompts.vue';
import DSettings from '~/components/DPage/DSettings.vue';
import DSnippets from '~/components/DPage/DSnippets.vue';
import DTemplate from '~/components/DPage/DTemplate.vue';
import { useCheckAndCreateCookUser,useCookUser } from '~/composable/useCookUser';
import { useDashboardStore } from '~/store/dashboardStore';
import { useUserStore } from '~/store/userStore';

const dashboardStore = useDashboardStore()
const userStore = useUserStore()
const {CookUserCheckFlow,} = await useCheckAndCreateCookUser()
const {getCookUser}  = await useCookUser()


onMounted(async () => {
  const userTokenData = await getLocalStorageToken()
  console.log(userTokenData.username);
  userStore.setCurrentUsername(userTokenData.username)
  await CookUserCheckFlow()
  const cookUserData = await getCookUser()
  console.log(cookUserData," cookUserData");

  userStore.setCurrentCookUserData(cookUserData)

})

</script>

<template>
<Dashboard>

<DTemplate v-if="dashboardStore.nowDashboardTab === 'template'"  />
<DSnippets v-if="dashboardStore.nowDashboardTab === 'snippet'"  />
<DApikeys v-if="dashboardStore.nowDashboardTab === 'api'"   />
<DSettings v-if="dashboardStore.nowDashboardTab === 'setting'"  />
<DExplore v-if="dashboardStore.nowDashboardTab === 'explore'"   />
<DFeedback v-if="dashboardStore.nowDashboardTab === 'feedback'"  />

<DPrompts v-if="dashboardStore.nowDashboardTab === 'prompts'"/>
</Dashboard>
</template>
