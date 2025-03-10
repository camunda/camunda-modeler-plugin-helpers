const { expect } = require('chai');
const { mockVendorObject, noop } = require('../../TestHelper.js');

describe('vendor/@carbon/react', function() {

  let carbonReact;

  beforeEach(async function() {
    // Mock global window.vendor.carbon
    mockVendorObject('carbonReact', {
        Button: noop,
        TextInput: noop,
        Theme: noop
    });

    // This will import the carbon react module from the mocked window object
    const carbonReactModule = await import('../../../vendor/@carbon/react.js');
    carbonReact = carbonReactModule.default;
  });

  it('should export Carbon React object as default', function() {
    expect(carbonReact).to.exist;
  });
});


describe('vendor/@carbon/icons-react', function() {

  let carbonReactIcons;

  beforeEach(async function() {

    mockVendorObject('carbonIconsReact', {
      Add: noop,
      Close: noop,
    });

    // This will import the carbon react icons module from the mocked window object
    const carbonReactIconsModule = await import('../../../vendor/@carbon/icons-react.js');
    carbonReactIcons = carbonReactIconsModule.default;
  });

  it('should export Carbon React Icons object as default', function() {
    expect(carbonReactIcons).to.exist;
  });
});