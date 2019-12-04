# range

[![Build Status](https://secure.travis-ci.org/chocolateboy/range.svg)](http://travis-ci.org/chocolateboy/range)
[![NPM Version](https://img.shields.io/npm/v/inclusive-range.svg)](https://www.npmjs.org/package/inclusive-range)

<!-- toc -->

- [NAME](#name)
- [FEATURES](#features)
- [INSTALLATION](#installation)
- [SYNOPSIS](#synopsis)
- [DESCRIPTION](#description)
  - [Why?](#why)
- [EXPORTS](#exports)
  - [range (default)](#range-default)
- [COMPATIBILITY](#compatibility)
- [DEVELOPMENT](#development)
  - [NPM Scripts](#npm-scripts)
- [SEE ALSO](#see-also)
- [VERSION](#version)
- [AUTHOR](#author)
- [COPYRIGHT AND LICENSE](#copyright-and-license)

<!-- tocstop -->

# NAME

inclusive-range - a no-frills number-range generator

# FEATURES

- &lt; 250 bytes minified and gzipped
- ranges include the start and end value (inclusive)
- ranges are iterable (no superfluous `forEach`, `toArray` etc. methods)
- optional step parameter
- ascending or descending ranges
- infinite ranges
- developer-friendly (TypeScript)

# INSTALLATION

    $ npm install inclusive-range

# SYNOPSIS

```javascript
import range from 'inclusive-range'

for (const value of range(1)) { // 1 to infinity
    console.log(value)
}

[...range(1, 5)]     // [1, 2, 3, 4, 5]
[...range(5, 1)]     // [5, 4, 3, 2, 1]
[...range(1, 10, 3)] // [1, 4, 7, 10]
[...range(10, 1, 3)] // [10, 7, 4, 1]
```

# DESCRIPTION

This module exports a function which generates an iterable number-range from
the start value to the end value (inclusive) with an optional step. If the step
is omitted, it defaults to 1. If the end is omitted, it defaults to Infinity.
If the start is omitted, it defaults to 1.

## Why?

There are dozens of range implementations on NPM, none of which
<abbr title="Do What I Mean">DWIM</abbr>.

Many return eager arrays rather than lazy iterables. Most are exclusive, e.g.
`range(1, 10)` returns 1 to 9 rather than 1 to 10. Some are inclusive, but bolt
on other features such as `map` or `forEach` methods, which may be useful as
part of a library like [wu.js](https://github.com/fitzgen/wu.js/), but which
are superfluous in a standalone range function. Most aren't typed (TypeScript).

This has all the core functionality without any bells and whistles and clocks
in at ~250 bytes minified and gzipped.

# EXPORTS

## range (default)

**Type**: range(start?: number, end?: number, step?: number) → Iterable&lt;number&gt;

```javascript
import range from 'inclusive-range'

const asc  = Array.from(range(1, 5)) // [1, 2, 3, 4, 5]
const desc = Array.from(range(5, 1)) // [5, 4, 3, 2, 1]

for (const value of range(1, 10, 3)) {
    console.log(value) // 1, 4, 7, 10
}
```

Returns an iterable which generates numbers from `start` to `end` inclusive.
The optional `step` (default: 1) is added to (ascending) or subtracted from
(descending) the previous value to produce the next value. If `end` is omitted,
it defaults to Infinity. If `start` is omitted, it defaults to 1.

# COMPATIBILITY

Any platform (browser, Node.js etc.) which [supports ES6 generators](https://caniuse.com/#search=es6-generators).

# DEVELOPMENT

<details>

## NPM Scripts

The following NPM scripts are available:

- build - compile the library and save it to the target directory
- clean - remove the target directory and its contents
- rebuild - remove the target directory and regenerate the build
- test - rebuild the library, and run the test suite

</details>

# SEE ALSO

- [r...e](https://www.npmjs.com/package/r...e) - not iterable, adds extra methods
- [@sullux/fp-light-range](https://www.npmjs.com/package/@sullux/fp-light-range) - adds currying, no step

# VERSION

0.0.1

# AUTHOR

[chocolateboy](mailto:chocolate@cpan.org)

# COPYRIGHT AND LICENSE

Copyright © 2019 by chocolateboy.

This is free software; you can redistribute it and/or modify it under the
terms of the [Artistic License 2.0](http://www.opensource.org/licenses/artistic-license-2.0.php).
