import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueLogger from "vuejs3-logger";

import "./index.css";
import { createPinia } from "pinia";

const isProduction = process.env.NODE_ENV === "production";

const options = {
  isEnabled: true,
  logLevel: isProduction ? "error" : "debug",
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: "|",
  showConsoleColors: true,
};

createApp(App)
  .use(VueLogger, options)
  .use(createPinia())
  .use(router)
  .mount("#app");
