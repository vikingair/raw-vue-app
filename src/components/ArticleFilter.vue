<template>
  <div class="article-filter">
    <form v-on:submit.prevent="onSubmit">
      <label>
        <input type="text" v-model="value" placeholder="Filter for..." />
      </label>
      <button>
        S
      </button>
    </form>
  </div>
</template>

<script>
import { ArticleFilter } from "@/components/ArticleFilter.kern";
export default ArticleFilter;
</script>
