<script setup lang="ts">
import Icons from "../assets/icon-path.json";

type SVGIconProps = {
  icon: keyof typeof Icons;
  class?: string;
};
const width = 512; // can depend on icon type
const props = defineProps<SVGIconProps>();
</script>

<template>
  <svg class="icon" :class="props.class" :viewBox="`0 0 ${width} 512`">
    <path fill="currentColor" :d="Icons[props.icon]" />
  </svg>
</template>
