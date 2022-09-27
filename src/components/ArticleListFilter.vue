<script lang="ts" setup>
import { useStore } from "@/store";
import { ref } from "vue";
import SVGIcon from "@/components/SVGIcon.vue";

const value = ref("");
const store = useStore();
const onSubmit = () => store.updateFilter(value.value);
</script>

<template>
  <div class="article-filter">
    <form @submit.prevent="onSubmit">
      <label>
        <input type="text" v-model="value" placeholder="Filter for..." />
      </label>
      <button><SVGIcon icon="SEARCH" /></button>
    </form>
  </div>
</template>
