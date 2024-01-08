module.exports = {
    extends: ['@commitlint/config-conventional'],
    // Ignore defaults from https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts#L20-L26
    // to have warnings for fixup! etc.
    defaultIgnores: false,
};
