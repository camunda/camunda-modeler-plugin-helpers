const bpmnIoPlugin = require('eslint-plugin-bpmn-io');

const files = {
  build: [
    '*.cjs',
  ],
  test: [
    'test/**/**/*.js'
  ],
};

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...bpmnIoPlugin.configs.browser.map(config => {
    return {
      ...config,
      ignores: files.build
    };
  }),
  ...bpmnIoPlugin.configs.node.map(config => {
    return {
      ...config,
      files: files.build
    };
  }),
  // test
  ...bpmnIoPlugin.configs.mocha.map(config => {
    return {
      ...config,
      files: files.test
    };
  }),
  {
    languageOptions: {
      globals: {
        sinon: true,
        require: true,
        global: true
      },
    },
    files: files.test
  }
];
