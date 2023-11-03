/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      dangerouslyAllowSVG: true,
      domains: [
        'tailwindui.com',
        'images.unsplash.com',
        'fakestoreapi.com'
        ],
    }
}


module.exports = nextConfig
