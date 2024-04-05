import "@/styles/main.css";
import "@/sidebar";
import "@/modal";

// Display application version
const mode = import.meta.env.MODE;
console.log(`Sandbox Web | ${import.meta.env.VITE_VERSION} | ${mode}`);

// Disable debug logs in production.
if (mode === "production") {
    console.debug = () => undefined;
}
console.debug("Debug logs enabled.");

// TODO: API integration
document.getElementById("pre-loader")!.style.display = "none";
