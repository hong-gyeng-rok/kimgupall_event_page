import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    base: "/hong-gyeng-rok.github.io/kimgupall_event_page/",
  };
});
