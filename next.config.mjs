/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['az', 'en', 'ru'], // The languages you support
    defaultLocale: 'az', // Your default language
    localeDetection: false, 
    // localeDetection: true, // Detect user's language automatically
  },
};

export default nextConfig;
