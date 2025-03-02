import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "virtual:uno.css";
import "unocss";
import "@una-ui/preset/una.css";
import router from "./routers";

createApp(App).use(router).mount("#app");
