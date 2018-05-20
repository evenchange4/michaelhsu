# michaelhsu

> The Michael Hsu CLI

## Usage

```shell
$ npx michaelhsu
```

## Demo

![demo](./docs/demo.gif)

## Inspiration

* https://github.com/sindresorhus/sindresorhus

## API

```sh
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

* node >= 10.0.0
* yarn >= 1.6.0

```
$ yarn install --pure-lockfile
$ ./src/cli
```

## Test

```
$ yarn run format
$ yarn run eslint
$ yarn run flow
```

### NPM Release

> Any git tags.

1.  Create a new git tag
2.  Update `CHANGELOG.md`

```sh
$ npm version patch
$ npm run changelog
```

## License

MIT © [Michael Hsu](https://michaelhsu.tw)
