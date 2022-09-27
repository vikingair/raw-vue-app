import { createApp } from "vue";
import LifeCycle from "./demos/life-cycle/LifeCycle.vue";
import TheSwapi from "./demos/swapi/TheSwapi.vue";
import App from "./App.vue";
import { createPinia } from "pinia";

const demoType = localStorage.getItem("demo") || "";
const app =
  demoType === "life-cicle" ? LifeCycle : demoType === "swapi" ? TheSwapi : App;

createApp(app).use(createPinia()).mount("#app");
