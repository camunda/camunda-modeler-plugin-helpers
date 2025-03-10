function mockVendorObject(instanceKey, instance) {
  global.window = global.window || {};
  global.window.vendor = global.window.vendor || {};
  window.vendor[instanceKey] = instance;
}

function mockWindowObject(instanceKey, instance) {
  global.window = global.window || {};
  window[instanceKey] = instance;
}

function noop() {}

module.exports = {
  mockWindowObject,
  mockVendorObject,
  noop
};
