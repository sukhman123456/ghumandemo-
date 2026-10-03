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

  // Copy new fast food hero image
  const curBrainDir = "C:/Users/hp/.gemini/antigravity-ide/brain/3604def3-78b0-438b-99af-50be75794248";
  const newHeroPath = path.join(curBrainDir, "fastfood_hero_feast_1791010913083.jpg");
  if (fs.existsSync(newHeroPath)) {
    fs.copyFileSync(newHeroPath, path.resolve(process.cwd(), "public", "hero-fastfood-feast.jpg"));
    fs.copyFileSync(newHeroPath, path.resolve(process.cwd(), "src/assets", "hero-fastfood-feast.jpg"));
    fs.copyFileSync(newHeroPath, path.resolve(process.cwd(), "public", "hero-punjabi-vegetarian.jpg"));
    fs.copyFileSync(newHeroPath, path.resolve(process.cwd(), "src/assets", "hero-punjabi-vegetarian.jpg"));
  }

  // Copy User's Official Uploaded Logo
  const officialLogoUpload = path.join(curBrainDir, ".user_uploaded", "media_1791015421205.png");
  if (fs.existsSync(officialLogoUpload)) {
    const pubDest1 = path.resolve(process.cwd(), "public", "ghuman-official-logo.png");
    const pubDest2 = path.resolve(process.cwd(), "public", "ghuman-logo.png");
    const assetDest1 = path.resolve(process.cwd(), "src/assets", "ghuman-official-logo.png");
    const assetDest2 = path.resolve(process.cwd(), "src/assets", "ghuman-logo.png");
    fs.copyFileSync(officialLogoUpload, pubDest1);
    fs.copyFileSync(officialLogoUpload, pubDest2);
    fs.copyFileSync(officialLogoUpload, assetDest1);
    fs.copyFileSync(officialLogoUpload, assetDest2);

    const logoBuf = fs.readFileSync(officialLogoUpload);
    const w = logoBuf.readUInt32BE(16);
    const h = logoBuf.readUInt32BE(20);
    const base64 = logoBuf.toString("base64");
    const dataUri = `data:image/png;base64,${base64}`;

    // Generate 100% self-contained circular clipped SVG so browser img tags render without external resource blocking
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="224 0 576 575" width="100%" height="100%">
  <defs>
    <clipPath id="badgePerimeter">
      <circle cx="512" cy="287.5" r="284" />
    </clipPath>
  </defs>
  <g clip-path="url(#badgePerimeter)">
    <image href="${dataUri}" x="0" y="0" width="1024" height="575" preserveAspectRatio="xMidYMid slice" />
  </g>
</svg>`;

    fs.writeFileSync(path.resolve(process.cwd(), "public", "ghuman-logo.svg"), svgContent);
    fs.writeFileSync(path.resolve(process.cwd(), "src/assets", "ghuman-logo.svg"), svgContent);
    fs.writeFileSync(path.resolve(process.cwd(), "public", "favicon.svg"), svgContent);
    console.log(`[ASSETS] Self-contained SVG created with base64 embedded! (${w}x${h})`);
  }

  // Copy unique images for each menu item
  const menuMappings = [
    { src: "menu_farmhouse_pizza_1791011367230.jpg", dest: "menu-pizza-farmhouse.jpg" },
    { src: "menu_paneer_makhani_pizza_1791011425741.jpg", dest: "menu-pizza-paneer-makhani.jpg" },
    { src: "menu_cheese_margherita_1791011452521.jpg", dest: "menu-pizza-margherita.jpg" },
    { src: "menu_aloo_herb_burger_1791011478399.jpg", dest: "menu-burger-aloo-herb.jpg" },
    { src: "menu_paneer_burger_1791011506303.jpg", dest: "menu-burger-paneer-double.jpg" },
    { src: "menu_royal_veg_burger_1791011531553.jpg", dest: "menu-burger-royal-veg.jpg" },
    { src: "menu_paneer_tikka_wrap_1791011555668.jpg", dest: "menu-wrap-paneer-tikka.jpg" },
    { src: "menu_mexican_wrap_1791011814295.jpg", dest: "menu-wrap-mexican-salsa.jpg" },
    { src: "menu_cheesy_fries_1791011845002.jpg", dest: "menu-fries-loaded-cheesy.jpg" },
    { src: "menu_periperi_fries_1791012045584.jpg", dest: "menu-fries-peri-peri.jpg" },
    { src: "menu_belgian_shake_1791012074210.jpg", dest: "menu-shake-belgian-chocolate.jpg" },
  ];

  for (const item of menuMappings) {
    const sPath = path.join(curBrainDir, item.src);
    if (fs.existsSync(sPath)) {
      fs.copyFileSync(sPath, path.resolve(process.cwd(), "public", item.dest));
      fs.copyFileSync(sPath, path.resolve(process.cwd(), "src/assets", item.dest));
    }
  }

  // Cold coffee & Mojito copies
  const publicDir = path.resolve(process.cwd(), "public");
  const assetsDir = path.resolve(process.cwd(), "src/assets");

  if (fs.existsSync(path.join(publicDir, "food-shake.jpg"))) {
    fs.copyFileSync(path.join(publicDir, "food-shake.jpg"), path.join(publicDir, "menu-shake-cold-coffee.jpg"));
    fs.copyFileSync(path.join(publicDir, "food-shake.jpg"), path.join(assetsDir, "menu-shake-cold-coffee.jpg"));
  }

  if (fs.existsSync(path.join(publicDir, "food-mojito.jpg"))) {
    fs.copyFileSync(path.join(publicDir, "food-mojito.jpg"), path.join(publicDir, "menu-drink-mint-mojito.jpg"));
    fs.copyFileSync(path.join(publicDir, "food-mojito.jpg"), path.join(assetsDir, "menu-drink-mint-mojito.jpg"));
  }

  // Kulhad chai download
  const chaiPublic = path.join(publicDir, "menu-drink-kulhad-chai.jpg");
  const chaiAssets = path.join(assetsDir, "menu-drink-kulhad-chai.jpg");
  try {
    const response = await fetch("https://upload.wikimedia.org/wikipedia/commons/9/91/Kulhad_Chai.jpg", {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) GhumanSite/1.0" }
    });
    if (response.ok) {
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(chaiPublic, buffer);
      fs.writeFileSync(chaiAssets, buffer);
      console.log("[ASSETS] Successfully downloaded authentic kulhad chai image!", buffer.length, "bytes");
    }
  } catch (err) {
    console.warn("[ASSETS] Could not fetch online kulhad chai:", err);
  }

  console.log("[ASSETS] Successfully copied all distinct food truck & menu imagery!");
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

