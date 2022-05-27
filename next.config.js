/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    END_POINT: "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f",
  },
  redirects: async (_) => {
    return [
      {
        source: "/",
        destination: "/applications",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
