/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/google564f5cfa33b1770d.html",
        destination: "/api/googleVerification",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
