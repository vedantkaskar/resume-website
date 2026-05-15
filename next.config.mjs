import { fileURLToPath } from 'node:url';
import path from 'node:path';

/** @type {import('next').NextConfig} */
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  outputFileTracingRoot: __dirname,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
};

export default nextConfig;


