import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SITE_THEME } from "@/config/theme";

document.documentElement.setAttribute("data-site-theme", SITE_THEME);

createRoot(document.getElementById("root")!).render(<App />);
