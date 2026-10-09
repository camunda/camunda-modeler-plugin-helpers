import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  build: [
    '*.cjs',
  ],
  test: [
    'test/**/**/*.js'
  ],
};

/** @type {import('eslint').Linter.Config[]} */
export default [
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

  // the helpers are CommonJS modules, bundled by the plug-in's webpack
  {
    ignores: [ ...files.build, ...files.test ],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly'
      }
    }
  },

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
        module: true,
        global: true
      },
    },
    files: files.test
  }
];
