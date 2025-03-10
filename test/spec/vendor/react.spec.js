import { expect } from 'chai';
import { mockWindowObject, noop } from '../../TestHelper.js';


describe('vendor/react', function() {

    let React, reactModule;

    beforeEach(async function() {
    
    // mock react instance
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

  it('should export', function() {
    expect(React).to.exist;
    expect(React.useState).to.exist;
  });

});