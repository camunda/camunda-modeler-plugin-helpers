# Camunda Modeler Plugin Helpers :electric_plug:

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
