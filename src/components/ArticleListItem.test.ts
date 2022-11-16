import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/vue";
import ArticleListItem from "./ArticleListItem.vue";

describe("Article", () => {
  it("uses correct image src", () => {
    const { container } = render(ArticleListItem, {
      props: {
        data: { cover: "/foo", title: "test-title", authors: "test-authors" },
      },
    });

    const image = container.querySelector("img")!;
    expect(image.src).toBe("https://cdn.pixabay.com/photo/foo");
  });

  it("changes to zoom mode", async () => {
    // when - initially rendered
    const { container } = render(ArticleListItem, {
      props: {
        data: { cover: "/foo", title: "test-title", authors: "test-authors" },
      },
    });

    // then
    expect(document.querySelector("input")).toBe(null);
    expect(
      (container.children[0] as HTMLDivElement).style.getPropertyValue(
        "background-color"
      )
    ).toBe("");

    // when
    await fireEvent.click(container.querySelector("img")!);

    // then
    expect(document.querySelector("input")).toBeTruthy();
    expect(
      (container.children[0] as HTMLDivElement).style.getPropertyValue(
        "background-color"
      )
    ).toBe("rgb(176, 39, 134)");
  });
});
