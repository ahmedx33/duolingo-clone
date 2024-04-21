/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'serverless',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ljfujfxjgcubnqfhhlxe.supabase.co",
            },
        ],
    },
};

export default nextConfig;
