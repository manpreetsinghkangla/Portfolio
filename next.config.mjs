/** Static export: `npm run build` writes a plain HTML site to ./out (works on Hostinger, GitHub Pages, Netlify, Vercel). */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};
export default nextConfig;
