# Camunda Modeler Plugin Helpers :electric_plug:

Helper functions for bundling your Camunda Modeler client plugins.

## How to use

### bpmn-js

Register plugin to be passed as additional module:

```javascript
var registerBpmnJSPlugin = require('camunda-modeler-plugin-helpers').registerBpmnJSPlugin;
var module = require('./index');

registerBpmnJSPlugin(module);
```

Register plugin to be passed as moddle extension:

```javascript
var registerBpmnJSModdleExtension = require('camunda-modeler-plugin-helpers').registerBpmnJSModdleExtension;
var module = require('./index');

registerBpmnJSModdleExtension(module);
```

## License

MIT
