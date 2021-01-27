// eslint-disable-next-line
// @ts-ignore
import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";

createApp(App).use(store).mount("#app");
