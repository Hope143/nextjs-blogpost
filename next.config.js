// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "blogUser",
        mongodb_password: "rJkXbMQ2uWgmWBGr",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
    };
  }
  return {
    env: {
      mongodb_username: "blogUser",
      mongodb_password: "rJkXbMQ2uWgmWBGr",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
};

//Ang idea dito is yung pagseseparate ng Development phase sa Deployment phase
//So kung PHASE_DEVELOPMENT_SERVER, Ibang server ng database mo matetest yung system mo
//If NOT in phase_development_server naman, is nasa production na yung database na gagamitin mo or ng user mo
