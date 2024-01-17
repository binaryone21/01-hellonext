/** @type {import('next').NextConfig} */
const nextConfig = {
  /*reactStrictMode: true,*/

  /** Server Side 에서 StyledComponents 가 작동하도록 함*/
  compiler : {
    styledComponents : true,
  }
}

module.exports = nextConfig
