import { describe, expect, it } from "vitest";
import { fireEvent, render } from "@testing-library/vue";
import { createPinia } from "pinia";
import ArticleListFilter from "./ArticleListFilter.vue";

describe("ArticleListFilter", () => {
  it("changing the input will be displayed", async () => {
    const { container } = render(ArticleListFilter, {
      global: { plugins: [createPinia()] },
    });

    const input = container.querySelector("input")!;
    expect(input.value).toBe("");

    await fireEvent.update(input, "foo");

    expect(input.value).toBe("foo");
  });
});
