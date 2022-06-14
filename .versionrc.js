/**
 * See https://github.com/conventional-changelog/standard-version#configuration
 * and https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md
 */
module.exports = {
  header: '# Changelog\n\n',
  types: [
    { type: 'build', section: 'Build changes' },
    { type: 'chore', section: 'Other changes' },
    { type: 'ci', section: 'CI/CD' },
    { type: 'docs', section: 'Documentation' },
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'perf', section: 'Performance' },
    { type: 'refactor', section: 'Refactor' },
    { type: 'revert', hidden: true },
    { type: 'style', hidden: true },
    { type: 'test', section: 'Testing' },
  ],
};
