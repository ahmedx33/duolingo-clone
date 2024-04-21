/** @type {import('next').NextConfig} */
const nextConfig = {
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
