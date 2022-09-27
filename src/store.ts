import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { ArticleData, Webservice } from "@/services/Webservice";

export const useStore = defineStore("store", () => {
  const filter = ref("");
  const allArticles = ref<ArticleData[] | undefined>();

  const updateFilter = (value: string) => {
    filter.value = value;
  };

  const loadArticles = () =>
    Webservice.getArticles().then((r) => {
      allArticles.value = r;
    });

  const articles = computed(() =>
    allArticles.value?.filter(
      (article) => !filter.value || article.title.includes(filter.value)
    )
  );

  return { filter, updateFilter, articles, loadArticles };
});
