import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Define a variable to store the beforeinstallprompt event
let deferredPrompt;

// Listen for the beforeinstallprompt event
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the browser's default install prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;

  // You can show a button or UI element to trigger the installation
  showInstallButton();
});

// Function to show an install button
function showInstallButton() {
  // Display a button or UI element that, when clicked, will trigger the installation
  const installButton = document.getElementById("install-button");
  installButton.style.display = "block";

  installButton.addEventListener("click", () => {
    // Check if the deferredPrompt is available
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();

      // Wait for the user's choice (installation or cancellation)
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the PWA installation");
        } else {
          console.log("User declined the PWA installation");
        }

        // Reset the deferredPrompt
        deferredPrompt = null;
      });
    }
  });
}

const app = createApp(App);
app.mount("#app");
