## [4.1.8](https://github.com/marslo/ifonts/compare/v4.1.7...v4.1.8) (2026-08-27)

### Others

* **jenkins**, **timestamp**: using `Lekton Nerd Font Mono` font for timestamp in jenkins console output ([7654aca](https://github.com/marslo/ifonts/commit/7654acaf4d1ef384d02e3438187704b9808d5b98))

## [4.1.7](https://github.com/marslo/ifonts/compare/v4.1.6...v4.1.7) (2026-08-26)

### Others

* **git-scm**: add git-scm.com/docs width and font overrides ([088aac2](https://github.com/marslo/ifonts/commit/088aac244a6e2e0d624ae2ca146a833d49a85a70))
  - widen docs wrapper to `85vw`, keep horizontally centered
  - pin toc sidebar width and let content flex to fill remaining space
  - keep wide <pre> code blocks scrolling internally instead of overflowing
  - apply mono fonts to code, pre, and synopsis blocks

## [4.1.6](https://github.com/marslo/ifonts/compare/v4.1.5...v4.1.6) (2026-08-26)

### Bug Fixes

* **releaserc.js**: repair empty commit links and align changelog entries to standard scoped/linked format ([32c7b08](https://github.com/marslo/ifonts/commit/32c7b08e95f63311c840dcff7b344080eaa18b2e))

### Others

* **jenkins**: using different mono fonts for pipeline graph view ([6aa6a10](https://github.com/marslo/ifonts/commit/6aa6a10e6df5f8262cc7bf35f79ecc215a401a0a))

## [4.1.5](https://github.com/marslo/ifonts/compare/v4.1.4...v4.1.5) (2026-08-25)

### Others

* **github:** extend mono font to react diff view and refine code selectors ([243ef73](https://github.com/marslo/ifonts/commit/243ef73b6296a4ac446247e9331d53ace660ad5f))

### CI/CD

* **releaserc.js:** refine changelog rendering with standard scoped/linked commit lines and h1-title reuse ([df11ac7](https://github.com/marslo/ifonts/commit/df11ac7216f9f7d6a96afbe3ba221c4803b31864))

## [4.1.4](https://github.com/marslo/ifonts/compare/v4.1.3...v4.1.4) (2026-08-12)

### Bug Fixes

* fix(claude.ai): fix the claude.ai 85vw dynamic width; and removed the big-mono for `is(code, code *)`

## [4.1.3](https://github.com/marslo/ifonts/compare/v4.1.2...v4.1.3) (2026-07-31)

### Others

* chore(85vw): extend the page-inner/container(stackoverflow) to 85vw

## [4.1.2](https://github.com/marslo/ifonts/compare/v4.1.1...v4.1.2) (2026-07-29)

### Bug Fixes

* fix(github): align query builder font sizes to fix cursor misalignment in github search/input box

## [4.1.1](https://github.com/marslo/ifonts/compare/v4.1.0...v4.1.1) (2026-07-28)

### Bug Fixes

* fix(ace): stop cursor drift by excluding the ace editor subtree from the global sans rule so its hidden font-measure node matches the mono text

### CI/CD

* ci(releaserc.js): sync up with `$HOME/.releaserc.js`

## [4.1.0](https://github.com/marslo/ifonts/compare/v4.0.4...v4.1.0) (2026-07-01)

### Features

* feat(claude.ai): bump 85vw for claude.ai; and reduce the font size in global settings; bump conventional-changelog-conventionalcommits v10+ for semantic-release

## [4.0.4](https://github.com/marslo/ifonts/compare/v4.0.3...v4.0.4) (2026-06-18)

### fix

* fix: fix jenkins 'inline badge' center vertically; fix h2 in github pages; fix gemini table width

## [4.0.3](https://github.com/marslo/ifonts/compare/v4.0.2...v4.0.3) (2026-05-20)

### style

* style: enlarge chart bubble

### ci

* ci: fix the 'Node.js 20 actions are deprecated' issue in pre-commit workflow
* ci: using .releaserc.js instead of json for commit body generation

## [4.0.2](https://github.com/marslo/ifonts/compare/v4.0.1...v4.0.2) (2026-05-19)

### Others

* **gemini:** widen gemini to 85vw ([9f91c12](https://github.com/marslo/ifonts/commit/9f91c12f7c09a6f2693dfdab1a20242e308a1372))

### Documentation

* fix the typo ([1b5fd2d](https://github.com/marslo/ifonts/commit/1b5fd2d12ba035aefd14471d904563cf10ab9a4e))

## [4.0.1](https://github.com/marslo/global-fonts/compare/v4.0.0...v4.0.1) (2026-05-13)

### Others

* **pypi:** widen pypi package page for 85vw ([8730b50](https://github.com/marslo/global-fonts/commit/8730b50ccfc292a78e17173ecc9a6b01d3372898))

## [4.0.0](https://github.com/marslo/global-fonts/compare/v3.0.58...v4.0.0) (2026-05-13)

### ⚠ BREAKING CHANGES

* refactor the whole structure

Signed-off-by: marslo <marslo.jiao@gmail.com>

### Others

* add pre-commit hook config file ([8490c37](https://github.com/marslo/global-fonts/commit/8490c37835eac865cb64802faf4c3dcba4038a7f))

### Code Refactoring

* [3.1.0] completely refactor the whole style ([4d74fc1](https://github.com/marslo/global-fonts/commit/4d74fc140bcb029c90469139cf3950362e1d85fb))

## [3.0.58](https://github.com/marslo/global-fonts/compare/v3.0.57...v3.0.58) (2026-05-13)

### Others

* [3.0.58] adjust the github pr comments font size ([1f0cf1a](https://github.com/marslo/global-fonts/commit/1f0cf1a9a141b52571ce82abbb3e0eff3ba0971e))
