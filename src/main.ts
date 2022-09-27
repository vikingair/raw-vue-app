import { createApp } from "vue";
import LifeCycle from "./demos/life-cycle/LifeCycle.vue";
import App from "./App.vue";
import { createPinia } from "pinia";

const app = localStorage.getItem("demo") === "life-cycle" ? LifeCycle : App;

createApp(app).use(createPinia()).mount("#app");
