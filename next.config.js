/** @type {import('next').NextConfig} */
const nextConfig = {
  /*reactStrictMode: true,*/

  /** Server Side 에서 StyledComponents 가 작동하도록 함*/
  compiler : {
    styledComponents : true,
  },

  async rewrites() {
    return [
      {
        // axios 에서의 요청 URL 패턴
        source: "/:slug*",
        // 백엔드 URL 패턴
        destination: "http://localhost:3001/:slug*",
      }
    ]
  }
}

module.exports = nextConfig
