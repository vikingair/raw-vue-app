<script lang="ts" setup>
import {
  ref,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  nextTick,
} from "vue";

const count = ref(0);

type IconButtonEmits = {
  (e: "log", o: { event: string; count?: string | null }): void;
};

const emits = defineEmits<IconButtonEmits>();

const log = (event: string) => {
  emits("log", {
    event,
    count: document.getElementById("special")?.textContent,
  });
};

log("top-level");

onBeforeMount(async () => {
  log("onBeforeMounted");
  await nextTick();
  log("nextTick:onBeforeMounted");
});

onMounted(async () => {
  log("onMounted");
  await nextTick();
  log("nextTick:onMounted");
});

onBeforeUpdate(async () => {
  log("onBeforeUpdate");
  await nextTick();
  log("nextTick:onBeforeUpdate");
});

onUpdated(async () => {
  log("onUpdated");
  await nextTick();
  log("nextTick:onUpdated");
});

onBeforeUnmount(async () => {
  log("onBeforeUnmount");
  await nextTick();
  log("nextTick:onBeforeUnmount");
});

onUnmounted(async () => {
  log("onUnmounted");
  await nextTick();
  log("nextTick:onUnmounted");
});
</script>

<template>
  <button id="special" @click="count++">
    {{ count }}
  </button>
</template>
