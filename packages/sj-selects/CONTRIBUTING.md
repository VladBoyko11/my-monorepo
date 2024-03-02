# Contributing Guide

## Pull requests
Create a new branch from the `master`.
Perform the work and create a pool request to `master` after the end.
After passing the code review this pool request merges.

Requirements for the pull request:
- semantic commits should be used (see [commits](#commits))
- the code must not contain eslint errors
- all tests must be green

## Commits
In the repository we use and enforce the [commit message conventions](https://www.conventionalcommits.org/en/v1.0.0/).
Use `cz` command ([see more in docs](https://www.npmjs.com/package/commitizen?activeTab=readme)) or build commit message according to the [template](#format-of-the-commit-message).

### Format of the commit message:
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Example commit message:
```
fix(DEV-1): Sprint period is not set after loading preset

changed filter schema field type
```

### Message subject (first line)

The first line cannot be longer than 72 characters and should be followed by a blank line. The type and scope should always be lowercase as shown below.

Allowed `<type>` values:
- feat for a new feature for the user, not a new feature for build script. Such commit will trigger a release bumping a MINOR version.
- fix for a bug fix for the user, not a fix to a build script. Such commit will trigger a release bumping a PATCH version.
- perf for performance improvements. Such commit will trigger a release bumping a PATCH version.
- docs for changes to the documentation.
- style for formatting changes, missing semicolons, etc.
- refactor for refactoring production code, e.g. renaming a variable.
- test for adding missing tests, refactoring tests; no production code change.
- build for updating build configuration, development tools or other changes irrelevant to the user.
- pipe for changes to the pipelines.

Example `<scope>` values:
- DEV-0 (issue key)
- component
- config
- etc.

The <scope> can be empty (e.g. if the change is a global or difficult to assign to a single component), in which case the parentheses are omitted.

### Message body
Just as in the `<subject>`, use the imperative, present tense: "change" not "changed" nor "changes". Message body should include motivation for the change and contrasts with previous behavior.



