import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
    build: {
        minify: 'esbuild',
    },
    plugins: [
        checker({
            typescript: true,
        }),
        analyzer()
    ],
});