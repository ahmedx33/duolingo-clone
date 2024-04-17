/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "d2pur3iezf4d1j.cloudfront.net",
            },
        ],
    },
};

export default nextConfig;
