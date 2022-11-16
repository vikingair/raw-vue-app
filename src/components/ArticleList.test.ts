import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/vue";
import { createPinia } from "pinia";
import ArticleList from "./ArticleList.vue";
import { useStore } from "@/store";
import { Webservice } from "@/services/Webservice";
import { Mock } from "@/services/mocks";

describe("ArticleList", () => {
  it("changing the input will be displayed", async () => {
    // given
    vi.spyOn(Webservice, "getArticles").mockResolvedValue(Mock.articles);

    // when
    const { container } = render(ArticleList, {
      global: { plugins: [createPinia()] },
    });

    // then
    expect(container.querySelectorAll(".article").length).toBe(0);

    // when
    const store = useStore();
    await store.loadArticles();

    // then
    expect(container.querySelectorAll(".article").length).toBe(10);
  });
});
