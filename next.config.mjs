/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this app (multiple lockfiles exist on the machine).
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
