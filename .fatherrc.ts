import { defineConfig } from "father";

export default defineConfig({
  esm: { output: "dist" },
  umd: {},
  extraBabelPresets: [
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
});
