/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ["default", "en", "ko"],
        defaultLocale: "default",
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        deviceSizes: [360, 480],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
};
