# michaelhsu

> The Michael Hsu CLI

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Usage

```bash
$ npx michaelhsu
```

## Demo

![demo](./docs/demo.gif)

## API

```bash
$ npx michaelhsu --help

The Michael Hsu CLI

Usage:
  $ npx michaelhsu

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

For more information go to https://github.com/evenchange4/michaelhsu
```

## Development

### Requirements

- node 11.6.0
- yarn 1.13.0

```bash
$ yarn install --pure-lockfile
$ ./src/cli
```

## Test

```bash
$ yarn run format
$ yarn run eslint
$ yarn run flow
```

## Publish

```bash
$ npm version patch
$ npm run changelog
git commit & push
```

---

## Inspiration

- https://github.com/sindresorhus/sindresorhus

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.
- Pull requests must be accompanied by passing automated tests (`$ yarn test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[build-badge]: https://travis-ci.com/evenchange4/michaelhsu.svg?branch=master
[build]: https://travis-ci.com/evenchange4/michaelhsu
[npm-badge]: https://img.shields.io/npm/v/michaelhsu.svg?style=flat-square
[npm]: https://www.npmjs.org/package/michaelhsu
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/michaelhsu.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/michaelhsu?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/michaelhsu.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/michaelhsu.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
