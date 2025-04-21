/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
    unoptimized: true, // Optional: disables Next's image optimization for external hosts
  },
  // Do NOT include `output: 'export'` if using Clerk (SSR required)
};

export default nextConfig;
