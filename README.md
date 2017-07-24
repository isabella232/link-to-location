# link-to-location

Convert a link (`HTMLAnchorElement` or URL) to an abbreviated Location object.

### Usage
This module provides a single function which accepts either an `HTMLAnchorElement` or URL string and returns an object with three properties: `pathname`, `hash`, and `seach`.

#### Example Usage:
```js
const linkToLocation = require('link-to-location');

linkToLocation('http://user:pw@foo.bar.baz/qux?quux=grault#fred');
/*
  {
    pathname: 'foo.bar.baz/qux',
    hash: '#fred',
    search: '?quux=grault'
  }
*/
```
