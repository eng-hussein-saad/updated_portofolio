import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { init } from "@emailjs/browser";

// Initialize EmailJS
// Using public key - this is safe to include in client code
init("C06y_EEaQyrJHQDBZ");

createRoot(document.getElementById("root")!).render(<App />);
