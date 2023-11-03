/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      domains: [
        'tailwindui.com',
        'images.unsplash.com',
        'fakestoreapi.com'
        ],
    }
}


module.exports = nextConfig
