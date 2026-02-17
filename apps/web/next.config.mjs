/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@sonic/ui"],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            }
        ],
    },
};

export default nextConfig;
