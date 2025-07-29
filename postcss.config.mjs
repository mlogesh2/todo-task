import tailwind from "@tailwindcss/postcss";

const config = {
  plugins: [tailwind(), require("autoprefixer")],
};

export default config;
