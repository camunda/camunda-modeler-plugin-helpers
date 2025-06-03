const { expect } = require('chai');
const { mockWindowObject, noop } = require('../../TestHelper.js');

describe('vendor/react', function() {

  let React;

  beforeEach(async function() {
    // Mock global window.react
    mockWindowObject('react', {
      React: {
        useState: noop,
        useEffect: noop
      }
    });

    // This will import the react module from the mocked window object
    reactModule = await import('../../../vendor/react.js');
    React = reactModule.default.React;
  });

  it('should export React object as default', function() {
    expect(React).to.exist;
    expect(React.useState).to.exist;
  });
});
