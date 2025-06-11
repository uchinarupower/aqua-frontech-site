/** @type {import('next').NextConfig} */

// あなたのGitHubリポジトリ名に書き換えてください
const repositoryName = 'aqua-frontech-site';

const nextConfig = {
  output: 'export',
  basePath: `/${repositoryName}`,
  assetPrefix: `/${repositoryName}/`,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;