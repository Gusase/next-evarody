/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "yt3.ggpht.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "s4.anilist.co",
      },
    ],
  },
};

module.exports = nextConfig;
