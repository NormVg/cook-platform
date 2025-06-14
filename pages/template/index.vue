<script setup>
import { usePopupStore } from "~/store/popupStore";
import logo from "~/assets/img/logo.svg";
import { SearchSlash, Link, Copy, Star, Download,EqualNot } from "lucide-vue-next";

import "~/assets/github-markdown-dark.css";
import MarkdownRender from "~/components/MarkdownRender.vue";
import { useTemplateData } from "~/composable/useTemplateData";
import { useFuse } from "@vueuse/integrations/useFuse";

const SearchTextFiled = ref("");
const isSearchResult = ref(false);

const route = useRoute();
const Router = useRouter();

const PopStore = usePopupStore();

const isTemplateFound = ref(true);

const templateData = ref({
  name: "",
  version: "",
  author: "",
  publish: "",
  category: "",
  stack: [],
  github: "",
  stars: 0,
  downloads: 0,
  info: "",
  public: false,
  date: "",
  fileID: "",
  id: "",
});

const allTemplates = ref([]);

const filteredTemplates = computed(() =>
  searchTemplatesByIdAndStack(SearchTextFiled.value, allTemplates.value)
);

function monthsAgo(dateString) {
  const inputDate = new Date(dateString);
  const now = new Date();

  const yearsDiff = now.getFullYear() - inputDate.getFullYear();
  const monthsDiff = now.getMonth() - inputDate.getMonth();

  let totalMonths = yearsDiff * 12 + monthsDiff;

  // If the day in the current month is less than the input date's day, subtract one month
  if (now.getDate() < inputDate.getDate()) {
    totalMonths -= 1;
  }

  return totalMonths <= 0
    ? "0 months ago"
    : `${totalMonths} month${totalMonths > 1 ? "s" : ""} ago`;
}

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

const onInputSearch = async () => {
  const { getAllTemplates } = await useTemplateData();

  const { response } = await getAllTemplates();

  allTemplates.value = response.value;
  console.log(response.value, "all templates");

  isSearchResult.value = true;
};

const loadTemplateData = async () => {
  const { getTemplateData } = await useTemplateData();

  console.log(route.query.uid);
  const { response } = await getTemplateData(route.query.uid);

  if (response.value && Object.keys(response.value).length === 0) {
    isTemplateFound.value = false;
    console.log("not found");
  } else {
    isTemplateFound.value = true;
  }

  templateData.value = response.value;

  console.log(response.value, "templatea-data");
};

function copyText(text) {
  navigator.clipboard.writeText(text);
}

onMounted(async () => {
  await loadTemplateData();
  PopStore.setIsLoadedPop(false);
});
</script>

<template>
  <div id="template-header">
    <div id="th-brand">
      <div>
        <img :src="logo" alt="" />
        COOK
      </div>
    </div>

    <div id="nav-links">
      <NuxtLink to="/?next=false" class="nav-link"> Home </NuxtLink>

      <NuxtLink to="/app" class="nav-link"> Docs </NuxtLink>

      <NuxtLink to="/app" class="nav-link"> Community </NuxtLink>
    </div>
  </div>
  <div id="temp-box">
    <div id="main-box" v-if="!isTemplateFound" class="not-found-box">

      <EqualNot size="60px" color="#c63c3c"/>

      <div class="not-found-title">Template Not Found</div>
      <div class="not-found-desc">
        The template you are looking for does not exist or has been removed.
      </div>
      <NuxtLink to="/?next=false" class="not-found-link">
        Go back to Home
      </NuxtLink>
    </div>

    <div id="main-box" v-if="isTemplateFound">
      <div id="dtb-search">
        <SearchSlash />
        <input
          type="text"
          placeholder="Search..."
          v-model="SearchTextFiled"
          @focus="onInputSearch()"
          @keydown.esc="isSearchResult = false"
        />
      </div>
      <Transition>
        <div id="search-item-box" v-if="isSearchResult">
          <div
            class="sib-item"
            v-for="template in filteredTemplates"
            :key="template"
          >
            <div>
              <a :href="`/template?uid=` + template.id">
                {{ template.id }}65
              </a>
            </div>
            <div>
              <span
                class="ib-card"
                v-for="item in template.stack"
                :key="item"
                >{{ item }}</span
              >
            </div>
          </div>
        </div>
      </Transition>

      <div id="mb-head">
        {{ templateData.name }}
        <!-- <Star size="18px" /> -->
      </div>

      <div id="mb-uuid">
        <div>{{ templateData.id }}</div>
        <span @click="copyText(templateData.id)">
          <Copy color="#FFFFFF" size="18px" />
        </span>
      </div>

      <div id="mb-status">
        <span id="mbs-version">{{ templateData.version }}</span>
        •
        <span id="mbs-public">{{
          templateData.public ? "public" : "private"
        }}</span>
        •
        <span id="mbs-time">Published {{ monthsAgo(templateData.date) }}</span>
      </div>

      <div class="line"></div>
      <span id="markdown-box">
        <MarkdownRender :md="templateData.info" />
      </span>
    </div>

    <div id="info-box" v-if="isTemplateFound">
      <div class="ib-head">Template Information</div>

      <div class="ib-info">
        version:
        <span class="ib-text">{{ templateData.version }}</span>
      </div>

      <div class="ib-info">
        author:
        <span class="ib-text">{{ templateData.author }}</span>
      </div>

      <div class="ib-info">
        publish:
        <span class="ib-text">{{ templateData.date }}</span>
      </div>

      <div class="ib-info">
        category:
        <span class="ib-text">{{ templateData.category }}</span>
      </div>

      <div class="ib-info-card">
        stack:
        <span class="ib-card" v-for="item in templateData.stack" :key="item">{{
          item
        }}</span>
      </div>

      <div class="ib-info github-card">
        <NuxtLink :to="templateData.github">
          <Link color="#00FF87" size="15px" />
          <span class="ib-text"> GitHub Repository </span>
        </NuxtLink>
      </div>

      <div class="ib-head">Stats</div>

      <div class="ib-info">
        <Download size="18" /> downloads:
        <span class="ib-text">{{ templateData.downloads }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.not-found-box {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  min-height: 400px;
  border-radius: 10px;
  padding: 40px 20px;
  margin: 30px auto;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
}

.not-found-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--red);
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
}

