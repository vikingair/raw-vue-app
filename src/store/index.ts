import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { Mock } from "@/services/mocks";

export const useStore = defineStore("store", () => {
  const filter = ref("");

  const updateFilter = (value: string) => {
    filter.value = value;
  };

  const articles = computed(() =>
    Mock.articles.filter(
      (article) => !filter.value || article.title.includes(filter.value)
    )
  );

  return { filter, updateFilter, articles };
});
