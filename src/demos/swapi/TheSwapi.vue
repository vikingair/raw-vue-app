<script setup lang="ts">
// Documentation Page: https://swapi.dev/documentation
import { onMounted, ref, watch } from "vue";
import { SWHomeWorld, SWPeopleResponse, SWPersonT } from "@/demos/swapi/types";
import SWPerson from "@/demos/swapi/SWPerson.vue";

// Tasks:
// 1. Load and display all people from this resource: https://swapi.dev/api/people/
// 2. Create a caching layer
// 3. When hovering a person, then details should be displayed (height and gender)
// 4. Visualize the hair and skin color of the person somehow
// 5. Display the name of the "homeworld" of each person
// 6. On clicking a person, this person should be displayed first

const people = ref<SWPersonT[]>([]);
const homeWorlds = ref<Record<string, SWHomeWorld>>({});

onMounted(async () => {
  const peopleFromStorage = localStorage.getItem("sw-people");
  if (peopleFromStorage) {
    people.value = JSON.parse(peopleFromStorage);
    return;
  }
  const json: SWPeopleResponse = await fetch(
    "https://swapi.dev/api/people/"
  ).then((r) => r.json());
  localStorage.setItem("sw-people", JSON.stringify(json.results));
  people.value = json.results;
});

watch(people, async (ppl) => {
  const homeWorldFromStorage = localStorage.getItem("sw-homeWorlds");
  if (homeWorldFromStorage) {
    homeWorlds.value = JSON.parse(homeWorldFromStorage);
    return;
  }
  const allRequiredWorlds = Array.from(
    new Set(ppl.map(({ homeworld }) => homeworld))
  );
  const allWorldsResponse = await Promise.all(
    allRequiredWorlds.map((world) => fetch(world).then((r) => r.json()))
  );
  const mappedWorlds = Object.fromEntries(
    allWorldsResponse.map((world) => [world.url, world])
  );
  localStorage.setItem("sw-homeWorlds", JSON.stringify(mappedWorlds));
  homeWorlds.value = mappedWorlds;
});

const onClickPerson = (url: string) => {
  const index = people.value.findIndex((p) => p.url === url);
  people.value = [
    people.value[index],
    ...people.value.slice(0, index),
    ...people.value.slice(index + 1),
  ];
};
</script>

<template>
  <div class="swapi">
    <SWPerson
      v-for="p of people"
      :key="p.url"
      :person="p"
      :homeWorld="homeWorlds[p.homeworld]"
      @click="onClickPerson"
    />
  </div>
</template>

<style scoped>
.swapi {
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
