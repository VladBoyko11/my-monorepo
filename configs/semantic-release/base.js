module.exports = {
  extends: 'semantic-release-monorepo',
  branches: ['main'],
  repositoryUrl: 'https://github.com/VladBoyko11/my-monorepo',
  initialVersion: '0.3.0',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    "@semantic-release/npm",
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}'
      }
    ]
  ]
};
