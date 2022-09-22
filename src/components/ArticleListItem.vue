<script lang="ts" setup>
import { ArticleData } from "@/services/Webservice";

defineProps<{ data: ArticleData }>();
</script>

<template>
  <div class="article">
    <img :src="`https://cdn.pixabay.com/photo${data.cover}`" alt="cover" />
    <div>Title: {{ data.title }}</div>
    <div>Authors: {{ data.authors }}</div>
  </div>
</template>
