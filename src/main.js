import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.scss";
import App from "./App.vue";
import router from "./routes";

// FontAwsome
import "./plugins/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const pinia = createPinia();
const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.use(pinia);
app.mount("#app");
