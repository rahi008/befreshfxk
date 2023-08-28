/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

//const nextConfig = {}
//module.exports = nextConfig


 
module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? '/fxnew/' : '',
  images:{
    domains:[
      "localhost",
      "befreshfx.com",
      "/"
    ]
  }
  
}