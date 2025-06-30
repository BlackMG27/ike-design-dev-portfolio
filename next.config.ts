import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 // DO NOT use output: 'export' - PayloadCMS needs server-side functionality
  
  // Handle images properly with PayloadCMS + Cloudflare Images
  images: {
    domains: [
      'localhost',
      'ikedesigndev.com', // Add your actual domain
      'imagedelivery.net', // Cloudflare Images default domain
      // Add your custom Cloudflare Images domain if you have one
    ],
    // Optional: Configure image sizes for optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
};

export default nextConfig;
