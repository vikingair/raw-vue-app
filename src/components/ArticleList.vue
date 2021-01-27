<template>
  <div class="article-list">
    <Article v-for="article in articles" :data="article" :key="article.title" />
  </div>
</template>

<script>
import { ArticleList } from "@/components/ArticleList.kern";
export default ArticleList;
</script>
