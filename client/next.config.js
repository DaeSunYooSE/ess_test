/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: () => ({ // Next Export 에서 사용하는 값
    "/": { page: "/" },
  })
}

export default nextConfig
