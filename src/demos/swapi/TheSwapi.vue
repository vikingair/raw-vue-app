<script setup lang="ts">
// Documentation Page: https://swapi.dev/documentation
// Playground Link (empty): https://sfc.vuejs.org/#eNp9VNtu1DAQ/ZVRXjYrbR1xfQgtEoIHirhUFNEHgpCbzG4Mjm15nC5Lu//Ct/BljO1t2dCqlaqNxzNn5sz4zGXxwjlxMWJRF4fUeuUCEIbRgZZmddQUgZrieWOqCl7ZdhzQBBmUNXAiV1hDH4KjuqpoLZ0SHV5U3b5XY9TgrA9wCda8s6MJ2C3A4xK2sPR2gKbg1E3xbM/x9Oy1HfDMes2up2cnaJ3Gj0jOGsJs8WTNp38Qogobh1wnw6RKP0n6QXX6fCDgrZUdSNNBp8hpuQGpNbgEmxFCr4iLIjv69k5O/FvlgArK0CO8ODkGjnEeQ9gAabsGskNANSDNU96HAl56lAFBQivbXpkVd3SDPt0+EnDWo4HeXqCPV5ILiqwWXAzbOwxSaQLq7ag7OMfr2rGDske16kNitELToc8ZHwv4rGiUWv3CiAK9VD550Q9loLXaerDLdJWTxZqxt+sU/kTAq11/ooeRA157N0XPjus4kaaIRmRCO4wU+1TAB86gVcuZpmRil3bJ7uCyVJ5CYwASzGtlAtX5eze3CPfm9MP7mus3FOB7RDoCuZYqwBJD25eze+c1m4vY0bL0czh6Dl5EhHI+56eSpxRfk6IQE3UyyBq0baU+DdbzAxcsheOAQzlbWjtbpFIEhTgytdyUMWCeu88T/Yi53siXEZleBkxBTnrCcoK92seew9XVn98zM2o9Y8TGHFZZjaw9PrAftywgnwAOO3XB3ZZErM/EOkkU+O+Y3TDKDyTBIA0PM2ohnpwlUucaE0LFEBxyWO0B85HChkVBrXXYZUuVTPxdLIos0YNButRF3hiXaXa7CxZgDckSbUnXPMziZjzLNu6Z7ySsX1X8JTzvA1aMQBoOzr1dE8bxNMViD6NiI2vkwKeXzvK5B/M/11u4EXbbmC1TSQtDBGIO+DMtnmjZWy5HmUmUQQ154vxkAEavJ+csxokpi3LqxVL8lhQ4MUdh3mG+Uduedcv/00pvtmSsdVIo3HaebtEUwQtv1FFvN6S/fE2RxfYvdYEfLg==
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
