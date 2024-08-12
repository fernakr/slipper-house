/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/out',
    output: 'export',
    images: {
        unoptimized: true,
    },    
};

export default nextConfig;
