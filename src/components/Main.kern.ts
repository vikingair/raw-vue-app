import { Options, Vue } from "vue-class-component";
import ArticleList from "@/components/ArticleList.vue";

@Options({
  components: {
    ArticleList
  }
})
export class Main extends Vue {}
