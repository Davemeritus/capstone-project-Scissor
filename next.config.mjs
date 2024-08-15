// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async headers() {
//       return [
//         {
//           source: '/(.*)',
//           headers: [
//             {
//               key: 'Host',
//               value: 'scissors.talut.tech',
//             },
//           ],
//         },
//       ];
//     },
//     // Add this to ensure NextAuth.js can handle the auth routes correctly
//     async rewrites() {
//       return [
//         {
//           source: '/api/auth/:path*',
//           destination: '/api/auth/:path*',
//         },
//       ];
//     },
//   };
  
//   export default nextConfig;

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: '/api/auth/:path*',
//         destination: '/api/auth/:path*', // This rewrite can be retained if needed for auth routes
//       },
//     ];
//   },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "/api/auth/:path*",
      },
    ];
  },
  experimental: {
    serverComponentsExternalPackages: ["pino", "pino-pretty"],
  },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Host',
//             value: 'scissor.talut.tech',
//           },
//         ],
//       },
//     ];
//   },
//   // Add this to ensure NextAuth.js can handle the auth routes correctly
//   async rewrites() {
//     return [
//       {
//         source: '/api/auth/:path*',
//         destination: '/api/auth/:path*',
//       },
//     ];
//   },
// };

// export default nextConfig;