<script setup lang="ts">
import Dashboard from '~/components/dashboard/Dashboard.vue';
import DApikeys from '~/components/DPage/DApikeys.vue';
import DExplore from '~/components/DPage/DExplore.vue';
import DFeedback from '~/components/DPage/DFeedback.vue';
import DSettings from '~/components/DPage/DSettings.vue';
import DSnippets from '~/components/DPage/DSnippets.vue';
import DTemplate from '~/components/DPage/DTemplate.vue';
import { useDashboardStore } from '~/store/dashboardStore';

const dashboardStore = useDashboardStore()

</script>

<template>
<Dashboard>

<DTemplate v-if="dashboardStore.nowDashboardTab === 'template'"  />
<DSnippets v-if="dashboardStore.nowDashboardTab === 'snippet'"  />
<DApikeys v-if="dashboardStore.nowDashboardTab === 'api'"   />
<DSettings v-if="dashboardStore.nowDashboardTab === 'setting'"  />
<DExplore v-if="dashboardStore.nowDashboardTab === 'explore'"   />
<DFeedback v-if="dashboardStore.nowDashboardTab === 'feedback'"  />


</Dashboard>
</template>
