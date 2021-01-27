import { Options, Vue } from "vue-class-component";
import { store } from "@/store";

@Options({})
export class ArticleFilter extends Vue {
  value = "";

  onSubmit = () => store.commit("updateFilter", this.value);
}
