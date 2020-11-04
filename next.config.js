const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     runtimeCaching,
//   },
//   env: {
//     API_URL: 'http://localhost:3000',
//   },
// });

module.exports = {
  env: {
    API_URL: 'http://localhost:3000',
  },
};
