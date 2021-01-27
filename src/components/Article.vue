<template>
  <div class="article">
    <img :src="`https://cdn.pixabay.com/photo${data.cover}`" alt="cover" />
    <div>Title: {{ data.title }}</div>
    <div>Authors: {{ data.authors }}</div>
  </div>
</template>

<script>
import { Article } from "@/components/Article.kern";
export default Article;
</script>
