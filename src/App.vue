<script lang="ts" setup>
import ArticleListFilter from "@/components/ArticleListFilter.vue";
import TheMain from "@/components/TheMain.vue";
</script>

<template>
  <div class="App">
    <header>
      <img src="./assets/logo.svg" alt="logo" />
      <ArticleListFilter />
    </header>
    <TheMain />
  </div>
</template>

<style lang="scss">
@use "assets/main";
</style>
