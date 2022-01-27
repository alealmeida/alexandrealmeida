const path = require('path')
const configs = require('./configs.json');

// const optimizedImages = require('next-optimized-images');
// const withSass = require('@zeit/next-sass');

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: [`${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`],
//   },
// };
// module.exports = withSass({
// /* bydefault config  option Read For More Optios
// here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
// cssModules: true
// });
// module.exports = {
// /* Add Your Scss File Folder Path Here */
// sassOptions: {
// includePaths: [path.join(__dirname, 'styles')],
// },
// trailingSlash: true,
// exportPathMap: async function (
//   defaultPathMap,
//   { dev, dir, outDir, distDir, buildId }
// ) {
//   return {
//     '/about': { page: '/about' },
//     // '/jobs/caixa': { page: '/jobs', query: { slug: 'caixa' } },
//     // '/jobs/pop': { page: '/jobs', query: { slug: 'pop' } },
//   }
// },
// };


// const path = require('path')
// // const withSass = require('@zeit/next-sass');

// // const withPlugins = require("next-compose-plugins");

// // module.exports = {   reactStrictMode: true,   images: {     domains:
// // [`${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`],   }, }; module.exports
// // = {   cssModules: true,   sassOptions: {     includePaths:
// // [path.join(__dirname, 'styles')],   }, } module.exports = { trailingSlash:
// // true, exportPathMap: async function (   defaultPathMap,   { dev, dir, outDir,
// // distDir, buildId } ) {   return {     '/about': { page: '/about' },
// // '/jobs/caixa': { page: '/jobs', query: { slug: 'caixa' } },      '/jobs/pop':
// // { page: '/jobs', query: { slug: 'pop' } },   } }, };

module.exports = {
    target: 'serverless',
    images: {
        domains: configs.STRAPI_DOMAIN,
      },
  reactStrictMode: true, 
  
    cssModules: true,
    webpack: config => {
        // config.resolve.modules.push(path.resolve("./"));
        return config;
    },
    cssModules: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    trailingSlash: true,
    exportPathMap: async function (
        defaultPathMap,
        {dev, dir, outDir, distDir, buildId}
    ) {
        return {
            '/about': {
                page: '/about'
            },
            // '/jobs/caixa': { page: '/jobs', query: { slug: 'caixa' } }, '/jobs/pop': {
            // page: '/jobs', query: { slug: 'pop' } },
        }
    }
};
// module.exports = nextConfig;