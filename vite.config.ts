// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";

const brainDir = "C:/Users/hp/.gemini/antigravity-ide/brain/11f4d6e7-d51a-49f4-bf48-720a4f9d26e8";
const assetMappings = [
  { src: "media_1790690826223.jpg", dest: "ghumans-truck.jpg", sub: ".user_uploaded" },
  { src: "media_1790691365965.jpg", dest: "rooftop-dining.jpg", sub: ".user_uploaded" },
  { src: "farmhouse_pizza_1790664870063.jpg", dest: "food-pizza.jpg" },
  { src: "crispy_veg_burger_1790664893886.jpg", dest: "food-burger.jpg" },
  { src: "paneer_tikka_wrap_1790664916507.jpg", dest: "food-wrap.jpg" },
  { src: "loaded_peri_fries_1790664944726.jpg", dest: "food-fries.jpg" },
  { src: "chocolate_thick_shake_1790664967122.jpg", dest: "food-shake.jpg" },
  { src: "fresh_mint_mojito_1790664989693.jpg", dest: "food-mojito.jpg" },
];

try {
  for (const item of assetMappings) {
    const srcPath = item.sub 
      ? path.join(brainDir, item.sub, item.src)
      : path.join(brainDir, item.src);
    if (fs.existsSync(srcPath)) {
      const publicDest = path.resolve(process.cwd(), "public", item.dest);
      const assetsDest = path.resolve(process.cwd(), "src/assets", item.dest);
      fs.copyFileSync(srcPath, publicDest);
      fs.copyFileSync(srcPath, assetsDest);
    }
  }
  console.log("[ASSETS] Successfully copied all food truck & menu imagery!");
} catch (e) {
  console.error("[ASSETS] Error copying assets:", e);
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

