'use strict';
const linkToLocation = require('../index');

describe('linkToLocation', () => {
  beforeEach(() => {
    global.document = {
      createElement: jest.fn(),
    };

    global.location = {};
  });

  afterEach(() => {
    delete global.document;
    delete global.location;
  });

  describe('with a string input', () => {
    let anchorElement = {
      pathname: 'foo',
      hash: 'bar',
      search: 'baz'
    };

    beforeEach(() => {
      global.document.createElement.mockImplementation(() => anchorElement);
    });

    afterEach(() => {
      anchorElement = {
        pathname: 'foo',
        hash: 'bar',
        search: 'baz'
      };
    });

    test('creates an anchor element', () => {
      linkToLocation('http://quux.corgly');
      expect(global.document.createElement).toHaveBeenCalledWith('a');
    });

    test('removes credentials from provided URL string and assigns to href property', () => {
      linkToLocation('http://foo:bar@quux.corgly');
      expect(anchorElement.href).toBe('quux.corgly');
    });

    test('returns an abbreviated Location object with values from HTMLAnchorElement', () => {
      expect(linkToLocation('http://quux.corgly')).toEqual({
        pathname: 'foo',
        hash: 'bar',
        search: 'baz'
      });
    });

    test('assigns `location.href` to itself if `location.host` is an empty string', () => {
      global.location.host = '';
      // Create an immutable property so that we can be sure that our function attempts
      // to assign it a value.
      Object.defineProperty(global.location, 'href', {writeable: false, value: 'foo'});
      expect(linkToLocation.bind(this, 'http://quux.corgly')).toThrow();
    });
  });

  describe('with an anchor input', () => {
    test('returns three properties from the HTMLAnchorElement', () => {
      const fauxAnchorElement = {
        pathname: 'foo',
        hash: 'bar',
        search: 'qux',
        quux: 'corgly'
      };

      expect(linkToLocation(fauxAnchorElement)).toEqual({
        pathname: 'foo',
        hash: 'bar',
        search: 'qux'
      });
    });
  });
});
