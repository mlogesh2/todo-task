import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true, // required for GitHub Pages routing
  basePath: '/todo-task', // IMPORTANT: match your repo name
  reactStrictMode: true,
};

export default nextConfig;
