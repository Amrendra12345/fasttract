const path = require("path");
const lang = require("./countyExList_in.json");
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    formats: ["image/webp"],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'ik.imagekit.io',
    //     port: '',
    //     pathname: '/vs4gypuhi/**',
    //   },
    // ],
    // minimumCacheTTL: 60,
  },
  i18n: {
    locales: ["default", ...lang],
    defaultLocale: "default",
    localeDetection: false,
  },
  // productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
