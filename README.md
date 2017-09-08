# @mapbox/link-to-location

Convert a link (`HTMLAnchorElement` or URL) to an object with `pathname`, `hash`, and `search` properties.
Uses the browser's native link parsing to avoid unnecessary code.

## Installation

```
npm install @mapbox/link-to-location
```

## API

### linkToLocation

`linkToLocation(input)`

Returns an object with three properties with string values: `pathname`, `hash`, and `search`.

#### input

Type: `HTMLAnchorElement` | `string`.

Either the DOM element itself or a URL.

## Example

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