.not-found-desc {
  color: #aaa;
  font-size: 1.1rem;
  margin-bottom: 25px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.not-found-link {
  color: var(--green);
  font-weight: 600;
  text-decoration: underline;
  font-size: 1rem;
  margin-top: 10px;
  transition: color 0.2s;
  text-align: center;
  display: block;
  width: 100%;
  transition: all ease-in-out 400ms;
}

.not-found-link:hover {
  color: #ff5c5c;
}

.sib-item div {
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  width: max-content;
  overflow: hidden;
  /* border: 1px solid salmon; */
}

.sib-item {
  height: 40px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}

#search-item-box {
  height: 300px;
  background-color: var(--bg);
  border-radius: 5px;
  border: 1px solid var(--border);
  overflow-y: auto;
}

#markdown-box {
  /* border: 1px solid salmon; */
  width: 95%;
  margin-left: 25px;
}

.line {
  border-bottom: 1px solid var(--border);
  margin-top: 20px;
}

#mb-head {
  font-size: 43px;
  margin-left: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
}

#mb-uuid div {
  color: whitesmoke;
}

#mb-uuid span:active {
  scale: 0.9;
}

#mb-uuid {
  margin-left: 25px;

  font-size: 23px;
  border: 1px solid var(--border);
  background-color: var(--bg);
  border-radius: 7px;
  padding: 5px 10px;
  width: max-content;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

#mb-status {
  margin-left: 25px;
}

#mbs-public {
  color: var(--green);
}

a {
  text-decoration: none;
}
.github-card:hover {
  border-bottom: 1px solid var(--green);
}

.ib-info {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: max-content;
  border-bottom: 1px solid transparent;
}

.ib-text {
  color: var(--green);
}

.ib-info-card {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.ib-card {
  background-color: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 1px 7px;
  font-size: 13px;
  color: whitesmoke;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  height: max-content;
  width: max-content;
}
.ib-head {
  color: whitesmoke;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
}

#main-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: stretch;
  /* border: 1px solid salmon; */
}

#info-box {
  /* height: 100%; */
  min-height: calc(97vh - 80px);

  width: 325px;
  background-color: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
}

#template-header {
  /* width: 100%; */
  height: 40px;
  background-color: var(--bg2);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 20px;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px solid transparent;
  transition: all ease-in-out 200ms;
}

#th-brand {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* border: 1px solid saddlebrown; */
}

#th-brand img {
  height: 35px;
}

#th-brand div {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--green);
  font-weight: 500;
  gap: 10px;
}

#template-header:hover {
  border: 1px solid var(--border);
}

#nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: var(--white);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 200ms ease-in-out;
}

.nav-link:hover {
  border-bottom: 2px solid var(--red);
}

/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */

#temp-box {
  min-height: calc(97vh - 80px);

  display: flex;

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  border-radius: 10px;
  background-color: var(--bg2);
  border: 1px solid transparent;
  transition: all ease-in-out 200ms;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 3px;
  /* overflow-y: auto; */
}

#temp-box:hover {
  border: 1px solid var(--border);
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

  /* width: 90%; */
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

.v-enter-active,
.v-leave-active {
  transform: scaleY(1);
  transition: all 400ms ease-in-out;
  transform-origin: top;
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(10px);
  transform: scaleY(0);
}
</style>
