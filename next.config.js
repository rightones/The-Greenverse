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
};
