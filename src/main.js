import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the browser's default install prompt
  event.preventDefault();
  // Show your custom install prompt
  showInstallPrompt();
});
const app = createApp(App);
app.mount("#app");
