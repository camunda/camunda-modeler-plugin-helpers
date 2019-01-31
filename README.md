> As of version `3.0.0` this library exposes [ES modules](http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules). Use an ES module aware bundler such as [Webpack](https://webpack.js.org) or [Rollup](https://rollupjs.org) to bundle it for the browser.


# Camunda Modeler Plugin Helpers :electric_plug:

[![Compatible with Camunda Modeler version 2.2](https://img.shields.io/badge/Camunda%20Modeler-2.2+-blue.svg)](https://github.com/camunda/camunda-modeler)


Helper functions for bundling your Camunda Modeler client plugins.

## How to use

### bpmn-js

Register plugin to be passed as additional module:

```javascript
import {
  registerBpmnJSPlugin
} from 'camunda-modeler-plugin-helpers';

const BpmnJSModule = {
  __init__: [ 'myService' ],
  myService: [ 'type', ... ]
};

registerBpmnJSPlugin(BpmnJSModule);
```

Register a custom [moddle extension](https://github.com/bpmn-io/bpmn-moddle):

```javascript
import {
  registerBpmnJSModdleExtension
} from 'camunda-modeler-plugin-helpers';

var moddleDescriptor = {
  name: 'my descriptor',
  uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
  prefix: 'mydesc',

  ...
};

registerBpmnJSModdleExtension(moddleDescriptor);
```


## License

MIT
