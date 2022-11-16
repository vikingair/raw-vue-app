<script lang="ts" setup>
import { CSSProperties, ref } from "vue";
import { ArticleData } from "@/services/Webservice";

defineProps<{ data: ArticleData }>();

const zoomStyles: CSSProperties = {
  position: "absolute",
  width: "100%",
  backgroundColor: "#b02786",
  height: "100vh",
  left: 0,
  top: 0,
};

const color = ref("#b02786");
const zoom = ref(false);

const onClick = () => {
  zoom.value = !zoom.value;
};
</script>

<template>
  <div
    class="article"
    :style="zoom ? { ...zoomStyles, backgroundColor: color } : undefined"
  >
    <img
      @click="onClick"
      :src="`https://cdn.pixabay.com/photo${data.cover}`"
      alt="cover"
      :style="{ width: '100%' }"
    />
    <div>Title: {{ data.title }}</div>
    <div>Authors: {{ data.authors }}</div>
    <input v-if="zoom" v-model="color" />
  </div>
</template>
