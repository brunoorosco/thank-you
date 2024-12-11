/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://media.licdn.com/",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
