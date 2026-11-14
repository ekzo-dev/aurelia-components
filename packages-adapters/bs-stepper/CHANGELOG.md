# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.7.3](https://github.com/ekzo-dev/aurelia-components/compare/@ekzo-dev/bs-stepper@1.7.2...@ekzo-dev/bs-stepper@1.7.3) (2026-11-14)

### Bug Fixes

- **bs-stepper:** keep steps in document order, not in the order they attach. A step registered itself when it attached, which happens only after all of its content has, so a step holding an asynchronously attaching component came after the steps following it: the header showed them reversed, the stepper opened on the wrong step and `previous()` could not reach the first one. A step is now inserted at its place in the document; its element is exposed as `host`.

# [1.7.0](https://github.com/ekzo-dev/aurelia-components/compare/@ekzo-dev/bs-stepper@1.7.0-rc.0...@ekzo-dev/bs-stepper@1.7.0) (2023-11-08)

**Note:** Version bump only for package @ekzo-dev/bs-stepper

# 1.7.0-rc.0 (2023-11-06)

### Features

- **bootstrap:** change button from custom element to custom attribute ([e31b996](https://github.com/ekzo-dev/aurelia-components/commit/e31b996f88a5c954a1448006593a7f693e91b6f0))
- **eslint-plugin-eslint-config:** lint packages-adapters ([e2bbe4d](https://github.com/ekzo-dev/aurelia-components/commit/e2bbe4d0d3ff8449191861396e0db743935a5035))
- **eslint-plugin-eslint-config:** revert lint fix ([4b22cb8](https://github.com/ekzo-dev/aurelia-components/commit/4b22cb80c1e38a5e6bc13d05c804941830606823))
- **eslint-plugin-eslint-config:** update rules ([7031bfe](https://github.com/ekzo-dev/aurelia-components/commit/7031bfe1b1c5cab9ab283689b644b7758957e1ff))
- **lint:** add lint for css and html ([40bfdd7](https://github.com/ekzo-dev/aurelia-components/commit/40bfdd7122637e7e32659f1a9db233afb4bf3622))
