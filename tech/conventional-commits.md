---
title: Conventional Commits
tags:
  - convention
  - adopt
www: https://www.conventionalcommits.org/en/v1.0.0/#specification
source_code: https://github.com/conventional-commits/conventionalcommits.org
---
The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history, which makes it easier to write automated tools on top of it. This convention dovetails with [[semver]], describing the features, fixes, and breaking changes in commit messages.

## Specification

See the full specifications on the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) website.

```text
<type>[scope]: <description>

[body]

[footer]
```

### Type

The type of change that is being committed using one of the following keys:

- **feat**: A new feature.
- **fix**: A bug fix.
- **perf**: A code change that improves performance.
- **test**: Adding missing tests or correcting existing tests.
- **refactor**: A code change that neither fixes a bug nor adds a feature.

- **build**: Changes that affect the build system or external dependencies.
- **ci**: Changes to our CI configuration files and scripts.

- **style**: Formatting changes that do not affect the meaning of the code.
- **docs**: Documentation only changes.
- **chore**: Other changes that don't modify src or test files.

### Scope

TBD.

### Description

TBD.

### Body

TBD.

### Footer

TBD.
## Examples

Commit message with the description and breaking change footer

```text
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

Commit message with `!` to draw attention to breaking change

```text
feat!: send an email to the customer when a product is shipped
```

Commit message with scope and `!` to draw attention to breaking change

```text
feat(api)!: send an email to the customer when a product is shipped
```

Commit message with both `!` and BREAKING CHANGE footer

```text
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

Commit a message with no body

```text
docs: correct spelling of CHANGELOG
```

Commit message with scope

```text
feat(lang): add Polish language
```

Commit message with multi-paragraph body and multiple footers

```text
fix: prevent racing of requests

Introduce a request ID and a reference to the latest request. Dismiss
incoming responses other than from the latest request.

Remove timeouts that were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: <victor.valle@lkmx.io>
Delta: ∆-0021
```
