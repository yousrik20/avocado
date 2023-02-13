/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["images.pexels.com","https://avocado.netlify.app/"]
  },
  loader:"imgix",
  path:""
}

module.exports = nextConfig
