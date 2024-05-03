/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.googleusercontent.com",
      },
      {
        hostname: "branchhub.s3.amazonaws.com",
      },
      {
        hostname: "i.ibb.co",
      },
    ],
  },
};

module.exports = nextConfig;
