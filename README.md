# Camunda Modeler Plugin Helpers :electric_plug:

[![Compatible with Camunda Modeler version 2.2](https://img.shields.io/badge/Camunda%20Modeler-2.2+-blue.svg)](https://github.com/camunda/camunda-modeler)

Helper functions and core utility exports for bundling your Camunda Modeler client plugins.

> [!WARNING]
> This library re-exposes core utilities that you want to use as you develop plug-ins for the [Camunda Modeler](https://github.com/camunda/camunda-modeler).
> If a plug-in uses any of the utilities, i.e. React, then it **must** consume them via the respective [helper export](#api). Use our [webpack plug-in](https://github.com/camunda/camunda-modeler-webpack-plugin) to accomplish that automatically, or use a source mod / configure your plug-in bundler accordingly.


## Usage

Install the plug-in:

```
npm install camunda-modeler-plugin-helpers
```

Use any of the [exposed utilities](#api).

## API

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

## UI Components
> [!NOTE]
> This feature requires **Camunda Modeler 5.29+**.

These components are available for use:

- **Fill**
- **Modal**
- **Overlay** 
- **Section**
- **ToggleSwitch**
- **TextInput**
- **CachedComponent**

[Components](https://github.com/camunda/camunda-modeler-plugin-helpers/tree/main/components) exported for use in Camunda Modeler client plugins. 

```javascript
import Fill from 'camunda-modeler-plugin-helpers/components/Fill.js';

  function MyReactExtension() {
    return <Fill ... />
};
```

## Higher-Order Function Helpers
These higher-order components (HOCs) enhance functionality:

- **[WithCache](https://github.com/camunda/camunda-modeler-plugin-helpers/blob/main/components/WithCache.js)** - pass cache and forward refs to a wrapped component.

- **[WithCachedState](https://github.com/camunda/camunda-modeler-plugin-helpers/blob/main/components/WithCachedState.js)** - lazy-load a wrapped component.

## Helper Functions

**[createTab](https://github.com/camunda/camunda-modeler-plugin-helpers/blob/main/components/create-tab.js)** - helper function to create Tab components to be used with the TabProvider via the `Comp#createCachedState` method.

## Properties Panel

```js
import { useService } from 'camunda-modeler-plugin-helpers/vendor/bpmn-js-properties-panel';
import { useState } from 'camunda-modeler-plugin-helpers/vendor/@bpmn-io/properties-panel/preact/hooks';
```

## Packages

### React

> [!NOTE]
> Should be used in place of `react` imports.

```javascript
import React, { useEffect } from 'camunda-modeler-plugin-helpers/vendor/react.js';
```

### Carbon

> [!NOTE]
> This feature requires **Camunda Modeler 5.38+**.
> Should be used in place of `@carbon/react` imports.

```javascript
import { Button, Theme, TextInput } from 'camunda-modeler-plugin-helpers/vendor/@carbon/react';
import { Add } from 'camunda-modeler-plugin-helpers/vendor/@carbon/icons-react';;
```


## Additional Resources

* [camunda-modeler-webpack-plugin](https://github.com/camunda/camunda-modeler-webpack-plugin) - Bundle your libraries for use within the [Camunda Modeler](https://github.com/camunda/camunda-modeler)


## License

MIT
