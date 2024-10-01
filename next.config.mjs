import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    "react-icons/fa": {
      transform: "@react-icons/all-files/fa/{{ member }}",
    },
    "react-icons/bs": {
      transform: "@react-icons/all-files/bs/{{ member }}",
    },
    "react-icons/ai": {
      transform: "@react-icons/all-files/ai/{{ member }}",
    },
  },
  // Your other Next.js config options can go here
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
