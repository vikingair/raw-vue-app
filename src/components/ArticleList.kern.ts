import { Options, Vue } from "vue-class-component";
import { Mock } from "@/services/mocks";
import Article from "@/components/Article.vue";
import { useStore } from "@/store";

@Options({
  components: {
    Article
  }
})
export class ArticleList extends Vue {
  get articles() {
    const filter = useStore().state.filter;
    return Mock.articles.filter(
      article => !filter || article.title.includes(filter)
    );
  }
}
