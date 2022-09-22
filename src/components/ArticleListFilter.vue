<script lang="ts" setup>
import { useStore } from "@/store";
import { ref } from "vue";

const value = ref("");
const { updateFilter } = useStore();
const onSubmit = () => updateFilter(value.value);
</script>

<template>
  <div class="article-filter">
    <form v-on:submit.prevent="onSubmit">
      <label>
        <input type="text" v-model="value" placeholder="Filter for..." />
      </label>
      <button>S</button>
    </form>
  </div>
</template>
