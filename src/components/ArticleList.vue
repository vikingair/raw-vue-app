<script lang="ts" setup>
import ArticleListItem from "@/components/ArticleListItem.vue";
import { useStore } from "@/store";

const store = useStore();
</script>

<template>
  <Suspense>
    <template #default>
      <div class="article-list">
        <ArticleListItem
          v-for="article in store.articles"
          :data="article"
          :key="article.title"
        />
      </div>
    </template>
    <template #fallback>Spinner</template>
  </Suspense>
</template>
