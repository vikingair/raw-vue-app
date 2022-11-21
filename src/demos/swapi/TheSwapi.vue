<script setup lang="ts">
// Documentation Page: https://swapi.dev/documentation
// Playground Link (empty): https://sfc.vuejs.org/#eNp9VW1v4zYM/iuEPzlAauP28iVLih1wGNYB2wVrt344HwbVZmLd2ZIhysmyIv99pGSndtMtQV5EkxQf8nmk5+R912WHHpNVsqbS6c4Doe87aJTZb4rEU5HcFibP4YMt+xaNV15bA1u1xxXU3ne0ynM6qk5nFR7yaupVGN121nl4Bmt+tb3xWC3B4Q7OsHO2hSLhrYvkh4nj/ePPtsVH6xp2vX/coiNrHl4CstyfOqRMCpvGvd/eTZ2knrnLmOvFZ7QI/uAZcD4o+korSMkrjjpqXwcTvIPSGq9Nj9GozAmsr9EtQti7DD5o6hp1AtU00FhVYQUd2q7B4PBNBn9q6lWj/0HgOKiVdpylAvqqDSdvrAO7C4+6WClxJ2p7DOHfZvBYo4HaHtBpswc1eC0lwkCFXumGgGrbNxU8IVSxHK4irVHvax8226Opxpr59aB5gPAHISjvnX7qPRI358fW9oSyVZEA18VE0J6BJCHuuxesUq1RLY6VF0nNRR9lfBK5A1RlPVQaYr/P4COjbXTJqOcoNF2AvwFCedhpRx46SzqyqzA8ErGELsNGqLW+cObT59v00+dFmOuFfqmikykhXcDmFp4LA0NwdlANT3YD6qi0FzZlMsJteJhKkrN8ARRmnUehsCx44bHlAj3yCmBd6QNjU0QsnSCKoB5p9B27oSgDFEEr5PFCNFkxINJPQhPOkHMKDlnnk8S8JH9ihFTaDqtoyYMp/H/9TpZJJP1Nq7rsCzeD5R3AFsMDVsYqwhdb4P9KZjfqeVeKKL5QZt0+53+Z4+7pFjOk9ubJ2SOh48RFspzkyNnIjLlxgWJCnf/O+cr1Kq+kPXPTGcqod8aAfwcpi2VyNmwiEqHhCohZbPZhVL1rZuuogpkpqmHuxbL8K6hxZhaRvmG+sH1iPfNnXunlSJNaZ4XCtXPk3O9IHZNbKPnMvKa+8SzUCblDJLcnnnTcnMkROk/xf+focO5FHb0wXoQwCGUFW47QhDNlXeQzVeBP7HjvreO7gRM0tlTNsMz26O+Y0anI4mY4FZOoKL2D9Cp+MbLT8W3kDPxy//G3rFOO8A3fkIbZMlYjjI+9etXJKO4d+rJOR+Je32H8m8dN8kjERSZHbJq6cGoIQa1JF3HbGUq+Oq9RLmPxcd56d0olPBtGOmQZUE6fDES6sCNCk2tOGDEZVeDB+V8iUrj0
import { onMounted, ref, watch } from "vue";
import { SWHomeWorld, SWPersonT } from "./types";
import { API } from "./api";
import SWPerson from "./SWPerson.vue";

// Tasks: (start with Task 1 continue with any other)
// 1. Display all loaded people
// 2. Visualize the hair and skin color of the person somehow
// 3. When hovering a person, then details should be displayed (height and gender)
//    Tips: Use attributes "@mouseover" or "title"
// 4. Display the name of the "homeworld" of each person
// 5. On clicking a person, this person should be displayed at first position

const people = ref<SWPersonT[]>([]);
const homeWorlds = ref<Record<string, SWHomeWorld>>({});

onMounted(async () => {
  people.value = await API.loadPeople();
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
