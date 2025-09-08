# Knip Playground (basic)

Welcome to this Knip playground. There are issues on purpose in this codebase
below so Knip will report various types of issues.

Feel free to (fork this project and) play around!

Run `npm run knip` on this codebase in the terminal below and Knip will report
the following issues:

```bash
$ npm run knip
Unused files (1)
clutter.ts
Unlisted dependencies (2)
lodash                   util.ts
some-unresolved-package  util.ts
Unresolved imports (1)
./unresolved-file  index.ts:1:34
Unused exports (1)
unusedFunction  util.ts:7:14
Configuration hints (1)
index.js    knip.json  Refine entry pattern (no matches)
```

- `clutter.ts` is an unused file, since it's not imported by any of the others
- `lodash` and `some-unresolved-package` are unlisted dependencies, because they're used in `util.ts`, but not listed in `package.json`
- `./unresolved-file` is an unresolved import, because the file doesn't exist
- `unusedFunction` is exported from `util.ts` but it's not imported anywhere, so it's reported as an unused export
- Configuration hints suggest refining entry patterns that don't match any files (like `index.js` which doesn't exist)

For more information about handling these issues, see the [Knip documentation](https://knip.dev/guides/handling-issues).

## GitHub Actions Integration

This playground includes a GitHub Actions workflow that runs knip with the `github-actions` reporter, which provides GitHub annotations for issues found in pull requests. Configuration hints will appear as `::notice` annotations, while other issues appear as `::error` annotations.
