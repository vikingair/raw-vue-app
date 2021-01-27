// eslint-disable-next-line
// @ts-ignore
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    data: {
      cover: String,
      title: String,
      authors: String,
    },
  },
})
export class Article extends Vue {}
