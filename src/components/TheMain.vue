<script lang="ts" setup>
import ArticleList from "@/components/ArticleList.vue";
import { computed, onMounted } from "vue";
import { useStore } from "@/store";
import SVGIcon from "@/components/SVGIcon.vue";

const store = useStore();

onMounted(() => store.loadArticles());

const isLoading = computed(() => !store.articles);
</script>

<template>
  <main v-if="isLoading" class="loading">
    <SVGIcon icon="SPINNER" class="big-spinner" />
  </main>
  <main v-else>
    <ArticleList />
  </main>
</template>
