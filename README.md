# Camunda Modeler Plugin Helpers :electric_plug:

Helper functions for bundling your Camunda Modeler client plugins.

## How to use

Your file to be bundled:

```javascript
var registerBpmnJSPlugin = require('camunda-modeler-plugin-helpers').registerBpmnJSPlugin;
var module = require('./index');

registerBpmnJSPlugin(module);
```

## Currently Supported Client plugins

- bpmn-js
