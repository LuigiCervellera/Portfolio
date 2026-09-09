import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  // Static Single Page App (SPA) mode for instant static CDN deployment on Vercel
  ssr: false,
  presets: [vercelPreset()],
} satisfies Config;


