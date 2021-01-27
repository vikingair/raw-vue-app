// eslint-disable-next-line
// @ts-ignore
import { Options, Vue } from "vue-class-component";
import Main from "./components/Main.vue";
import ArticleFilter from "./components/ArticleFilter.vue";

@Options({
  components: {
    Main,
    ArticleFilter,
  },
})
export class App extends Vue {}
