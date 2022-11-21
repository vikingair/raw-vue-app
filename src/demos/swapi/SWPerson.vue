<script setup lang="ts">
import { SWHomeWorld, SWPersonT } from "./types";

type SWPersonProps = { person: SWPersonT; homeWorld?: SWHomeWorld };
const props = defineProps<SWPersonProps>();

type SWPersonEmits = { (e: "click", url: string): void };
const emits = defineEmits<SWPersonEmits>();

const getColor = (c: string): string => {
  if (c === "light") return "#a9907e";
  if (c === "white") return "#dadada";
  if (c === "fair") return "#a38c7d";
  if (c === "blond") return "#baa865";
  if (c === "brown") return "#5a4523";
  if (c === "auburn") return "#af8849";
  if (c === "n/a" || c === "none") return "transparent";
  if (c.includes(","))
    return c
      .split(",")
      .map((c) => c.trim())
      .map(getColor)
      .join(", ");
  return c;
};
</script>

<template>
  <div
    @click="emits('click', props.person.url)"
    role="button"
    :style="{
      backgroundImage: `linear-gradient(${getColor(
        props.person.hair_color
      )}, ${getColor(props.person.skin_color)})`,
    }"
    class="sw-person"
    :title="`Height: ${props.person.height}, Gender: ${props.person.gender}`"
  >
    {{ props.person.name }} - coming from {{ props.homeWorld?.name }}
  </div>
</template>

<style scoped>
.sw-person {
  padding: 0.5em;
  cursor: pointer;
}
</style>
